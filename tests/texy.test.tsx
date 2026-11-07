import type { On } from 'claude-code'
import { expect, test } from 'claude-code/testing'

import { keepBreaks } from '../hooks/draw'
import { svgOf } from '../hooks/math'
import { parse, parseInline } from '../hooks/parse'
import { fixTableMath, handToApp, isSafeDisplay, isSafeInline } from '../hooks/safe'

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

test('inline: the limits measured in the app', async () => {
	// 60 characters render in the app, 64 do not; spaces make no difference.
	const sixty = 'x_1 + x_2 + x_3 + x_4 + x_5 + x_6 + x_7 + x_8 + x_9 + x_{10}'
	expect(sixty.length).toBe(60)
	expect(isSafeInline(sixty)).toBe(true)
	expect(isSafeInline(sixty + ' + a')).toBe(false)
	const noSpaces = sixty.replaceAll(' ', '') + '+x_{11}+x_{12}+x_{13}+x_{14}+x_{15}'
	expect(noSpaces.length).toBe(77)
	expect(isSafeInline(noSpaces)).toBe(false)
	// \| breaks an inline formula in the app, its look-alikes do not.
	expect(isSafeInline('\\|x\\|')).toBe(false)
	expect(isSafeInline('\\left\\| x \\right\\|')).toBe(false)
	expect(isSafeInline('\\lVert x \\rVert')).toBe(true)
	expect(isSafeInline('\\Vert x \\Vert')).toBe(true)
	// A plain word of four letters, a bare % or CJK text make the app skip it.
	expect(isSafeInline('mass = m')).toBe(false)
	expect(isSafeInline('\\text{mass} = m')).toBe(true)
	expect(isSafeInline('\\mathrm{mass} = m')).toBe(true)
	expect(isSafeInline('p = 50%')).toBe(false)
	expect(isSafeInline('p = 50\\%')).toBe(true)
	expect(isSafeInline('\u901f\u5ea6 = v')).toBe(false)
	// A letter or a short expression is math to the app.
	expect(isSafeInline('x')).toBe(true)
	expect(isSafeInline('2x+1')).toBe(true)
	// Not in the app's KaTeX, or meant for a centred formula only.
	expect(isSafeInline('\\substack{i<n}')).toBe(false)
	expect(isSafeInline('\\tag{1} x = 1')).toBe(false)
	expect(isSafeInline('\\newcommand{\\R}{\\mathbb{R}} \\R^n')).toBe(false)
})

test('centred: what the app renders and what it numbers wrongly', async () => {
	const bmatrix = '\\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix}'
	expect(isSafeDisplay(`$$${bmatrix}$$`, bmatrix)).toBe(true)
	// \| is fine centred.
	expect(isSafeDisplay('$$\\|x\\| = 1$$', '\\|x\\| = 1')).toBe(true)
	// A multi-line \[ ... \] is shown as text; so is anything past the app's length.
	expect(isSafeDisplay('\\[\nx^2\n\\]', 'x^2')).toBe(false)
	expect(isSafeDisplay(`$$${'x'.repeat(5001)}$$`, 'x'.repeat(5001))).toBe(false)
	// align and gather number every row (1) in the app; texy draws them.
	const align = '\\begin{align} x &= 1 \\\\ y &= 2 \\end{align}'
	expect(isSafeDisplay(`$$${align}$$`, align)).toBe(false)
	// \ce is not in the app.
	expect(isSafeDisplay('$$\\ce{H2O}$$', '\\ce{H2O}')).toBe(false)
})

test('bare matrices are formulas; inline ones stay with their dollars', async () => {
	const bare = parse('Matrix:\n\n\\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}')
	expect(bare.map(b => b.kind)).toEqual(['markdown', 'display'])
	const inline = parse('Here $\\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix}$ is a vector.')
	expect(inline.map(b => b.kind)).toEqual(['row'])
})

test('texy keeps what the app cannot draw, in prose too', async () => {
	expect(handToApp(parse('The norm $\\|v\\|$ here.')).map(b => b.kind)).toEqual(['row'])
	expect(handToApp(parse('The norm $\\lVert v \\rVert$ here.')).map(b => b.kind)).toEqual(['markdown'])
})

test('a $$ inside a sentence does not pair with the next display', async () => {
	const blocks = parse('B3. Display con $$ en sus propias líneas:\n$$\n\\sum_{k=0}^{n} k\n$$\nB4. con $$ pegado:\n$$a = b\nd = e$$')
	const tex = blocks.flatMap(b => (b.kind === 'display' ? [b.tex] : []))
	expect(tex).toEqual(['\\sum_{k=0}^{n} k', 'a = b\nd = e'])
	// A \[ in a sentence is no different; one that starts a line still spans lines.
	const bracket = parse('Texto con \\[ suelto:\n\\[ x^2 + y^2\n= r^2 \\]')
	expect(bracket.flatMap(b => (b.kind === 'display' ? [b.tex] : []))).toEqual(['x^2 + y^2\n= r^2'])
	// After text, a display that closes on its own line is still one.
	expect(parse('Antes: $$x^2$$').map(b => b.kind)).toEqual(['markdown', 'display'])
})

test('each line stays its own row, so one formula does not pull in its neighbours', async () => {
	const blocks = handToApp(parse('P1. $mass = m$\nP2. $x^2$\nP3. $\\|v\\|$\nplain'))
	expect(blocks.map(b => b.kind)).toEqual(['row', 'markdown', 'row', 'markdown'])
	expect(blocks[1]).toEqual({ kind: 'markdown', text: 'P2. $x^2$', tight: true })
	expect(blocks[3]).toEqual({ kind: 'markdown', text: 'plain', tight: true })
})

test('line breaks inside a paragraph are kept hard; code and tables are left alone', async () => {
	expect(keepBreaks('a\nb')).toBe('a  \nb')
	expect(keepBreaks('a\n\nb')).toBe('a\n\nb')
	expect(keepBreaks('a  \nb')).toBe('a  \nb')
	expect(keepBreaks('```\nx\ny\n```')).toBe('```\nx\ny\n```')
	expect(keepBreaks('| a | b |\n| - | - |')).toBe('| a | b |\n| - | - |')
	expect(keepBreaks('x $a$\ny')).toBe('x $a$  \ny')
	// A display's lines are left exactly as written, and so are the ones touching its edges.
	expect(keepBreaks('$$\na = b\n$$\nafter')).toBe('$$\na = b\n$$\nafter')
	expect(keepBreaks('before\n$$x$$\nafter')).toBe('before\n$$x$$\nafter')
	expect(keepBreaks('\\[\nx\n\\]\nafter')).toBe('\\[\nx\n\\]\nafter')
})

test('text under a display is a paragraph of its own, never a continuation of the display', async () => {
	const handed = handToApp(parse('F4. Normal:\n$$x^2$$\nF5. $y^2$\nG1. $z^2$'))
	const md = handed[0]?.kind === 'markdown' ? handed[0].text : ''
	expect(md).toContain('$$x^2$$\n\nF5. $y^2$\nG1. $z^2$')
	expect(md).not.toContain('$$x^2$$\nF5')
	// The same when texy draws a neighbour: no display is ever glued to a line of text.
	for (const b of handToApp(parse('A:\n$$x^2$$\nB. $y^2$\nC. $\\|v\\|$'))) {
		if (b.kind === 'markdown') expect(/\$\$[^\n]*\$\$\n[^\n]/.test(b.text)).toBe(false)
	}
})

test('lines the app keeps stay on their own lines when texy draws a neighbour', async ($, on) => {
	on('ui.render', ($, e) => {
		const { Text } = $.ui.resolve(e)
		return <Text>engine</Text>
	})
	const ui = await $.ui.mount({ ...reply('P1. $x^2$\nP2. $y^2$\nP3. $\\|v\\|$'), surface: 'desktop' })
	expect(await ui.find({ type: 'Markdown', text: /P1\. \$x\^2\$ {2}\nP2\. \$y\^2\$/ })).toBeDefined()
	await ui.unmount()
})

test('safe formulas go back to the app as written', async () => {
	const text = 'Sum: $\\frac{a}{b}$ here.\n\n$$a^2 + b^2 = c^2$$\n\n' + ALIGNED
	const blocks = handToApp(parse(text))
	expect(blocks.map(b => b.kind)).toEqual(['markdown', 'display'])
	expect(blocks[0]?.kind === 'markdown' ? blocks[0].text : '').toBe('Sum: $\\frac{a}{b}$ here.\n\n$$a^2 + b^2 = c^2$$')
})

test('safe formulas go back as written at any size; unsafe ones are left for texy', async () => {
	const text = 'Sum $\\frac{a}{b}$ and \\(x^2\\).\n\n$$a^2 + b^2 = c^2$$\n\n\\[\\sqrt{2}\\]\n\n$$\n\\begin{aligned}\na &= b \\\\\nc &= d\n\\end{aligned}\n$$\n\n' + ALIGNED
	const large = handToApp(parse(text), 'large')
	expect(large.map(b => b.kind)).toEqual(['markdown', 'display'])
	const md = large[0]?.kind === 'markdown' ? large[0].text : ''
	expect(md).toContain('Sum $\\frac{a}{b}$ and \\(x^2\\).')
	expect(md).toContain('$$a^2 + b^2 = c^2$$')
	expect(md).toContain('\\[\\sqrt{2}\\]')
	expect(md).toContain('$$\n\\begin{aligned}')
	expect(md).not.toContain('\\large')
	// The unsafe block is judged as written and stays for texy, with no command added.
	expect(large[1]?.kind === 'display' ? large[1].raw : '').toBe(ALIGNED)

	expect(handToApp(parse('Sum $\\frac{a}{b}$.'), 'small')[0]).toEqual({ kind: 'markdown', text: 'Sum $\\frac{a}{b}$.' })
	// normal leaves the text exactly as written.
	expect(handToApp(parse('Sum $\\frac{a}{b}$.'), 'normal')[0]).toEqual({ kind: 'markdown', text: 'Sum $\\frac{a}{b}$.' })
})

test('at large, a reply the app draws alone keeps its text as written', async ($, on) => {
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
	expect(drawn[drawn.length - 1]).toBe('Sum: $\\frac{a}{b}$')
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

test('table cells the app would show raw get the braces it needs', async ($, on) => {
	// The cells measured in the app: raw without the braces, rendered with them.
	expect(fixTableMath('| $S(n,k)$ | $k!\cdot S(n,k)$ |')).toBe('| $S(n,k){}$ | $k!\cdot S(n,k)$ |')
	expect(fixTableMath('| $S(nk)$ | $n,k$ | $a,b,c$ |')).toBe('| $S(nk){}$ | $n,k{}$ | $a,b,c{}$ |')
	// What the app takes already, prices, code and text outside tables stay as written.
	expect(fixTableMath('| $x$ | $f(x)$ | $S(n, k)$ | $a_1$ |')).toBe('| $x$ | $f(x)$ | $S(n, k)$ | $a_1$ |')
	expect(fixTableMath('| costs $5 and $10 |')).toBe('| costs $5 and $10 |')
	expect(fixTableMath('| `$S(n,k)$` |')).toBe('| `$S(n,k)$` |')
	expect(fixTableMath('so $S(n,k)$ here')).toBe('so $S(n,k)$ here')
	expect(fixTableMath('```\n| $S(n,k)$ |\n```')).toBe('```\n| $S(n,k)$ |\n```')

	// A reply of only a table still reaches the app, with the braces.
	let seen = ''
	on('ui.render', ($, e) => {
		seen = String((e.props as { text?: string }).text)
		const { Text } = $.ui.resolve(e)
		return <Text>engine</Text>
	})
	const ui = await $.ui.mount({ ...reply('| a |\n|---|\n| $S(n,k)$ |'), surface: 'desktop' })
	expect(seen).toContain('$S(n,k){}$')
	await ui.unmount()
})
