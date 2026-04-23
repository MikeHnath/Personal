# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Deployment

Push to `main` — GitHub Actions runs `npm run build` and publishes `dist/` to GitHub Pages. In the repo's Pages settings, source must be set to **GitHub Actions** (not "Deploy from a branch").

## Local development

```
npm install
npm run dev        # http://localhost:4321
npm run build      # outputs to dist/
npm run preview    # serves dist/ locally
```

## Architecture

Astro 5 static site. Each page is a file under `src/pages/` and compiles to its own URL.

- **`src/layouts/Base.astro`** — shared shell: sidebar nav with active-state detection via `Astro.url.pathname`, theme toggle, contact modal, footer. Every page imports this.
- **`src/pages/*.astro`** — one file per route. `index.astro` → `/`, `about.astro` → `/about/`, etc.
- **`src/pages/work/*.astro`** — case study pages at `/work/{slug}/`.
- **`src/styles/global.css`** — design tokens as CSS custom properties on `:root`. Dark mode overrides those same variables via `setTheme()` in `main.js` (no `.dark` class toggle).
- **`public/main.js`** — all client-side interactivity: nav helpers, keyboard shortcuts, filtering, modal, theme switcher, clock, brand ticker, updates/work renderers, case-study CAR carousel. Loaded as a single `<script is:inline src="/main.js">` from Base.astro.
- **`public/{Icons,Images,Logos,Video}/`** — static assets served from the site root (e.g. `/Icons/foo.svg`).

### Navigation

Sidebar items are `<a href="...">` elements. `Base.astro` adds `.active` based on path match. `main.js` still exposes `nav(pageId)` and `openCase(slug)` for any dynamically-rendered card that needs to navigate programmatically — both just set `window.location.href`.

Case-study slug mapping: the `kh` slug used by the home/work featured cards resolves to `/work/kraft-heinz/` via `slugMap` in `openCase()`.

### Keyboard shortcuts

Sidebar shortcut badges (1–9) stay in sync with the `map` object in the `keydown` listener in `main.js`. Key 3 now routes to `/writing/` (was `/blog/`). Key 8 opens the external Adobe Portfolio; key 9 opens the contact modal.

### Assets

- `public/Icons/` — tool/software SVGs used on the About and Tools pages
- `public/Logos/` — client brand assets used in the ticker and case studies
- Brand images are referenced by absolute path (`/Logos/foo.svg`) in the `brands` array at the top of `main.js`
