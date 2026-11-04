// TeX to standalone SVG: MathJax's output, cached, sized in pixels and inked.
import { tex2svg } from './vendor/mathjax/entry'

export type Scheme = 'auto' | 'light' | 'dark'
export type Size = 'small' | 'normal' | 'large'

/** Pixels per ex at each size; 7.5 sits beside the Code tab's body text. */
const EX_PX: Record<Size, number> = { small: 6.5, normal: 7.5, large: 9 }
const INK = { light: '#1f1f1f', dark: '#ececec', either: '#8a8a8a' }
const SVG_LIMIT = 131072

export type Typeset = { markup: string; width: number; height: number } | { error: string }

const cache = new Map<string, Typeset>()

export function typeset(tex: string, display: boolean): Typeset {
	const key = (display ? 'D' : 'I') + tex
	const hit = cache.get(key)
	if (hit !== undefined) return hit
	let result: Typeset
	try {
		const { markup, width, height } = tex2svg(tex, display)
		result = { markup, width, height }
	} catch (err) {
		result = { error: err instanceof Error ? err.message : String(err) }
	}
	if (cache.size > 1000) cache.clear()
	cache.set(key, result)
	return result
}

/**
 * How far above its baseline a line of the reply's text has its middle, in
 * pixels. An inline formula is centred on the line beside the words, so it's
 * padded until its own middle sits this far above its baseline: then the two
 * baselines meet.
 */
const TEXT_MIDDLE_PX = 5.5

const VIEW_BOX = / viewBox="(-?[\d.]+) (-?[\d.]+) (-?[\d.]+) (-?[\d.]+)"/

/**
 * MathJax's ex-sized SVG, made standalone: pixel size, its own ink color and,
 * for inline math, the padding that puts its baseline on the text's.
 */
export function finish(t: { markup: string; width: number; height: number }, scheme: Scheme, size: Size, inline: boolean): string | null {
	const ex = EX_PX[size]
	const w = (t.width * ex).toFixed(2)
	let h = t.height * ex
	let markup = t.markup

	const vb = VIEW_BOX.exec(markup)
	if (inline && vb !== null) {
		const [minX, minY, vbW, vbH] = vb.slice(1).map(Number) as [number, number, number, number]
		// MathJax puts the baseline at y = 0: the formula reaches -minY above it
		// and vbH + minY below.
		const pxPerUnit = h / vbH
		const above = -minY
		const below = vbH + minY
		const middle = TEXT_MIDDLE_PX / pxPerUnit
		let top = minY
		let height = vbH
		if ((above - below) / 2 > middle) height += above - below - 2 * middle // pad below
		else {
			const pad = 2 * middle + below - above // pad above
			top -= pad
			height += pad
		}
		h = height * pxPerUnit
		markup = markup.replace(VIEW_BOX, ` viewBox="${minX} ${top.toFixed(1)} ${vbW} ${height.toFixed(1)}"`)
	}

	const css =
		scheme === 'auto'
			? `svg{color:${INK.light}}@media (prefers-color-scheme: dark){svg{color:${INK.dark}}}`
			: `svg{color:${INK[scheme]}}`
	const svg = markup
		.replace(/ style="vertical-align:[^"]*"/, '')
		.replace(/ width="[\d.]+ex"/, ` width="${w}"`)
		.replace(/ height="[\d.]+ex"/, ` height="${h.toFixed(2)}"`)
		.replace(/^<svg/, `<svg color="${INK.either}"`)
		.replace(/^(<svg[^>]*>)/, `$1<style>${css}</style>`)
	return svg.length > SVG_LIMIT ? null : svg
}

/** A formula as SVG markup at these settings, or null when it doesn't typeset. */
export function svgOf(tex: string, display: boolean, scheme: Scheme, size: Size): string | null {
	const t = typeset(tex, display)
	return 'error' in t ? null : finish(t, scheme, size, !display)
}

