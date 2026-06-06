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
src/components/docs/← docs-specific components (Callout)
src/layouts/        ← BaseLayout, DocsLayout
src/content/docs/   ← MDX doc pages
src/content.config.ts ← Astro 6 content layer config (NOT src/content/config.ts)
src/lib/github.ts   ← GitHub Releases API fetch (build-time only)
src/lib/docs-nav.ts ← docs sidebar nav structure (single source of truth)
src/styles/global.css          ← imports tokens + shared utilities
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

### Icons

Lucide icons via the `lucide` package (not `lucide-react`). In each component that needs icons: import `createIcons` + the specific icons, call `createIcons({ icons: { ... } })` inside a `<script>` block. Use `<i data-lucide="icon-name">` in markup. Add `display: block` to both `i` and `svg` selectors to avoid inline-element alignment issues.

### Docs

- Nav structure is in `src/lib/docs-nav.ts` — update this when adding/removing doc pages.
- `src/pages/docs/index.astro` redirects to `/docs/getting-started`.
- `src/pages/docs/[...slug].astro` renders all MDX pages using Astro's content layer `render()` API.
- `DocsLayout` renders `h1` from `title` and lead paragraph from `description` frontmatter — don't repeat these inside the MDX body.
- Table yes/no cells use shields.io badges: `![yes](https://img.shields.io/badge/Yes-brightgreen)` and `![no](https://img.shields.io/badge/No-red)`.

### Hero gallery

5-slot infinite carousel in `Hero.astro`: `[clone-last, real0, real1, real2, clone-first]`. The snap-reset technique — when landing on a clone, `snapTo()` teleports to the real equivalent. During snap, both `track.style.transition` and all `card.style.transition` are set to `'none'` to prevent the blink. The `transitionend` listener filters `e.target !== track || e.propertyName !== 'transform'` to avoid premature firing from child card transitions bubbling up.

## Rules

- Never run any git command that touches the remote (push, force push). Write out the command for the user to run.
- Commit messages must follow conventional commits — enforced by `commitlint.config.ts`.
