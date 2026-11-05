// The formulas the Claude desktop app renders well by itself. texy hands
// these back to the app's own Markdown and draws only the rest, which keeps
// each message far below the app's limit on how much a mod may draw.
//
// The list holds only what was seen rendering in the desktop app with texy
// turned off. Anything not on it, texy draws.
import type { Size } from './math'
import type { Block, Inline } from './parse'

/** Macros seen rendering in the app. */
const SAFE_MACROS = new Set([
	// Size, inline and centred, aligned and cases included.
	'small',
	'large',
	'Large',
	// Spacing and escapes.
	',',
	' ',
	'{',
	'}',
	// Structure.
	'frac',
	'binom',
	'sqrt',
	'sum',
	'prod',
	'int',
	'left',
	'right',
	'atop',
	'text',
	'boxed',
	// Letters and alphabets.
	'alpha',
	'beta',
	'mathbb',
	'mathcal',
	// Relations and operators.
	'le',
	'ge',
	'mid',
	'equiv',
	'pmod',
	'Rightarrow',
	'neg',
	'lor',
	'cup',
	'cap',
	'cdot',
	'pm',
	'lfloor',
	'rfloor',
	'lceil',
	'rceil',
])

/** Environments seen rendering in centred formulas. */
const SAFE_ENVIRONMENTS = new Set(['aligned', 'cases', 'pmatrix'])

/** The longest inline formula seen rendering was about 45 characters; a longer one failed. */
const MAX_SAFE_INLINE = 50

/** The macros a formula uses, `\\` (a line break) included, without the backslash. */
function macrosOf(tex: string): string[] {
	return [...tex.matchAll(/\\([a-zA-Z]+|[^a-zA-Z])/g)].map(m => m[1]!)
}

function environmentsOf(tex: string): string[] {
	return [...tex.matchAll(/\\(?:begin|end)\{([^}]*)\}/g)].map(m => m[1]!)
}

function usesOnlySafe(tex: string, allowLineBreaks: boolean): boolean {
	return macrosOf(tex).every(m => {
		if (m === 'begin' || m === 'end') return allowLineBreaks
		if (m === '\\') return allowLineBreaks
		return SAFE_MACROS.has(m)
	}) && environmentsOf(tex).every(env => allowLineBreaks && SAFE_ENVIRONMENTS.has(env))
}

/** An inline formula ($...$ or \(...\)) the app renders by itself. */
export function isSafeInline(tex: string): boolean {
	return tex.length <= MAX_SAFE_INLINE && usesOnlySafe(tex, false)
}

/**
 * A centred formula the app renders by itself: on a single line ($$...$$ or
 * \[...\]), or $$ on lines of their own around it. A multi-line formula with
 * its $$ on the same line as the formula is not: the app shows it as text.
 */
export function isSafeDisplay(raw: string, tex: string): boolean {
	const oneLine = !raw.includes('\n')
	const dollarsOwnLines = /^\$\$[ \t]*\n[\s\S]*\n[ \t]*\$\$$/.test(raw)
	const delimited = raw.startsWith('$$') || raw.startsWith('\\[')
	if (!delimited || !(oneLine || dollarsOwnLines)) return false
	return usesOnlySafe(tex, true)
}

/**
 * The TeX command that gives a formula drawn by the app the size texy's own
 * formulas have: \small is 0.9 of the text, \large 1.2, as texy draws them.
 */
const SIZE_COMMAND: Record<Size, string> = { small: '\\small', normal: '', large: '\\large' }

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
	const push = (text: string, sep: string) => {
		const last = out[out.length - 1]
		if (last?.kind === 'markdown') last.text += sep + text
		else out.push({ kind: 'markdown', text })
	}
	for (const b of blocks) {
		if (b.kind === 'markdown') push(b.text, '\n\n')
		else if (b.kind === 'display' && isSafeDisplay(b.raw, b.tex)) push(sizedDisplay(b.raw, command), '\n\n')
		else if (b.kind === 'row' && b.parts.every(p => p.kind !== 'math' || isSafeInline(p.tex))) {
			push(sizedRow(b.source, b.parts, command), b.joinsAbove ? '\n' : '\n\n')
		} else out.push(b)
	}
	return out
}
