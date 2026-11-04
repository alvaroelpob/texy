// Bundled into texy/hooks/vendor/mathjax.js: TeX in, standalone SVG out, no DOM.
import { mathjax } from 'mathjax-full/js/mathjax.js'
import { TeX } from 'mathjax-full/js/input/tex.js'
import { SVG } from 'mathjax-full/js/output/svg.js'
import { liteAdaptor } from 'mathjax-full/js/adaptors/liteAdaptor.js'
import { RegisterHTMLHandler } from 'mathjax-full/js/handlers/html.js'
import { AllPackages } from 'mathjax-full/js/input/tex/AllPackages.js'

const adaptor = liteAdaptor()
RegisterHTMLHandler(adaptor)

// Everything but the packages that load files at run time.
const packages = AllPackages.filter(p => p !== 'require' && p !== 'autoload')

let doc = null
function getDoc() {
	if (doc === null) {
		const tex = new TeX({
			packages,
			formatError: (_jax, err) => {
				throw err
			},
		})
		const svg = new SVG({ fontCache: 'local' })
		doc = mathjax.document('', { InputJax: tex, OutputJax: svg })
	}
	return doc
}

/**
 * Typesets one formula. Returns the <svg> markup and its size in ex,
 * or throws with MathJax's message when the TeX does not parse.
 */
export function tex2svg(source, display) {
	const node = getDoc().convert(source, { display })
	const svg = adaptor.firstChild(node)
	const width = parseFloat(adaptor.getAttribute(svg, 'width')) || 0
	const height = parseFloat(adaptor.getAttribute(svg, 'height')) || 0
	const style = adaptor.getAttribute(svg, 'style') || ''
	const m = /vertical-align:\s*(-?[\d.]+)ex/.exec(style)
	const depth = m ? -parseFloat(m[1]) : 0
	return { markup: adaptor.outerHTML(svg), width, height, depth }
}
