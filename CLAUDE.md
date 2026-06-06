# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # Start dev server at localhost:4321
pnpm build        # Static build to dist/
pnpm preview      # Preview the built site
pnpm typecheck    # astro check (type-checks .astro + .ts files)
pnpm lint         # ESLint on src/
pnpm lint:fix     # ESLint with auto-fix
pnpm format       # Prettier on everything
pnpm format:check # Check formatting without writing
```

Commit messages must follow conventional commits (`type(scope): subject`) — enforced by commitlint at commit time.

## Architecture

Pure static Astro 6 site. No server runtime — everything is rendered at build time.

```
src/pages/          ← routes
src/components/     ← Astro components (marketing + docs)
src/layouts/        ← BaseLayout, DocsLayout
src/content/docs/   ← MDX doc pages
src/content.config.ts ← Astro 6 content layer config (NOT src/content/config.ts)
src/lib/github.ts   ← GitHub Releases API fetch (build-time only)
src/lib/docs-nav.ts ← docs sidebar nav structure (single source of truth)
src/styles/global.css          ← imports tokens + shared utilities + mobile breakpoints
src/styles/tokens/             ← design tokens (colors, typography, spacing, components)
```

### Data flow

`getLatestRelease()` in `src/lib/github.ts` is called in `src/pages/index.astro` at build time with a try/catch fallback to `null`. The `release` object is passed as a prop to `Nav`, `Hero`, and `DownloadSection` — all three must handle `release: Release | null`.

### Styling rules

- All colors are CSS custom properties defined in `src/styles/tokens/colors.css` via Tailwind v4's `@theme`. Never use hardcoded Tailwind color classes (`zinc-*`, `red-*`, etc.). Token names: `surface`, `surface-raised`, `surface-hover`, `surface-active`, `border`, `text`, `text-muted`, `accent`, `accent-bright`, `danger`, `success`, `warning`.
- Tailwind is loaded via `@tailwindcss/vite` plugin (not `@astrojs/tailwind`).
- `fonts.css` must be imported **before** `@import 'tailwindcss'` in `global.css` to avoid PostCSS ordering errors with Google Fonts `@import url()`.
- Shared layout utilities (`.wrap`, `.btn-lg`, `.sec-head`, `.doc-prose`) live in `global.css`. Component-specific styles use Astro scoped `<style>` blocks.
- MDX-rendered content cannot receive scoped styles from parent components — use `:global()` or add styles to `global.css`.

**Mobile breakpoints** (defined in `global.css` for shared utilities; in component `<style>` blocks for component-specific layout):

- `768px` — nav switches to hamburger, docs sidebar stacks above article, `.wrap` padding shrinks to `16px`
- `860px` / `500px` — features grid: 3-col → 2-col → 1-col
- `640px` — hero inner padding/font size reductions, download section 2-col → 1-col, gallery nav button size
- `480px` — section title and doc prose `h1` font size floor (`32px`)

### OS detection

Three components do client-side OS detection: `Hero.astro`, `DownloadSection.astro`, `Nav.astro`. All three use the same two-part `isMobile` check — UA pattern for standard mobile devices plus a `maxTouchPoints` branch for iPadOS 13+ which reports as macOS:

```ts
const isMobile =
    /Android|iPhone|iPad|iPod/.test(navigator.userAgent) ||
    (navigator.maxTouchPoints > 1 && /Mac/.test(navigator.userAgent))
const isLinux = /Linux|X11/.test(navigator.userAgent) && !/Android/.test(navigator.userAgent)
```

On mobile: no OS highlight or badge is shown, and the hero button shows a generic "Download" label. On desktop Linux: switch to Linux assets. On desktop Windows/other: default to Windows assets. **Keep all three files in sync** when changing this logic.

### Icons

Lucide icons via the `lucide` package (not `lucide-react`). In each component that needs icons: import `createIcons` + the specific icons, call `createIcons({ icons: { ... } })` inside a `<script>` block. Use `<i data-lucide="icon-name">` in markup. Add `display: block` to both `i` and `svg` selectors to avoid inline-element alignment issues.

### Nav mobile menu

At `≤768px`, `.nav-links` and `.nav-right` are hidden and a hamburger button appears. Clicking it toggles `.open` on `#mobile-menu`, which drops down below the nav bar with all links plus a download button. The menu closes on any link click. The mobile download button mirrors the OS detection logic from the desktop button.

### Docs

- Nav structure is in `src/lib/docs-nav.ts` — update this when adding/removing doc pages.
- `src/pages/docs/index.astro` redirects to `/docs/getting-started`.
- `src/pages/docs/[...slug].astro` renders all MDX pages using Astro's content layer `render()` API.
- `DocsLayout` renders `h1` from `title` and lead paragraph from `description` frontmatter — don't repeat these inside the MDX body.
- Table yes/no cells use shields.io badges: `![yes](https://img.shields.io/badge/Yes-brightgreen)` and `![no](https://img.shields.io/badge/No-red)`.
- On mobile (`≤768px`), the sidebar becomes a 2-column card above the article (`position: static`, card style). At `≤480px` it collapses to 1 column.

### Hero gallery

5-slot infinite carousel in `Hero.astro`: `[clone-last, real0, real1, real2, clone-first]`. The snap-reset technique — when landing on a clone, `snapTo()` teleports to the real equivalent. During snap, both `track.style.transition` and all `card.style.transition` are set to `'none'` to prevent the blink. The `transitionend` listener filters `e.target !== track || e.propertyName !== 'transform'` to avoid premature firing from child card transitions bubbling up. Card width is `74%` of `gallery-outer`'s width at all viewport sizes — the JS `cardW()` and CSS `flex: 0 0 74%` stay in sync.

## Rules

- Never run any git command that touches the remote (push, force push). Write out the command for the user to run.
- Commit messages must follow conventional commits — enforced by `commitlint.config.ts`.
- The site is deployed on **Cloudflare Pages** (not GitHub Pages). If a Jekyll/GitHub Pages build failure appears in CI, it can be ignored or GitHub Pages can be disabled in repo settings.
