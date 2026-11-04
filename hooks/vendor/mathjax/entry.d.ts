/** Built from build/entry.js and build/build.mjs by `npm run build` in build/. */
export function tex2svg(
	source: string,
	display: boolean,
): {
	/** The <svg> element's markup, sized in ex. */
	markup: string
	/** Width and height in ex. */
	width: number
	height: number
	/** How far the formula reaches below the text baseline, in ex. */
	depth: number
}
