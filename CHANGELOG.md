# Changelog

## 1.2.0 (2026-11-07)

- Which formulas texy leaves to the app now follows what the app was measured to render, not a short list of macros. Many more formulas (`\partial`, `\nabla`, `\vec`, `\operatorname`, `\underbrace`, `bmatrix`, `array`...) stay with the app.
- texy now draws what the app shows as raw LaTeX: inline formulas past 60 characters, ones with `\|`, an unescaped `%`, CJK text or a plain word of four letters, `\ce{}`, `\newcommand`, a multi-line `\[...\]`, and `align` or `gather`, which the app numbers (1) on every row.
- Matrices and `cases` written without `$$` around them are drawn too.
- Fixed: simple formulas in table cells such as `$S(n,k)$` showed as raw text, while a harder one next to them rendered. The app refuses a formula with no spaces, braces, backslash or operator that has a comma or two letters in a row; texy now adds an empty `{}` after such a cell's formula, which renders the same.

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
