// texy's state contract: the values it keeps in $.state.

export type TexySize = 'small' | 'normal' | 'large'

declare module 'claude-code' {
	interface PluginState {
		texy: { mathSize: TexySize }
	}
}
