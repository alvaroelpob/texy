// Draws a reply's blocks: markdown as the app draws it, formulas as SVG.
// Used for Claude's replies and for the preview in the settings pane.
import type { BoxProps, ElementConstructor, MarkdownProps, RenderElement, RenderNode, SvgProps } from 'claude-code'

import { svgOf, type Size } from './math'
import type { Block, Inline, Marker } from './parse'

/** The elements drawing needs: every surface but the terminal has them. */
export type Elements = {
	Box: ElementConstructor<BoxProps>
	Markdown: ElementConstructor<MarkdownProps>
	Svg: ElementConstructor<SvgProps>
}

// A no-break space: the gap after a word, as wide as the reply's own spaces.
const SPACE = ' '

/** Backslash-escapes markdown punctuation, so a lone word like "1." or "-" stays a word. */
function escape(s: string): string {
	return s.replace(/[\\`*_{}[\]()#+\-.!|<>~&]/g, '\\$&')
}

/** Inline code that holds any backticks it contains. */
function codeSpan(s: string): string {
	const longest = Math.max(0, ...(s.match(/`+/g) ?? []).map(t => t.length))
	const ticks = '`'.repeat(longest + 1)
	return `${ticks} ${s} ${ticks}`
}

/** Appends text to a group's last markdown run, or a run of its own after a formula. */
function addSpace(group: Array<{ md: string } | { node: unknown }>, space: string): void {
	const last = group[group.length - 1]
	if (last !== undefined && 'md' in last) last.md += space
	else group.push({ md: space })
}

/**
 * The app breaks a line wherever the reply does; the Markdown element alone
 * only wraps, running the lines together. So each break inside a paragraph is
 * made a hard one. Code fences and tables are left as written.
 */
export function keepBreaks(md: string): string {
	const lines = md.split('\n')
	let fenced = false
	let display = false
	return lines
		.map((line, i) => {
			const isFence = /^ {0,3}(`{3,}|~{3,})/.test(line)
			const inside = fenced
			if (isFence) fenced = !fenced
			// A display's own lines are never soft breaks: spaces there can stop the app reading it.
			const edge = /^\s*(\$\$|\\\[)/.test(line) || /(\$\$|\\\])\s*$/.test(line)
			const insideDisplay = display
			if (/^\s*(\$\$|\\\[|\\\])\s*$/.test(line) && !isFence) display = !display
			const next = lines[i + 1]
			if (inside || isFence || edge || insideDisplay || next === undefined || line.trim() === '' || next.trim() === '') return line
			if (/^\s*(\$\$|\\\[)/.test(next)) return line
			if (line.trimStart().startsWith('|') || next.trimStart().startsWith('|')) return line
			if (/( {2}|\\)$/.test(line)) return line
			return line + '  '
		})
		.join('\n')
}

export function drawBlocks(t: Elements, blocks: readonly Block[], size: Size): RenderElement {
	const { Box, Markdown, Svg } = t

	const math = (tex: string, raw: string, display: boolean): RenderNode => {
		const svg = svgOf(tex, display, 'auto', size)
		if (svg === null) return <Markdown text={codeSpan(raw)} />
		return <Svg source={svg} alt={tex} />
	}

	// A line with inline math is a wrapping row of pieces, since the app takes
	// no Svg inside a run of text. Each word is its own Markdown, so it has the
	// reply's own font, size and styles.
	const row = (marker: Marker, parts: readonly Inline[]): RenderNode => {
		const isHeading = marker.kind === 'heading'
		const dim = marker.kind === 'quote'

		// Pieces with no space between them stay one group ("$x$," or "**a**b").
		type Piece = { md: string } | { node: RenderNode }
		const groups: Piece[][] = [[]]
		const current = () => groups[groups.length - 1] ?? []
		const addMd = (md: string) => {
			const g = current()
			const last = g[g.length - 1]
			if (last !== undefined && 'md' in last) last.md += md
			else g.push({ md })
		}
		const gap = () => {
			if (current().length > 0) groups.push([])
		}

		for (const p of parts) {
			if (p.kind === 'math') {
				current().push({ node: math(p.tex, p.raw, false) })
			} else if (p.kind === 'code') {
				addMd(codeSpan(p.text))
			} else if (p.kind === 'link') {
				addMd(`[${escape(p.text)}](${p.href})`)
			} else {
				for (const piece of p.text.split(/(\s+)/)) {
					if (piece === '') continue
					if (/^\s+$/.test(piece)) {
						gap()
						continue
					}
					const bold = p.bold || isHeading
					const mark = bold && p.italic ? '***' : bold ? '**' : p.italic ? '*' : ''
					addMd(mark + escape(piece) + mark)
				}
			}
		}

		const filled = groups.filter(g => g.length > 0)
		const items = filled.map((g, i) => {
			if (i < filled.length - 1) addSpace(g, SPACE)
			const nodes = g.map(piece => ('md' in piece ? <Markdown text={piece.md} dimColor={dim} /> : piece.node))
			return nodes.length === 1 ? nodes[0] : <Box flexDirection="row" alignItems="center">{nodes}</Box>
		})

		const line = (
			<Box flexDirection="row" flexWrap="wrap" alignItems="center" flexShrink={1} flexGrow={1}>
				{items}
			</Box>
		)

		if (marker.kind === 'bullet' || marker.kind === 'ordered' || marker.kind === 'quote') {
			const glyph = marker.kind === 'bullet' ? '•' : marker.kind === 'ordered' ? escape(marker.label) : '│'
			const indent = marker.kind === 'quote' ? 0 : marker.indent * 2
			return (
				<Box flexDirection="row" alignItems="flex-start" columnGap="sm" paddingLeft={indent}>
					{/* Never shrinks, so "1." stays on one line; padded to sit where the app's own list markers do. */}
					<Box flexShrink={0} paddingLeft={marker.kind === 'quote' ? 0 : 'xs'}>
						<Markdown text={glyph} dimColor={dim} />
					</Box>
					{line}
				</Box>
			)
		}
		return line
	}

	const block = (b: Block): RenderNode => {
		if (b.kind === 'markdown') return <Markdown text={keepBreaks(b.text)} />
		if (b.kind === 'display') {
			return (
				<Box flexDirection="column" alignItems="center" paddingY="xs">
					{math(b.tex, b.raw, true)}
				</Box>
			)
		}
		return row(b.marker, b.parts)
	}

	// A gap between blocks, except where a block continues the line above it.
	const isTight = (b: Block) => (b.kind === 'markdown' && b.tight === true) || (b.kind === 'row' && b.joinsAbove)

	return (
		<Box flexDirection="column">
			{blocks.map((b, i) => (
				<Box flexDirection="column" paddingTop={i === 0 || isTight(b) ? 0 : 'sm'}>
					{block(b)}
				</Box>
			))}
		</Box>
	)
}
