// The formulas the Claude desktop app renders well by itself. texy hands
// these back to the app's own Markdown and draws only the rest, which keeps
// each message far below the app's limit on how much a mod may draw.
//
// The list holds only what was seen rendering in the desktop app with texy
// turned off. Anything not on it, texy draws.
import type { Block } from './parse'

/** Macros seen rendering in the app. */
const SAFE_MACROS = new Set([
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
 * The blocks with every safe formula turned back into Markdown, as written,
 * so the app draws it. What is left as a row or a display block, texy draws.
 */
export function handToApp(blocks: readonly Block[]): Block[] {
	const out: Block[] = []
	const push = (text: string, sep: string) => {
		const last = out[out.length - 1]
		if (last?.kind === 'markdown') last.text += sep + text
		else out.push({ kind: 'markdown', text })
	}
	for (const b of blocks) {
		if (b.kind === 'markdown') push(b.text, '\n\n')
		else if (b.kind === 'display' && isSafeDisplay(b.raw, b.tex)) push(b.raw, '\n\n')
		else if (b.kind === 'row' && b.parts.every(p => p.kind !== 'math' || isSafeInline(p.tex))) push(b.source, b.joinsAbove ? '\n' : '\n\n')
		else out.push(b)
	}
	return out
}
