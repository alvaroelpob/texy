// Bundles MathJax into hooks/vendor/mathjax/ for the texy mod.
//
// Two limits shape the bundle:
// - the Claude plugin directory takes no code file over 256 KiB, and holds
//   minified code for a person to review, so the bundle is readable and split;
// - a bundler can split modules into chunks but can't split one module, and
//   MathJax's SVG font (output/svg/fonts/tex/normal.js) is over 600 KB alone.
//
// So the build swaps that font module for one that joins the same glyph paths
// back from several smaller files, and gives every big piece an entry point of
// its own under parts/, which makes Bun put it in a chunk of its own. Only
// entry.js and its chunks are kept.
//
// Run with: bun install, then bun run build
import { copyFileSync, mkdirSync, readFileSync, readdirSync, rmSync, statSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const here = import.meta.dir
const parts = join(here, 'parts')
const out = join(here, '..', 'hooks', 'vendor', 'mathjax')
const mathjax = join(here, 'node_modules', 'mathjax-full')
const LIMIT = 256 * 1024
/** Glyph paths per generated file, comfortably under the limit. */
const PATHS_PER_FILE = 160 * 1024

rmSync(parts, { recursive: true, force: true })
mkdirSync(parts, { recursive: true })
mkdirSync(out, { recursive: true })
// Clear the old bundle, keeping entry.d.ts and the licence.
for (const f of readdirSync(out).filter(f => f.endsWith('.js'))) rmSync(join(out, f))

const slash = (p: string) => p.replaceAll('\\', '/')

// 1. Split the SVG font's glyph paths into files under PATHS_PER_FILE.
//    The font module is one call, AddPaths(base, { paths }, { content }),
//    one glyph per line: those lines are carried over as they are.
const fontFile = join(mathjax, 'js', 'output', 'svg', 'fonts', 'tex', 'normal.js')
const font = readFileSync(fontFile, 'utf8')
const open = font.indexOf('AddPaths)(normal_js_1.normal, {')
const middle = font.indexOf('\n}, {', open)
const end = font.lastIndexOf('\n});')
if (open < 0 || middle < 0 || end < 0) throw new Error(`${fontFile} isn't laid out as this build expects`)
const pathLines = font.slice(font.indexOf('\n', open) + 1, middle).split('\n')
const contentLines = font.slice(middle + '\n}, {'.length, end)

const pathFiles: string[] = []
let batch: string[] = []
let batchSize = 0
const flush = () => {
	if (batch.length === 0) return
	const file = join(parts, `normal-paths-${pathFiles.length}.js`)
	writeFileSync(file, `// Glyph paths of MathJax's SVG TeX font, part ${pathFiles.length + 1}.\nexport default {\n${batch.join('\n')}\n}\n`)
	pathFiles.push(file)
	batch = []
	batchSize = 0
}
for (const line of pathLines) {
	if (batchSize + line.length > PATHS_PER_FILE) flush()
	batch.push(line)
	batchSize += line.length + 1
}
flush()

const joined = join(parts, 'normal-font.js')
writeFileSync(
	joined,
	[
		"// MathJax's SVG TeX font, its glyph paths joined back from the files beside it.",
		"import { AddPaths } from 'mathjax-full/js/output/svg/FontData.js'",
		"import { normal as base } from 'mathjax-full/js/output/common/fonts/tex/normal.js'",
		...pathFiles.map((f, i) => `import paths${i} from '${slash(f)}'`),
		`export const normal = AddPaths(base, Object.assign({}, ${pathFiles.map((_, i) => `paths${i}`).join(', ')}), {${contentLines}\n})`,
		'',
	].join('\n'),
)

// 2. An entry point of their own for the other big pieces.
const fonts = join(mathjax, 'js', 'output', 'svg', 'fonts', 'tex')
for (const f of readdirSync(fonts).filter(f => f.endsWith('.js') && f !== 'normal.js')) {
	writeFileSync(join(parts, `font-${f}`), `export * from 'mathjax-full/js/output/svg/fonts/tex/${f}'\n`)
}
const PIECES: Array<[string, string]> = [
	['packages', 'input/tex/AllPackages.js'],
	['tex', 'input/tex.js'],
	['tex-base', 'input/tex/base/BaseConfiguration.js'],
	['tex-ams', 'input/tex/ams/AmsConfiguration.js'],
	['tex-mhchem', 'input/tex/mhchem/MhchemConfiguration.js'],
	['svg', 'output/svg.js'],
	['svg-common', 'output/common/OutputJax.js'],
	['common-font', 'output/common/fonts/tex/normal.js'],
	['opdict', 'core/MmlTree/OperatorDictionary.js'],
	['mml', 'core/MmlTree/MmlFactory.js'],
	['handler', 'handlers/html.js'],
]
for (const [name, path] of PIECES) writeFileSync(join(parts, `${name}.js`), `export * from 'mathjax-full/js/${path}'\n`)
// Whole folders that are too big together with the rest of the output code:
// one entry imports every module in the folder, so they share a chunk.
for (const [name, dir] of [
	['common-wrappers', 'output/common/Wrappers'],
	['svg-wrappers', 'output/svg/Wrappers'],
]) {
	const modules = readdirSync(join(mathjax, 'js', dir)).filter(f => f.endsWith('.js'))
	writeFileSync(join(parts, `${name}.js`), modules.map(f => `import 'mathjax-full/js/${dir}/${f}'\n`).join(''))
}

// 3. Bundle, with the font module swapped for the joined one.
const result = await Bun.build({
	entrypoints: [join(here, 'entry.js'), ...readdirSync(parts).map(f => join(parts, f))],
	root: here,
	outdir: out,
	target: 'browser',
	format: 'esm',
	splitting: true,
	minify: false,
	plugins: [
		{
			name: 'split-svg-font',
			setup(build) {
				build.onLoad({ filter: /[\\/]output[\\/]svg[\\/]fonts[\\/]tex[\\/]normal\.js$/ }, () => ({
					contents: readFileSync(joined, 'utf8'),
					loader: 'js',
				}))
			},
		},
	],
})
if (!result.success) {
	for (const log of result.logs) console.error(log)
	process.exit(1)
}

rmSync(join(out, 'parts'), { recursive: true, force: true })
rmSync(parts, { recursive: true, force: true })
copyFileSync(join(mathjax, 'LICENSE'), join(out, 'LICENSE'))

// 4. Check every file against the limit.
const files = readdirSync(out).filter(f => f.endsWith('.js'))
const sizes = files.map(f => ({ f, size: statSync(join(out, f)).size })).sort((a, b) => b.size - a.size)
const over = sizes.filter(s => s.size > LIMIT)
for (const s of over) console.error(`${s.f} is ${(s.size / 1024).toFixed(0)} KiB, over 256 KiB`)
if (over.length > 0) process.exit(1)
console.log(`hooks/vendor/mathjax: ${files.length} files, the largest ${(sizes[0]!.size / 1024).toFixed(0)} KiB, each under 256 KiB`)
