# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Deployment

Push to `main` — GitHub Actions automatically deploys to GitHub Pages. No build step; the repo root is served as-is.

## Architecture

Single-page application with no framework, bundler, or dependencies. Three files do everything:

- **`index.html`** — all page content lives here as sibling `<div class="page">` elements. Only one has `class="page active"` at a time; CSS hides the rest with `display:none`.
- **`main.js`** — all interactivity: navigation, keyboard shortcuts, filtering, modal, theme switcher, clock.
- **`styles.css`** — design tokens as CSS custom properties on `:root`, dark mode applied by overriding those same variables via `setTheme()` in JS (no `.dark` class toggle).

### Page system

Each page has `id="page-{name}"`. Nav items have `data-page="{name}"` and call `nav(pageId)`. Case studies use `id="page-case-{slug}"` and are opened via `openCase(slug)` — they share the Work nav item as the active state.

All pages in the HTML are reachable from the sidebar. The Media nav item opens `hnath.myportfolio.com` externally (no internal page).

### Keyboard shortcuts

Sidebar shortcut badges (1–9) must stay in sync with the `map` object in the `keydown` listener in `main.js`. Key 6 opens Behance externally; key 9 opens the contact modal.

### Assets

- `Icons/` — tool/software SVGs used on the About and Tools pages
- `Logos/` — client brand assets used in the ticker and case studies
- Brand images are referenced by path in the `brands` array at the top of `main.js`
