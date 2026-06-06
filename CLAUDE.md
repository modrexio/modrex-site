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

- All colors are CSS custom properties defined in `src/styles/tokens/colors.css` via Tailwind v4's `@theme`. Never use hardcoded Tailwind color classes (`zinc-*`, `red-*`, etc.). Token names: `surface`, `surface-raised`, `surface-hover`, `surface-active`, `border`, `text`, `text-muted`, `accent`, `accent-bright`, `danger`, `success`, `warning`. Tint variables (raw CSS props, not Tailwind classes): `--accent-tint-10/20/30`, `--warning-tint-10/30`, `--scrim` (modal backdrop `rgba(0,0,0,0.6)`).
- Tailwind is loaded via `@tailwindcss/vite` plugin (not `@astrojs/tailwind`).
- `fonts.css` must be imported **before** `@import 'tailwindcss'` in `global.css` to avoid PostCSS ordering errors with Google Fonts `@import url()`.
- Shared layout utilities (`.wrap`, `.btn-lg`, `.sec-head`, `.doc-prose`) live in `global.css`. Component-specific styles use Astro scoped `<style>` blocks.
- MDX-rendered content cannot receive scoped styles from parent components — use `:global()` or add styles to `global.css`.

**Mobile breakpoints** (defined in `global.css` for shared utilities; in component `<style>` blocks for component-specific layout):

- `768px` — nav switches to hamburger, docs sidebar stacks above article, `.wrap` padding shrinks to `16px`
- `860px` / `500px` — features grid: 3-col → 2-col → 1-col
- `640px` — hero inner padding/font size reductions, download section 2-col → 1-col, gallery nav buttons switch to absolute overlays on the card edges
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

### Analytics & consent

`BaseLayout.astro` includes GA4 (measurement ID `G-51PXP0HVZD`) with Consent Mode v2. Analytics tracking is **denied by default** and only enabled after the user accepts via `CookieBanner.astro`.

Key constraint: ESLint's `prefer-rest-params` rule fires inside `<script is:inline>` blocks, and each block is treated as an independent scope (`no-undef` fires on bare globals from another block). The gtag function uses rest params and `window.` prefix throughout:

```js
window.gtag = function (...args) {
    window.dataLayer.push(args)
}
```

`CookieBanner.astro` stores consent in `localStorage` (`cookie_consent = 'granted' | 'denied'`) and calls `window.gtag('consent', 'update', ...)` on accept. It renders at the bottom-left corner of every page.

### SEO

`astro.config.mjs` sets `site: 'https://modrex.net'` — this powers `Astro.site` and `Astro.url` throughout the app. The sitemap integration auto-generates `/sitemap-index.xml` at build time from all static routes.

`BaseLayout.astro` emits: `<meta name="description">`, `<link rel="canonical">`, Open Graph tags (`og:title/description/image/url/type/site_name`), and Twitter card tags. The default `og:image` is `/logo.png` resolved to an absolute URL via `new URL('/logo.png', Astro.site)`. `BaseLayout` has a `<slot name="head" />` inside `<head>` for page-specific injections.

`src/pages/index.astro` injects a `SoftwareApplication` JSON-LD block via `<script type="application/ld+json" is:inline set:html={...} slot="head">`. The `is:inline` directive is required when using `set:html` on a script tag.

`public/robots.txt` allows all crawlers and points to the sitemap URL. If the domain changes, update `site` in `astro.config.mjs`, the sitemap URL in `robots.txt`, and the `url`/`downloadUrl` in the JSON-LD in `index.astro` — all three must match.

### Static assets

`public/icons/` contains SVG icons for platforms (`windows`, `linux`) and launchers (`steam`, `epicgames`, `xbox`) in normal and `-white` variants (e.g. `steam-white.svg`). Use the `-white` variants in the dark-only UI. In MDX files, always use self-closing `<img />` — bare `<img>` causes an MDX parse error.

### Icons

Lucide icons via the `lucide` package (not `lucide-react`). In each component that needs icons: import `createIcons` + the specific icons, call `createIcons({ icons: { ... } })` inside a `<script>` block. Use `<i data-lucide="icon-name">` in markup. Add `display: block` to both `i` and `svg` selectors to avoid inline-element alignment issues.

### Nav mobile menu

At `≤768px`, `.nav-links` and `.nav-right` are hidden and a hamburger button appears. Clicking it toggles `.open` on `#mobile-menu`, which drops down below the nav bar with all links plus a download button. The menu closes on any link click. The mobile download button mirrors the OS detection logic from the desktop button.

### Docs

- Nav structure is in `src/lib/docs-nav.ts` — update this when adding/removing doc pages.
- `src/components/docs/Callout.astro` is the only custom MDX component. Import and use it in MDX pages as `<Callout>` (default `type="info"`) or `<Callout type="warning">`. It must be imported at the top of each MDX file that uses it.
- `src/pages/docs/index.astro` redirects to `/docs/getting-started`.
- `src/pages/docs/[...slug].astro` renders all MDX pages using Astro's content layer `render()` API.
- `DocsLayout` renders `h1` from `title` and lead paragraph from `description` frontmatter — don't repeat these inside the MDX body.
- Table yes/no cells use shields.io badges: `![yes](https://img.shields.io/badge/Yes-brightgreen)` and `![no](https://img.shields.io/badge/No-red)`.
- On mobile (`≤768px`), the sidebar becomes a 2-column card above the article (`position: static`, card style). At `≤480px` it collapses to 1 column.

### Hero gallery

5-slot infinite carousel in `Hero.astro`: `[clone-last, real0, real1, real2, clone-first]`. The snap-reset technique — when landing on a clone, `snapTo()` teleports to the real equivalent. During snap, both `track.style.transition` and all `card.style.transition` are set to `'none'` to prevent the blink. The `transitionend` listener filters `e.target !== track || e.propertyName !== 'transform'` to avoid premature firing from child card transitions bubbling up. Card width is `74%` on desktop (`flex: 0 0 74%`) and `88%` on mobile (`flex: 0 0 88%`). The JS `cardW()` reads the actual rendered width from the DOM (`cards[REAL_FIRST].offsetWidth`) so it always matches whatever the CSS sets — no hardcoded ratio to keep in sync. On mobile (`≤640px`), the nav buttons are `position: absolute` overlays centered on the left/right edges of the active card (`left/right: 6%` — derived from `(100% - 88%) / 2`).

## Agent skills

Reusable skills live in `.agents/skills/` and are listed in `AGENTS.md`. Available as Claude Code slash commands:

- `/commit` — read the current diff and propose a conventional commit message; waits for confirmation before committing.

## Rules

- Never run any git command that touches the remote (push, force push). Write out the command for the user to run.
- Commit messages must follow conventional commits — enforced by `commitlint.config.ts`.
- The site is deployed on **Cloudflare Pages** (not GitHub Pages). If a Jekyll/GitHub Pages build failure appears in CI, it can be ignored or GitHub Pages can be disabled in repo settings.
