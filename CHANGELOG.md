# Changelog

## 1.0.0 (2026-11-05)

First release.

- Renders math in Claude's replies in the Claude Code desktop app: inline math (`$...$`, `\(...\)`) sits on the line with the text, and display math (`$$...$$`, `\[...\]`, `equation`, `align`, `gather`, `multline`) is centred on its own line.
- Leaves code blocks, inline code and prices like "$5" as written.
- Follows the app's light or dark theme.
- Adds a short note to Claude's instructions so it writes math in a syntax that renders.
- `/texy` opens a settings panel with a live preview, where you pick the math size: small, normal or large. `/texy size large` sets it directly.
- Bundles MathJax, so no TeX install is needed. Runs entirely on your computer and sends nothing anywhere.
