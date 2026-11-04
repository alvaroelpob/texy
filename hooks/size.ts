// The formula size: one value in $.state, so changing it redraws every
// reply at once with no reload, and saved in $.store for later sessions.
import { atom, update } from 'claude-code'
import type { EngineInterface } from 'claude-code'

import type { TexySize } from '../types'

export const SIZES: readonly TexySize[] = ['small', 'normal', 'large']

// Declared in each file that reads or writes it: the engine lists a module's
// state by reading the atom where it's used.
const mathSize = atom({ plugin: 'texy', key: 'mathSize' } as const, 'normal')

const STORE_KEY = 'mathSize'

export function isSize(value: unknown): value is TexySize {
	return SIZES.includes(value as TexySize)
}

/** Puts the size saved by an earlier session back into this one's state. */
export async function loadSize($: EngineInterface): Promise<void> {
	const saved = await $.store.get(STORE_KEY)
	if (isSize(saved)) await update($, mathSize, () => saved)
}

/** Sets the size now and for later sessions. */
export async function saveSize($: EngineInterface, size: TexySize): Promise<void> {
	await update($, mathSize, () => size)
	await $.store.set(STORE_KEY, size)
}
