// Splits an assistant reply into what texy draws itself (display math, and
// lines that hold inline math) and what it hands to the app's own Markdown.
// Code fences and inline code are never read as math.

export type Inline =
	| { kind: 'text'; text: string; bold: boolean; italic: boolean }
	| { kind: 'code'; text: string }
	| { kind: 'link'; text: string; href: string }
	| { kind: 'math'; tex: string; raw: string }

export type Marker =
	| { kind: 'none' }
	| { kind: 'heading'; level: number }
	| { kind: 'bullet'; indent: number }
	| { kind: 'ordered'; label: string; indent: number }
	| { kind: 'quote' }

export type Block =
	| {
			kind: 'markdown'
			text: string
			/** Whether the text continues the line above it in the same paragraph, with no gap. */
			tight?: boolean
	  }
	| { kind: 'display'; tex: string; raw: string }
	| {
			kind: 'row'
			marker: Marker
			parts: Inline[]
			/** The line(s) as written, marker included. */
			source: string
			/** Whether the line continues the one above it in the same paragraph. */
			joinsAbove: boolean
	  }

const FENCE = /^ {0,3}(`{3,}|~{3,})/

/** The whole reply, in order. A reply with no math comes back as markdown alone. */
export function parse(text: string): Block[] {
	const out: Block[] = []
	let prose: string[] = []
	let fence: string | null = null
	let code: string[] = []

	const flushProse = () => {
		if (prose.length > 0) {
			parseProse(prose.join('\n'), out)
			prose = []
		}
	}

	for (const line of text.split('\n')) {
		const m = FENCE.exec(line)
		if (fence === null) {
			if (m?.[1] !== undefined) {
				flushProse()
				fence = m[1]
				code = [line]
			} else {
				prose.push(line)
			}
			continue
		}
		code.push(line)
		const marks = m?.[1]
		if (marks !== undefined && marks[0] === fence[0] && marks.length >= fence.length && line.trim() === marks) {
			pushMarkdown(out, code.join('\n'))
			fence = null
			code = []
		}
	}
	// A fence still open (a reply still streaming) stays code.
	if (fence !== null) pushMarkdown(out, code.join('\n'))
	flushProse()
	return out
}

export function hasMath(blocks: readonly Block[]): boolean {
	return blocks.some(b => b.kind !== 'markdown')
}

function pushMarkdown(out: Block[], text: string, sep = '\n\n'): void {
	if (text.trim() === '') return
	const last = out[out.length - 1]
	if (last?.kind === 'markdown') {
		last.text += sep + text
	} else {
		out.push(sep === '\n' ? { kind: 'markdown', text, tight: true } : { kind: 'markdown', text })
	}
}

// A `$$` or `\[` that starts a line may span lines. One after text must close
// on its own line: otherwise a sentence that merely mentions `$$` would pair
// with the next display, however far below it, and turn the text between them
// into a formula.
const DISPLAY = new RegExp(
	[
		String.raw`(?<=(?:^|\n)[ \t>]*)\$\$(?<dollar>[\s\S]+?)\$\$`,
		String.raw`\$\$(?<dollarLine>[^\n]+?)\$\$`,
		String.raw`(?<=(?:^|\n)[ \t>]*)\\\[(?<bracket>[\s\S]+?)\\\]`,
		String.raw`\\\[(?<bracketLine>[^\n]+?)\\\]`,
		String.raw`\\begin\{(?<env>equation|align|gather|multline|eqnarray|alignat|flalign|pmatrix|bmatrix|Bmatrix|vmatrix|Vmatrix|matrix|smallmatrix|cases|array|aligned|gathered|split)(?<star>\*?)\}[\s\S]*?\\end\{\k<env>\k<star>\}`,
	].join('|'),
	'g',
)

/**
 * Environments the app never finds without `$$` around them, and that read as
 * a formula only when they start a line: after text they sit inside an inline
 * `$...$`, which is left alone.
 */
const LINE_START_ENVIRONMENTS = new Set([
	'pmatrix',
	'bmatrix',
	'Bmatrix',
	'vmatrix',
	'Vmatrix',
	'matrix',
	'smallmatrix',
	'cases',
	'array',
	'aligned',
	'gathered',
	'split',
])
const LINE_START = /(^|\n)[ \t>]*$/

const CODE_SPAN = /(`+)[^`]*?\1/g

function parseProse(src: string, out: Block[]): void {
	const code: Array<[number, number]> = []
	for (const m of src.matchAll(CODE_SPAN)) code.push([m.index, m.index + m[0].length])
	const inCode = (at: number) => code.some(([a, b]) => at >= a && at < b)

	let from = 0
	for (const m of src.matchAll(DISPLAY)) {
		if (inCode(m.index)) continue
		if (src[m.index - 1] === '\\') continue
		const g = m.groups ?? {}
		if (g.env !== undefined && LINE_START_ENVIRONMENTS.has(g.env) && !LINE_START.test(src.slice(0, m.index))) continue
		const tex = (g.dollar ?? g.dollarLine ?? g.bracket ?? g.bracketLine ?? m[0]).trim()
		if (tex === '') continue
		parseParagraphs(src.slice(from, m.index), out)
		out.push({ kind: 'display', tex, raw: m[0] })
		from = m.index + m[0].length
	}
	parseParagraphs(src.slice(from), out)
}

const HEADING = /^(#{1,6})\s+/
const BULLET = /^(\s*)[-*+]\s+/
const ORDERED = /^(\s*)(\d{1,9}[.)])\s+/
const QUOTE = /^>\s?/

function parseParagraphs(src: string, out: Block[]): void {
	for (const para of src.split(/\n[ \t]*\n/)) {
		if (para.trim() === '') continue
		const lines = para.split('\n')
		const isTable = lines.every(l => l.trim() === '' || l.trimStart().startsWith('|'))
		if (isTable || !hasInlineMath(para)) {
			pushMarkdown(out, para)
			continue
		}

		// One row per line: the app breaks a line wherever the reply does, so a
		// formula texy draws must not pull the lines around it into its own row.
		const rows: Array<{ marker: Marker; text: string; source: string[] }> = []
		for (const line of lines) {
			// What is left of a paragraph after a display starts with its line break:
			// that empty line is no row, or the first real line would look like a
			// continuation and be joined to the display above it.
			if (line.trim() === '') continue
			const { marker, rest } = markerOf(line) ?? { marker: { kind: 'none' } as const, rest: line.trim() }
			rows.push({ marker, text: rest, source: [line] })
		}

		let first = true
		for (const row of rows) {
			const parts = parseInline(row.text)
			if (parts.some(p => p.kind === 'math')) {
				out.push({ kind: 'row', marker: row.marker, parts, source: row.source.join('\n'), joinsAbove: !first })
			} else {
				pushMarkdown(out, row.source.join('\n'), first ? '\n\n' : '\n')
			}
			first = false
		}
	}
}

function markerOf(line: string): { marker: Marker; rest: string } | null {
	let m = HEADING.exec(line)
	if (m?.[1] !== undefined) return { marker: { kind: 'heading', level: m[1].length }, rest: line.slice(m[0].length).trim() }
	m = BULLET.exec(line)
	if (m?.[1] !== undefined) return { marker: { kind: 'bullet', indent: indentOf(m[1]) }, rest: line.slice(m[0].length).trim() }
	m = ORDERED.exec(line)
	if (m?.[1] !== undefined && m[2] !== undefined) {
		return { marker: { kind: 'ordered', label: m[2], indent: indentOf(m[1]) }, rest: line.slice(m[0].length).trim() }
	}
	m = QUOTE.exec(line)
	if (m) return { marker: { kind: 'quote' }, rest: line.slice(m[0].length).trim() }
	return null
}

function indentOf(ws: string): number {
	return Math.floor(ws.replace(/\t/g, '    ').length / 2)
}

export function hasInlineMath(s: string): boolean {
	return parseInline(s).some(p => p.kind === 'math')
}

const LINK = /^\[([^\]\n]+)\]\(([^)\s]+)\)/
const TICKS = /^(`+)([\s\S]*?[^`])\1(?!`)/

/** One line of prose: text runs, inline code, links and inline math. */
export function parseInline(s: string): Inline[] {
	const parts: Inline[] = []
	const style = { bold: false, italic: false }
	// A `*` or `**` only toggles when the line holds a matching one.
	const doubles = (s.match(/\*\*/g) ?? []).length
	const singles = (s.replace(/\*\*/g, '').match(/\*/g) ?? []).length
	const boldOn = doubles % 2 === 0
	const italicOn = singles % 2 === 0

	let buf = ''
	const flush = () => {
		if (buf !== '') parts.push({ kind: 'text', text: buf, ...style })
		buf = ''
	}

	let i = 0
	while (i < s.length) {
		const c = s[i]
		const next = s[i + 1]

		if (c === '\\' && (next === '$' || next === '*' || next === '\\' || next === '`')) {
			buf += next
			i += 2
			continue
		}
		if (c === '\\' && next === '(') {
			const end = s.indexOf('\\)', i + 2)
			if (end > i + 2) {
				flush()
				parts.push({ kind: 'math', tex: s.slice(i + 2, end).trim(), raw: s.slice(i, end + 2) })
				i = end + 2
				continue
			}
		}
		if (c === '`') {
			const m = TICKS.exec(s.slice(i))
			if (m?.[2] !== undefined) {
				flush()
				parts.push({ kind: 'code', text: m[2].replace(/^ (.*) $/, '$1') })
				i += m[0].length
				continue
			}
		}
		if (c === '$' && next !== undefined && next !== '$' && !/\s/.test(next)) {
			const end = closingDollar(s, i + 1)
			if (end > 0) {
				flush()
				parts.push({ kind: 'math', tex: s.slice(i + 1, end), raw: s.slice(i, end + 1) })
				i = end + 1
				continue
			}
		}
		if (c === '[') {
			const m = LINK.exec(s.slice(i))
			if (m?.[1] !== undefined && m[2] !== undefined && /^https?:/.test(m[2])) {
				flush()
				parts.push({ kind: 'link', text: m[1], href: m[2] })
				i += m[0].length
				continue
			}
		}
		if (c === '*' && next === '*' && boldOn) {
			flush()
			style.bold = !style.bold
			i += 2
			continue
		}
		if (c === '*' && italicOn) {
			flush()
			style.italic = !style.italic
			i += 1
			continue
		}
		buf += c
		i += 1
	}
	flush()
	return parts
}

/**
 * Where an inline `$...$` closes: a `$` with no space before it, not escaped,
 * and no digit after it (so "$5 and $10" stays text). -1 when none does.
 */
function closingDollar(s: string, from: number): number {
	for (let j = from + 1; j < s.length; j++) {
		if (s[j] !== '$') continue
		const before = s[j - 1] ?? ''
		if (before === '\\') continue
		if (/\s/.test(before)) continue
		if (/[0-9]/.test(s[j + 1] ?? '')) continue
		return j
	}
	return -1
}
