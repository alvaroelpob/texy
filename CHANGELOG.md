# Changelog

## 1.1.0 (2026-11-05)

- Fixed: in long messages, formulas showed as raw LaTeX after reopening the app. The app lets a mod draw about 256 KiB per message, and texy drew every formula.
- Formulas the app already renders well are now left to it; texy draws only the rest, such as multi-line `aligned` blocks. The long message that broke goes from 284 KiB to 112.6 KiB of drawing.
- texy's SVGs are lighter: attributes only a web page uses are removed. They look the same.
- `/texy size` now applies to every formula in a message, including the ones the app draws.
- Simple formulas inside tables now render.

## 1.0.0 (2026-11-05)

First release.

- Renders math in Claude's replies in the Claude Code desktop app: inline math (`$...$`, `\(...\)`) sits on the line with the text, and display math (`$$...$$`, `\[...\]`, `equation`, `align`, `gather`, `multline`) is centred on its own line.
- Leaves code blocks, inline code and prices like "$5" as written.
- Follows the app's light or dark theme.
- Adds a short note to Claude's instructions so it writes math in a syntax that renders.
- `/texy` opens a settings panel with a live preview, where you pick the math size: small, normal or large. `/texy size large` sets it directly.
- Bundles MathJax, so no TeX install is needed. Runs entirely on your computer and sends nothing anywhere.
