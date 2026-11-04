// texy's settings: the /texy command and the settings pane it opens.
// The one setting, the formula size, lives in $.state (see size.ts), so a
// change redraws at once instead of reloading the mod.
import { atom, read } from 'claude-code'
import type { On } from 'claude-code'

import { drawBlocks } from './draw'
import { parse } from './parse'
import { SIZES, isSize, loadSize, saveSize } from './size'

// Declared in each file that reads or writes it: the engine lists a module's
// state by reading the atom where it's used.
const mathSize = atom({ plugin: 'texy', key: 'mathSize' } as const, 'normal')

const PANE = 'texy'

const PREVIEW = 'This is normal text, and this is math: $e^{i\\pi} + 1 = 0$.\n\n$$x = \\frac{-b \\pm \\sqrt{b^2-4ac}}{2a}$$'
const PREVIEW_BLOCKS = parse(PREVIEW)

const USAGE = `Use: /texy size ${SIZES.join(' | ')}`

export function registerSettings(on: On): void {
	on('session.start', async ($, e, next) => {
		await loadSize($)
		await $.command.register({
			name: 'texy',
			description: "Open texy's settings, or set the size: /texy size large",
			argumentHint: '[size small|normal|large]',
			immediate: true,
		})
		return next(e)
	})

	on('command.run', { command: 'texy' }, async ($, e) => {
		const [word = '', value = ''] = (e.args ?? '').trim().toLowerCase().split(/\s+/)

		if (word === '') {
			const opened = await $.ui.open({ id: PANE, title: 'texy' })
			if (opened.isPlaced) return { text: 'texy settings opened.' }
			return { text: `Math size is ${await read($, mathSize)}. ${USAGE}` }
		}
		if (word !== 'size') return { text: `texy has one setting, the math size. ${USAGE}` }
		if (!isSize(value)) return { text: `Math size is ${await read($, mathSize)}. ${USAGE}` }

		await saveSize($, value)
		return { text: `Math size set to ${value}.` }
	})

	on('ui.render', { component: 'Pane', requestId: PANE }, async ($, e) => {
		const size = await read($, mathSize)

		const controls = (() => {
			const { Box, Text, Button } = $.ui.resolve(e)
			return (
				<Box flexDirection="column" gap="xs">
					<Text weight="semibold">Math size</Text>
					<Box flexDirection="row" gap="xs">
						{SIZES.map(s => (
							<Button
								key={`size-${s}`}
								label={s}
								variant={s === size ? 'primary' : 'secondary'}
								onPress={() => {
									if (s !== size) void saveSize($, s)
								}}
							/>
						))}
					</Box>
				</Box>
			)
		})()

		if (e.surface === 'terminal') return controls

		// The preview is drawn exactly as a reply is, so it shows the real result.
		const t = $.ui.resolve(e)
		return (
			<t.Box flexDirection="column" gap="md" padding="sm">
				{controls}
				<t.Box flexDirection="column" gap="xs" alignItems="flex-start">
					<t.Text weight="semibold">Preview</t.Text>
					{drawBlocks(t, PREVIEW_BLOCKS, size)}
				</t.Box>
			</t.Box>
		)
	})
}
