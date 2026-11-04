import type { On } from 'claude-code'
import { expect, test } from 'claude-code/testing'

import { parse, parseInline } from '../hooks/parse'

const reply = (text: string) =>
	({
		plugin: 'texy',
		component: 'AssistantMessage',
		requestId: 'msg-1',
		props: { text, isFirstOfReply: true },
	}) as const

test('inline dollars: math, prices and escapes', async () => {
	const kinds = (s: string) => parseInline(s).map(p => p.kind)
	expect(kinds('the loss $L(w)$ falls')).toEqual(['text', 'math', 'text'])
	expect(kinds('costs $5 and $10 today')).toEqual(['text'])
	expect(kinds('a \\$ sign and `$x$` in code')).toEqual(['text', 'code', 'text'])
	expect(kinds('\\(a^2+b^2\\)')).toEqual(['math'])
})

test('code fences are never math, display math is found', async () => {
	const blocks = parse('Before\n\n```js\nconst a = "$x$"\n$$y$$\n```\n\n$$\\int_0^1 x\\,dx$$\n\nAfter')
	expect(blocks.map(b => b.kind)).toEqual(['markdown', 'display', 'markdown'])
	const display = blocks[1]
	expect(display?.kind === 'display' ? display.tex : '').toBe('\\int_0^1 x\\,dx')
})

test('a list keeps its other items as markdown', async () => {
	const blocks = parse('- plain item\n- item with $x^2$\n- another plain')
	expect(blocks.map(b => b.kind)).toEqual(['markdown', 'row', 'markdown'])
})

test('a reply with math draws SVG on desktop and is left alone on the terminal', async ($, on) => {
	on('ui.render', ($, e) => {
		const { Text } = $.ui.resolve(e)
		return <Text>engine</Text>
	})

	const desktop = await $.ui.mount({ ...reply('Euler: $e^{i\\pi}+1=0$\n\n$$\\sum_{n=1}^\\infty \\frac{1}{n^2}$$'), surface: 'desktop' })
	const svg = await desktop.find({ type: 'Svg' })
	expect(svg).toBeDefined()
	expect(await desktop.find({ type: 'Markdown', text: /Euler:/ })).toBeDefined()
	await desktop.unmount()

	const plain = await $.ui.mount({ ...reply('no math here, just $5'), surface: 'desktop' })
	expect(await plain.find({ type: 'Text', text: 'engine' })).toBeDefined()
	await plain.unmount()

	const terminal = await $.ui.mount({ ...reply('Euler: $e^{i\\pi}+1=0$'), surface: 'terminal' })
	expect(await terminal.find({ type: 'Text', text: 'engine' })).toBeDefined()
	await terminal.unmount()
})

test('broken TeX shows its source instead', async ($, on) => {
	on('ui.render', ($, e) => {
		const { Text } = $.ui.resolve(e)
		return <Text>engine</Text>
	})
	const ui = await $.ui.mount({ ...reply('bad: $\\frac{a$ ok'), surface: 'desktop' })
	expect(await ui.find({ type: 'Markdown', text: /\$\\frac\{a\$/ })).toBeDefined()
	await ui.unmount()
})

// What a test stands up for /texy: $.store kept in memory, as a session keeps it.
function withStore(on: On) {
	const store = new Map<string, unknown>()
	on('store.get', ($, e) => ({ value: store.get(e.key) }))
	on('store.set', ($, e) => {
		store.set(e.key, e.value)
		return { value: undefined }
	})
}

test('/texy opens the pane and sets the size', async ($, on) => {
	let placed = true
	on('ui.open', () => ({ value: placed ? { isPlaced: true } : { isPlaced: false, reason: 'narrow' } }))
	withStore(on)
	// A /texy typed at the prompt, as the engine hands it to the command.
	const texy = (args: string) =>
		$.command.run({ command: 'texy', args, origin: { kind: 'composer' }, presentation: { isFullscreen: false, columns: 100 } })
	expect((await texy('')).text).toBe('texy settings opened.')
	// Without room for the pane, /texy answers with the size instead.
	placed = false

	expect((await texy('size large')).text).toBe('Math size set to large.')
	expect((await texy('')).text).toContain('Math size is large')

	expect((await texy('size huge')).text).toContain('small | normal | large')
	expect((await texy('color dark')).text).toContain('one setting')
	expect((await texy('')).text).toContain('Math size is large')
})

test('the pane previews text and math, and a press changes the size', async ($, on) => {
	on('ui.open', () => ({ value: { isPlaced: false, reason: 'narrow' } }))
	withStore(on)
	// A /texy typed at the prompt, as the engine hands it to the command.
	const texy = (args: string) =>
		$.command.run({ command: 'texy', args, origin: { kind: 'composer' }, presentation: { isFullscreen: false, columns: 100 } })
	const PANE = {
		plugin: 'texy',
		component: 'Pane',
		requestId: 'texy',
		props: { title: 'texy', isFocused: false, bodyColumns: 40, placement: 'dock', scroll: { offset: 0, bodyRows: 20 }, view: {} },
	} as const

	for (const surface of ['terminal', 'desktop'] as const) {
		const ui = await $.ui.mount({ ...PANE, surface })
		expect(await ui.find({ key: 'size-large' })).toBeDefined()
		await ui.unmount()
	}

	const ui = await $.ui.mount({ ...PANE, surface: 'desktop' })
	expect(await ui.find({ type: 'Markdown', text: /normal/ })).toBeDefined()
	expect(await ui.find({ type: 'Svg' })).toBeDefined()
	await ui.press({ key: 'size-small' })
	expect((await texy('')).text).toContain('Math size is small')
	await ui.unmount()
})
