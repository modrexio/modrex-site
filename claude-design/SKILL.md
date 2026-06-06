---
name: modrex-design
description: Use this skill to generate well-branded interfaces and assets for Modrex (a free, open-source PAYDAY 3 desktop mod manager), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick orientation
- **`readme.md`** — the full design guide: sources, content fundamentals, visual foundations, iconography, and a manifest. Read it first.
- **`styles.css`** — the single global entry point; link it (it `@import`s everything in `tokens/`).
- **`tokens/`** — colors, typography, spacing/radii/shadow/motion, fonts, base resets, and `components.css` (the `.mdx-*` classes).
- **`components/`** — React primitives (Button, IconButton, Toggle, Badge, Input, Select, Banner, ProgressBar, Modal, Card). Each has a `.d.ts` (props) and `.prompt.md` (what/when + usage).
- **`guidelines/`** — foundation specimen cards (color/type/spacing/brand).
- **`ui_kits/modrex-app/`** and **`ui_kits/modrex-web/`** — full-screen recreations to copy from.
- **`assets/`** — `logo.png`, `icon.png`, `icon.ico`, and `icons/` (Steam/Epic/Xbox/Windows/Linux SVGs, with `-white` variants for dark UI).

## Non-negotiables
- **Dark only.** Near-black surfaces, hairline `#262626` borders, off-white text.
- **One loud color:** Modrex orange `#e36300` (hover `#f87d36`). Use it sparingly and intentionally.
- **Type:** Bebas Neue for the `MODREX` wordmark / big display only; native system sans for all UI; system mono for paths/args.
- **Icons:** Lucide, small (14–16px), stroke 2, `currentColor`. Platform marks from `assets/icons/`. **No emoji.**
- **Borders over shadows; 200ms color-first motion; no neon, no glassmorphism, no bounce.**
- **Copy:** terse, sentence-case, verbs on buttons, technical strings verbatim in mono.
