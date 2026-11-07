import { atom, read } from 'claude-code'
import type { Register } from 'claude-code'

import { drawBlocks } from './draw'
import { hasMath, parse } from './parse'
import { fixTableMath, handToApp } from './safe'
import { registerSettings } from './settings'

// Declared in each file that reads or writes it: the engine lists a module's
// state by reading the atom where it's used.
const mathSize = atom({ plugin: 'texy', key: 'mathSize' } as const, 'normal')

const NOTE = [
	'Math in your replies is typeset in this app (the texy mod).',
	'Write inline math as $...$ or \\(...\\), and display math as $$...$$ or \\[...\\] on lines of their own;',
	'equation, align, gather and multline environments render too, as do AMS commands and \\ce{} from mhchem.',
	'Use LaTeX for math rather than Unicode symbols or code blocks. Math inside code blocks and inline code stays as written.',
	'Inside tables only simple formulas render: keep multi-line or long math out of table cells.',
	'Write a literal dollar sign as \\$ when a closing $ could follow it on the same line.',
].join(' ')

export const register: Register = on => {
	registerSettings(on)

	// Tells Claude which math syntax renders, wherever a surface draws SVG.
	on('prompt.compose', async ($, e, next) => {
		const composed = await next(e)
		if (!e.surfaces.some(s => s !== 'terminal')) return composed
		return { sections: [...composed.sections, { id: 'texy:math', text: NOTE, scope: 'session' as const }] }
	})

	on('ui.render', { component: 'AssistantMessage' }, async ($, e, next) => {
		if (e.surface === 'terminal' || e.props.isSummary === true) return next(e)

		// Formulas in table cells the app would show raw get the `{}` it needs.
		const text = fixTableMath(e.props.text)
		const message = text === e.props.text ? e : { ...e, props: { ...e.props, text } }

		const parsed = parse(text)
		if (!hasMath(parsed)) return next(message)

		// Reading the size subscribes this reply: a new size redraws it at once.
		const size = await read($, mathSize)

		// Formulas the app renders by itself go back to it as Markdown, at the
		// size; texy draws only the rest. A reply with nothing left for texy is
		// the app's alone, its text sized when the size isn't normal.
		const blocks = handToApp(parsed, size)
		if (!hasMath(blocks)) {
			const only = blocks[0]
			if (size === 'normal' || only?.kind !== 'markdown') return next(message)
			return next({ ...message, props: { ...message.props, text: only.text } })
		}

		return drawBlocks($.ui.resolve(e), blocks, size)
	})
}
