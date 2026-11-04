<p align="center"><img src="assets/wordmark.png" width="360" alt="texy"></p>

<p align="center"><b>A Claude Code mod for the desktop app. No TeX install needed.</b>

## Examples

### Inline math

| Claude writes | You see |
| --- | --- |
| `Euler: $e^{i\pi}+1=0$` | Euler: $e^{i\pi}+1=0$ |
| `$\frac{a}{b}$` | $\frac{a}{b}$ |
| `$x^2$ and $x_i$` | $x^2$ and $x_i$ |
| `$\sqrt{2}$` | $\sqrt{2}$ |
| `$\alpha, \beta, \pi$` | $\alpha, \beta, \pi$ |
| `$\mathbb{R}^n$` | $\mathbb{R}^n$ |

### Display math

**Claude writes**

```tex
$$\lim_{x \to 0} \frac{\sin x}{x} = 1$$
```

**You see**

$$\lim_{x \to 0} \frac{\sin x}{x} = 1$$

**Try it:** ask Claude *"Explain the quadratic formula."*

## Install

> texy is pending in the Claude plugin directory. Until it's listed there, install it from this repository.

In a terminal:

```bash
claude plugin install texy --marketplace alvaroelpob/texy
```

Or in the Claude desktop app: click **+** next to the prompt box, then **Plugins**, **Add marketplace** with `alvaroelpob/texy`, then **Add plugin**.

Open a new session, or run `/reload-plugins` in one, and you're done.

To update:

```bash
claude plugin update texy@texy
```

To uninstall:

```bash
claude plugin uninstall texy@texy
```

## Settings

Type `/texy` in Claude Code to open the settings panel, where you can pick the math size (`small`, `normal` or `large`) and see a live preview.

Or set it directly: `/texy size large`

## Good to know

- Works in the desktop app's Code tab. The terminal shows the raw TeX.
- Math inside tables isn't rendered yet.

## Development

Don't install texy while developing it. Load it from its folder instead, so it reloads every time you save. Add this to `~/.claude/settings.json`:

```json
"env": {
  "CLAUDE_CODE_PLUGIN_DIRS": "C:\\path\\to\\texy",
  "CLAUDE_CODE_PLUGIN_DIR_WATCH": "1"
}
```

Useful commands:

```bash
claude plugin validate .   # check the plugin
claude plugin test .       # run the tests
```

To rebuild the bundled MathJax (needs [Bun](https://bun.sh)):

```bash
cd build
bun install
bun run build
```

To type-check: `bunx tsc -p .`

## Privacy

texy runs entirely on your computer. It reads Claude's replies to draw the math in them, and adds a short note to Claude's instructions about which math syntax renders. The only thing it saves is the math size you choose. It sends nothing over the network, downloads nothing and runs no programs.

## License

texy is licensed under the [Apache License 2.0](LICENSE). Copyright 2026 [Alvaro](https://github.com/alvaroelpob). It includes [MathJax](https://www.mathjax.org), also Apache 2.0.
