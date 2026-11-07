// The formulas the Claude desktop app renders well by itself. texy hands
// these back to the app's own Markdown and draws only the rest, which keeps
// each message far below the app's limit on how much a mod may draw.
//
// Everything here was measured in the desktop app with texy turned off, over
// five batches of test formulas, and checked against the app's own code. A
// formula that is not provably fine is left for texy to draw.
import type { Size } from './math'
import type { Block, Inline } from './parse'

/** Macros seen rendering in the app, inline or centred. */
const SAFE_MACROS = new Set([
	// Size.
	'small',
	'large',
	'Large',
	// Spacing and escapes.
	',',
	' ',
	'{',
	'}',
	'%',
	'quad',
	'qquad',
	// Structure.
	'frac',
	'dfrac',
	'tfrac',
	'binom',
	'sqrt',
	'sum',
	'prod',
	'int',
	'iint',
	'oint',
	'lim',
	'left',
	'right',
	'atop',
	'text',
	'boxed',
	'cancel',
	'color',
	'underbrace',
	'overbrace',
	'xrightarrow',
	'hline',
	// Fonts and accents.
	'mathbb',
	'mathcal',
	'mathscr',
	'mathfrak',
	'mathbf',
	'mathrm',
	'boldsymbol',
	'bm',
	'operatorname',
	'vec',
	'hat',
	'tilde',
	'dot',
	'ddot',
	'overline',
	// Letters.
	'alpha',
	'beta',
	'gamma',
	'theta',
	'lambda',
	'mu',
	'sigma',
	'rho',
	'pi',
	'varepsilon',
	'Psi',
	'hbar',
	// Functions and symbols.
	'sin',
	'ln',
	'det',
	'infty',
	'partial',
	'nabla',
	'top',
	'cdot',
	'cdots',
	'times',
	'pm',
	'to',
	'emptyset',
	'varnothing',
	// Relations and logic.
	'le',
	'ge',
	'in',
	'mid',
	'equiv',
	'pmod',
	'implies',
	'iff',
	'Rightarrow',
	'forall',
	'exists',
	'neg',
	'land',
	'lor',
	'therefore',
	'because',
	// Sets and brackets.
	'cup',
	'cap',
	'setminus',
	'subseteq',
	'lfloor',
	'rfloor',
	'lceil',
	'rceil',
	'lVert',
	'rVert',
	'Vert',
	'parallel',
])

/** Environments seen rendering in centred formulas. */
const SAFE_ENVIRONMENTS = new Set(['aligned', 'cases', 'pmatrix', 'bmatrix', 'array'])

/**
 * The app draws an inline formula only if it passes its own checks (measured:
 * 60 characters render, 64 do not). Past this, texy draws it.
 */
const MAX_SAFE_INLINE = 60

/** The app refuses a centred formula past this many characters. */
const MAX_SAFE_DISPLAY = 5000

/** The macros a formula uses, `\\` (a line break) included, without the backslash. */
function macrosOf(tex: string): string[] {
	return [...tex.matchAll(/\\([a-zA-Z]+|[^a-zA-Z])/g)].map(m => m[1]!)
}

function environmentsOf(tex: string): string[] {
	return [...tex.matchAll(/\\(?:begin|end)\{([^}]*)\}/g)].map(m => m[1]!)
}

/** `centred` is a centred formula: line breaks, environments and `\|` are fine there. */
function usesOnlySafe(tex: string, centred: boolean): boolean {
	return macrosOf(tex).every(m => {
		if (m === 'begin' || m === 'end') return centred
		if (m === '\\') return centred
		// `\|` breaks an inline formula in the app but not a centred one.
		if (m === '|') return centred
		return SAFE_MACROS.has(m)
	}) && environmentsOf(tex).every(env => centred && SAFE_ENVIRONMENTS.has(env))
}

/** The formula with the contents of its braces blanked, as the app reads it for words. */
function outsideBraces(s: string): string {
	let depth = 0
	let out = ''
	for (const c of s) {
		if (c === '{') depth++
		else if (c === '}' && depth > 0) depth--
		else if (depth === 0) {
			out += c
			continue
		}
		out += ' '
	}
	return out
}

// The app's own checks on an inline formula, read from its code.
const NUMBER_THEN_WORD = /^\d[\d.,]*(?:[a-z]{1,2}|\/[a-z]+)?[*_~)\]:;]*\s+\p{L}/iu
const ENDS_ON_OPERATOR = /(?:(?<![_^])[-+*]|[=<>/^_({[,:\\×−·÷])\s*$/
const MATH_CHARACTER = /[\\{}^_=<>]/
const PROSE = /(?<![\\\p{L}])\p{L}{4}|[\p{scx=Han}\p{scx=Hiragana}\p{scx=Katakana}\p{scx=Hangul}]{2}|(?<!\\)%/u

// A single letter or number, or a few joined by operators, such as `x` or `2x+1`.
const TERM = String.raw`-?(?:\d+(?:[.,]\d+)*[a-zα-ω]{0,2}|[a-zα-ω])[!°]*`
const JOIN = String.raw`(?: ?[-+*/:×−·÷≤≥≠≈] ?|, )`
const ATOM = String.raw`(?:${TERM}|\(${TERM}(?:${JOIN}${TERM})*\))`
const SIMPLE = new RegExp(String.raw`^${ATOM}(?:(?:${JOIN}|(?=\())${ATOM})*$`, 'i')

/** The app's own test of whether an inline `$...$` is math. */
function appTakesInline(tex: string): boolean {
	if (NUMBER_THEN_WORD.test(tex) || ENDS_ON_OPERATOR.test(tex)) return false
	if (SIMPLE.test(tex)) return true
	return MATH_CHARACTER.test(tex) && !PROSE.test(outsideBraces(tex))
}

/**
 * Table cells go to the app as they are, and its inline test is the same there:
 * `$S(n,k)$` or `$S(nk)$` show as raw text, while `$S(n,k){}$` renders and looks
 * the same. A formula with no spaces in a table row that the app would refuse,
 * and would take with `{}` after it, gets the `{}`. Code fences, code spans and
 * everything else are left as written.
 */
export function fixTableMath(text: string): string {
	let fence = ''
	return text
		.split('\n')
		.map(line => {
			const mark = /^\s*(```+|~~~+)/.exec(line)?.[1]
			if (mark) fence = fence === '' ? mark : mark[0] === fence[0] ? '' : fence
			if (fence !== '' || mark || !line.trimStart().startsWith('|')) return line
			return line
				.split(/(`[^`]*`)/)
				.map((part, i) =>
					i % 2 === 1
						? part
						: part.replace(/(?<![\\$])\$(?!\$)([^$|\s]+)(?<!\\)\$/g, (whole, tex: string) =>
								!appTakesInline(tex) && appTakesInline(`${tex}{}`) ? `$${tex}{}$` : whole,
							),
				)
				.join('')
		})
		.join('\n')
}

/** An inline formula ($...$ or \(...\)) the app renders by itself. */
export function isSafeInline(tex: string): boolean {
	return tex.length <= MAX_SAFE_INLINE && appTakesInline(tex) && usesOnlySafe(tex, false)
}

/**
 * A centred formula the app renders by itself: on a single line ($$...$$ or
 * \[...\]), or $$ on lines of their own around it. A multi-line formula with
 * its $$ on the same line as the formula, or a multi-line \[...\], is not: the
 * app shows it as text.
 */
export function isSafeDisplay(raw: string, tex: string): boolean {
	const oneLine = !raw.includes('\n')
	const dollarsOwnLines = /^\$\$[ \t]*\n[\s\S]*\n[ \t]*\$\$$/.test(raw)
	const delimited = raw.startsWith('$$') || raw.startsWith('\\[')
	if (!delimited || !(oneLine || dollarsOwnLines)) return false
	return tex.length <= MAX_SAFE_DISPLAY && usesOnlySafe(tex, true)
}

/**
 * The TeX command that gives a formula drawn by the app the size texy's own
 * formulas have: \small is 0.9 of the text, \large 1.2, as texy draws them.
 */
// Switched off for now: no size command is added, so the app draws safe formulas as written.
const SIZE_COMMAND: Record<Size, string> = { small: '', normal: '', large: '' }

/** An inline formula, written again with the size command after its opening delimiter. */
function sizedInline(raw: string, tex: string, command: string): string {
	if (command === '') return raw
	return raw.startsWith('\\(') ? `\\(${command} ${tex}\\)` : `$${command} ${tex}$`
}

/**
 * A centred formula with the size command after its opening delimiter. With
 * $$ on lines of their own, the command goes on a line of its own after them.
 */
function sizedDisplay(raw: string, command: string): string {
	if (command === '') return raw
	const open = raw.startsWith('\\[') ? '\\[' : '$$'
	if (raw.includes('\n')) {
		const firstLine = raw.indexOf('\n')
		return `${raw.slice(0, firstLine + 1)}${command}\n${raw.slice(firstLine + 1)}`
	}
	return `${open}${command} ${raw.slice(open.length)}`
}

/** A line of prose with each inline formula written again at the size. */
function sizedRow(source: string, parts: readonly Inline[], command: string): string {
	if (command === '') return source
	let out = ''
	let from = 0
	for (const p of parts) {
		if (p.kind !== 'math') continue
		const at = source.indexOf(p.raw, from)
		// A formula split over two lines of the source is left as it is.
		if (at < 0) continue
		out += source.slice(from, at) + sizedInline(p.raw, p.tex, command)
		from = at + p.raw.length
	}
	return out + source.slice(from)
}

/**
 * The blocks with every safe formula turned back into Markdown, so the app
 * draws it: as written, with a size command when the size isn't normal.
 * Whether a formula is safe is judged on what Claude wrote, before the
 * command is added. What is left as a row or a display block, texy draws.
 */
export function handToApp(blocks: readonly Block[], size: Size = 'normal'): Block[] {
	const command = SIZE_COMMAND[size]
	const out: Block[] = []
	// `tight`: the text continues the line above it, with no gap, when texy draws what is above.
	const push = (text: string, sep: string, tight = false) => {
		const last = out[out.length - 1]
		if (last?.kind === 'markdown') last.text += sep + text
		else out.push(tight ? { kind: 'markdown', text, tight: true } : { kind: 'markdown', text })
	}
	for (const b of blocks) {
		if (b.kind === 'markdown') push(b.text, b.tight === true ? '\n' : '\n\n', b.tight === true)
		else if (b.kind === 'display' && isSafeDisplay(b.raw, b.tex)) push(sizedDisplay(b.raw, command), '\n\n')
		else if (b.kind === 'row' && b.parts.every(p => p.kind !== 'math' || isSafeInline(p.tex))) {
			push(sizedRow(b.source, b.parts, command), b.joinsAbove ? '\n' : '\n\n', b.joinsAbove)
		} else out.push(b)
	}
	return out
}
