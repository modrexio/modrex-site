# Modrex Web — UI kit

The **marketing + docs website** for Modrex, in-brand. Two screens that share a sticky nav and footer.

> **Original in-brand recreation.** No public source repo for the Modrex website was available, so this is built from the design system's tokens and the product's real feature copy — a faithful brand extension, not a pixel copy of a live site.

## Screens
- `index.html` — **Landing page**: sticky nav, a Bebas-Neue hero ("THE PAYDAY 3 / MOD MANAGER") with platform download CTAs, an app-window product shot, a six-card feature grid (Lucide icons), a Windows/Linux download section, and a footer. Nav links smooth-scroll; *Docs* goes to `docs.html`.
- `docs.html` — **Documentation page**: TOC sidebar + prose installation guide, a requirements table with store icons, callouts, code blocks, and log-path reference. Content mirrors the app's real README.

## Build approach
Both pages are **static HTML** that link the root `styles.css` and use the design-system tokens, the `.mdx-*` classes, and the `.modrex-wordmark` helper. Marketing-scale CTA buttons (`.btn-lg`) are built on the same tokens. Lucide is loaded from CDN for feature/UI icons; platform marks come from `assets/icons/`.

## Assets
- `assets/app-shot.png` — a screenshot of the **Modrex App UI kit** used as the hero product image (so the marketing shot always matches the real app).

## Notes
- Stays inside the brand: flat near-black, one subtle ≤10% accent wash on the hero, hairline borders, no gradient soup or neon.
- Swap in real site layouts if the website source becomes available.
