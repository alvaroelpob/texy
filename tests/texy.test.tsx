import type { On } from 'claude-code'
import { expect, test } from 'claude-code/testing'

import { svgOf } from '../hooks/math'
import { parse, parseInline } from '../hooks/parse'
import { handToApp, isSafeDisplay, isSafeInline } from '../hooks/safe'

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

// A multi-line block with its $$ on the formula's lines: the app shows it as text.
const ALIGNED = '$$\\begin{aligned}\nR_n &= An + B\\\\\nR_{n-1} &= A(n-1) + B\n\\end{aligned}$$'

test('the safe list: what the app renders by itself', async () => {
	// Inline formulas seen rendering in the app.
	expect(isSafeInline('\\binom{n}{k} = \\frac{n!}{k!\\,(n-k)!}')).toBe(true)
	expect(isSafeInline('|A \\cup B| = |A| + |B| - |A \\cap B|')).toBe(true)
	expect(isSafeInline('a \\equiv b \\pmod{n}')).toBe(true)
	// A long one failed in the app; so do untested macros and line breaks.
	expect(isSafeInline('|A \\cup B \\cup C| = |A| + |B| + |C| - |A \\cap B| - |A \\cap C| - |B \\cap C| + |A \\cap B \\cap C|')).toBe(false)
	expect(isSafeInline('\\ce{H2O}')).toBe(false)
	expect(isSafeInline('\\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix}')).toBe(false)

	// Centred: one line, or $$ on lines of their own.
	expect(isSafeDisplay('$$a^2 + b^2 = c^2$$', 'a^2 + b^2 = c^2')).toBe(true)
	expect(isSafeDisplay('\\[a^2 + b^2 = c^2\\]', 'a^2 + b^2 = c^2')).toBe(true)
	const own = '$$\n\\begin{aligned}\na &= b \\\\\nc &= d\n\\end{aligned}\n$$'
	expect(isSafeDisplay(own, own.slice(3, -3).trim())).toBe(true)
	// $$ stuck to multi-line content is what breaks.
	expect(isSafeDisplay(ALIGNED, ALIGNED.slice(2, -2))).toBe(false)
	// Environments not seen rendering, and bare environments.
	expect(isSafeDisplay('$$\\begin{gather} a \\\\ b \\end{gather}$$', '\\begin{gather} a \\\\ b \\end{gather}')).toBe(false)
	expect(isSafeDisplay('\\begin{align}a &= b\\end{align}', '\\begin{align}a &= b\\end{align}')).toBe(false)
})

test('safe formulas go back to the app as written', async () => {
	const text = 'Sum: $\\frac{a}{b}$ here.\n\n$$a^2 + b^2 = c^2$$\n\n' + ALIGNED
	const blocks = handToApp(parse(text))
	expect(blocks.map(b => b.kind)).toEqual(['markdown', 'display'])
	expect(blocks[0]?.kind === 'markdown' ? blocks[0].text : '').toBe('Sum: $\\frac{a}{b}$ here.\n\n$$a^2 + b^2 = c^2$$')
})

test('safe formulas get the size command; unsafe ones are left for texy', async () => {
	const text = 'Sum $\\frac{a}{b}$ and \\(x^2\\).\n\n$$a^2 + b^2 = c^2$$\n\n\\[\\sqrt{2}\\]\n\n$$\n\\begin{aligned}\na &= b \\\\\nc &= d\n\\end{aligned}\n$$\n\n' + ALIGNED
	const large = handToApp(parse(text), 'large')
	expect(large.map(b => b.kind)).toEqual(['markdown', 'display'])
	const md = large[0]?.kind === 'markdown' ? large[0].text : ''
	expect(md).toContain('Sum $\\large \\frac{a}{b}$ and \\(\\large x^2\\).')
	expect(md).toContain('$$\\large a^2 + b^2 = c^2$$')
	expect(md).toContain('\\[\\large \\sqrt{2}\\]')
	expect(md).toContain('$$\n\\large\n\\begin{aligned}')
	// The unsafe block is judged as written and stays for texy, with no command added.
	expect(large[1]?.kind === 'display' ? large[1].raw : '').toBe(ALIGNED)

	expect(handToApp(parse('Sum $\\frac{a}{b}$.'), 'small')[0]).toEqual({ kind: 'markdown', text: 'Sum $\\small \\frac{a}{b}$.' })
	// normal leaves the text exactly as written.
	expect(handToApp(parse('Sum $\\frac{a}{b}$.'), 'normal')[0]).toEqual({ kind: 'markdown', text: 'Sum $\\frac{a}{b}$.' })
})

test('at large, a reply the app draws alone gets its sized text', async ($, on) => {
	on('ui.open', () => ({ value: { isPlaced: false, reason: 'narrow' } }))
	withStore(on)
	const drawn: string[] = []
	on('ui.render', ($, e) => {
		if (e.component === 'AssistantMessage') drawn.push(e.props.text)
		const { Text } = $.ui.resolve(e)
		return <Text>engine</Text>
	})
	await $.command.run({ command: 'texy', args: 'size large', origin: { kind: 'composer' }, presentation: { isFullscreen: false, columns: 100 } })

	const ui = await $.ui.mount({ ...reply('Sum: $\\frac{a}{b}$'), surface: 'desktop' })
	expect(await ui.find({ type: 'Text', text: 'engine' })).toBeDefined()
	expect(drawn[drawn.length - 1]).toBe('Sum: $\\large \\frac{a}{b}$')
	await ui.unmount()
})

test('texy draws only what the app cannot, and nothing on the terminal', async ($, on) => {
	on('ui.render', ($, e) => {
		const { Text } = $.ui.resolve(e)
		return <Text>engine</Text>
	})

	// The aligned block is drawn by texy; the safe line stays the app's Markdown.
	const desktop = await $.ui.mount({ ...reply(`Then $x^2$ here.\n\n${ALIGNED}`), surface: 'desktop' })
	expect(await desktop.findAll({ type: 'Svg' })).toHaveLength(1)
	expect(await desktop.find({ type: 'Markdown', text: /Then \$x\^2\$ here\./ })).toBeDefined()
	await desktop.unmount()

	// Nothing left for texy: the app draws the whole reply.
	const safe = await $.ui.mount({ ...reply('Sum: $\\frac{a}{b}$\n\n$$a^2 + b^2 = c^2$$'), surface: 'desktop' })
	expect(await safe.find({ type: 'Text', text: 'engine' })).toBeDefined()
	await safe.unmount()

	const plain = await $.ui.mount({ ...reply('no math here, just $5'), surface: 'desktop' })
	expect(await plain.find({ type: 'Text', text: 'engine' })).toBeDefined()
	await plain.unmount()

	const terminal = await $.ui.mount({ ...reply(`Then $x^2$ here.\n\n${ALIGNED}`), surface: 'terminal' })
	expect(await terminal.find({ type: 'Text', text: 'engine' })).toBeDefined()
	await terminal.unmount()
})

test('broken TeX that texy draws shows its source instead', async ($, on) => {
	on('ui.render', ($, e) => {
		const { Text } = $.ui.resolve(e)
		return <Text>engine</Text>
	})
	const ui = await $.ui.mount({ ...reply('bad:\n\n$$\\begin{aligned}\nx &= \\frac{a\n\\end{aligned}$$'), surface: 'desktop' })
	expect(await ui.find({ type: 'Markdown', text: /frac\{a/ })).toBeDefined()
	await ui.unmount()
})

test("texy's SVGs carry nothing but the drawing", async () => {
	const svg = svgOf('x_i^2 + y', false, 'auto', 'normal') ?? ''
	expect(svg.startsWith('<svg')).toBe(true)
	expect(svg.includes('data-mml-node')).toBe(false)
	expect(svg.includes('xlink')).toBe(false)
	expect(svg.includes('MJX-')).toBe(false)
	expect(svg.includes('</path>')).toBe(false)
	expect(svg.includes('href="#g0"')).toBe(true)
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
