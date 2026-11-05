import { atom, read } from 'claude-code'
import type { Register } from 'claude-code'

import { drawBlocks } from './draw'
import { hasMath, parse } from './parse'
import { handToApp } from './safe'
import { registerSettings } from './settings'

// Declared in each file that reads or writes it: the engine lists a module's
// state by reading the atom where it's used.
const mathSize = atom({ plugin: 'texy', key: 'mathSize' } as const, 'normal')

const NOTE = [
	'Math in your replies is typeset in this app (the texy mod).',
	'Write inline math as $...$ or \\(...\\), and display math as $$...$$ or \\[...\\] on lines of their own;',
	'equation, align, gather and multline environments render too, as do AMS commands and \\ce{} from mhchem.',
	'Use LaTeX for math rather than Unicode symbols or code blocks. Math inside code blocks, inline code and tables stays as written.',
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

		// Formulas the app renders by itself go back to it as Markdown; texy draws
		// only the rest. A reply with nothing left for texy is the app's alone.
		const blocks = handToApp(parse(e.props.text))
		if (!hasMath(blocks)) return next(e)

		// Reading the size subscribes this reply: a new size redraws it at once.
		const size = await read($, mathSize)
		return drawBlocks($.ui.resolve(e), blocks, size)
	})
}
