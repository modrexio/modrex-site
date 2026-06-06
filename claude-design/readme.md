# Modrex Design System

A complete design system for **Modrex** — a free, open-source desktop **mod manager for [PAYDAY 3](https://store.steampowered.com/app/1272080/PAYDAY_3/)**, powered by [modworkshop](https://modworkshop.net/g/payday-3). The desktop app is built with **Tauri v2 (Rust + React + Tailwind v4)** and ships on **Windows and Linux**. There is also a static marketing + docs website.

This project packages Modrex's visual language — its dark, sharp, gaming-adjacent aesthetic with a confident orange accent — into tokens, reusable React components, foundation specimens, and full-screen UI-kit recreations, so any design agent can produce on-brand interfaces and assets.

> The vibe: **clean and sharp, gaming-adjacent but not over-the-top.** No neon, no heavy glassmorphism. One strong accent color, confident display type, dense and tidy layouts.

---

## Sources

Everything here was reverse-engineered from the real product. If you have access, explore these to go deeper:

- **Desktop app codebase** (provided): `modrex-main/` — Tauri + React renderer in `src/renderer/src/`. The semantic color tokens are the source of truth, defined in `src/renderer/src/index.css` under Tailwind's `@theme`.
- **GitHub:** [`github.com/modrexio/modrex`](https://github.com/modrexio/modrex) — the desktop app. Also [`modrexio/modrex-index`](https://github.com/modrexio/modrex-index) (the mod index the app hashes against).
- **modworkshop:** [`modworkshop.net/g/payday-3`](https://modworkshop.net/g/payday-3) — the mod catalog Modrex browses.
- **Uploaded brand assets:** `uploads/logo.png`, `uploads/icon.png`, `uploads/icon.ico` (copied into `assets/`).

**Note on the website:** no public source repo for the marketing/docs site was available, so `ui_kits/modrex-web/` is an **original, in-brand recreation** built from the product's tokens and the README's feature copy — not a pixel copy of a live site. Treat it as a faithful brand extension; swap in real layouts if/when the site source appears.

**Note on fonts:** the display face is **Bebas Neue**, loaded from Google Fonts exactly as the app does (`src/renderer/index.html`). All UI text uses the **native system sans/mono stacks** — the same thing the Tauri app renders — so there are no body webfonts to ship. If you want a fully offline bundle, drop a Bebas Neue `.woff2` into `assets/fonts/` and repoint `tokens/fonts.css`.

---

## Content fundamentals

How Modrex writes. The product talks to PC modders — it's practical, terse, and never markety-cute.

- **Voice:** direct and functional. Labels are verbs or plain nouns: *Install, Remove, Browse Mods, Launch modded, Check for updates, Open log file.* Buttons say exactly what they do.
- **Person:** mostly **imperative / second-person implied** ("Browse and search mods", "Drag mods into folders"). The app addresses *you* ("You're up to date", "Path to **your** PAYDAY 3 installation"). It rarely says "we".
- **Casing:** **Sentence case** for body, descriptions, and most buttons ("Launch without mods", "Check for updates"). **Title Case** for nav items and page titles ("Browse Mods", "Installed Mods", "Game Path", "Launch Options"). The **only all-caps** is the `MODREX` wordmark (and marketing display headlines in Bebas).
- **Tone of status messages:** plain and reassuring, no exclamation. *"You're up to date." · "Game not found — install disabled." · "Mods are hidden — the game was launched in vanilla mode and may still be running."* Note the em-dash pattern for a short clause + consequence.
- **Microcopy length:** short. Settings descriptions are one sentence. Empty states are 2–4 words ("No mods found", "No mods installed yet").
- **Technical strings stay technical:** file names, paths, and launch args are shown verbatim in monospace (`-fileopenlog`, `%APPDATA%\Modrex\logs\modrex.log`). Never prettify them.
- **Numbers:** counts are abbreviated in dense UI (`48.2k`, `152.3k`, `3.1k`) and spelled out with separators on detail pages (`48,200`). Relative time is terse: `5h ago`, `2d ago`, `3mo ago`.
- **Emoji:** **none.** The product uses Lucide icons, never emoji. Don't introduce them.
- **Marketing voice** (website) is a half-step louder but still grounded: *"The PAYDAY 3 mod manager," "one click, no file juggling," "get back to the heist."* Confident, never hypey; no gradient-soup superlatives.

---

## Visual foundations

The look is **dark-only**, built on a near-black surface ramp, hairline borders, and a single loud orange. It reads like a focused desktop tool, not a flashy gamer skin.

**Color.** A five-step near-black surface ramp (`#131313 → #464646`) that gets *lighter as it raises* — cards and the sidebar sit on `surface-raised (#1c1c1c)`, hover wells on `#262626`, active/pressed on `#333333`. The border color is a single hairline (`#262626`, same as hover). Text is an off-white (`#f4f4f3`) stepping down through two greys (`#8e8e96`, `#71717a`). The accent is **Modrex orange `#e36300`**, brightening to `#f87d36` on hover — used for primary buttons, active nav, links, and emphasis, and at 10–30% alpha for tinted wells (`accent/10`, `/20`, `/30`). State colors are **deep, desaturated fills with a bright readable text on top**: danger = burnt red `#5a2204` / text `#fda578`; success = deep green `#053d1c` / text `#00df72`; warning = a single amber `#facc15` used only at low alpha for banners. Imagery skews **warm and dark** (the mod thumbnails are moody, low-key).

**Type.** Two roles. **Bebas Neue** (condensed, all-caps, tracking `0.05em`) is reserved for the `MODREX` wordmark, big numerals, and marketing display headlines — nothing else. Everything in the UI is the **native system sans**, living almost entirely at `12px` (the workhorse), `14px` (body/titles), and `18px` (page titles), with weights 400/500/600 and the occasional 700 on list rows. Paths, versions, and launch args are **system monospace**.

**Spacing & density.** A 4px base, used tight: 2–12px micro-gaps dominate. Page gutters are `24px`. The UI is dense and tidy — lots of small controls packed cleanly, never cramped.

**Radii.** Small and consistent: `4px` on buttons/inputs/pills/badges, `6–8px` on cards and wells, `12px` on modals, full-round on toggles, avatars, and the loading spinner.

**Borders over shadow.** Elevation is expressed almost entirely by a **1px border on a raised surface**, not drop shadows. The toggle knob gets a tiny shadow; dropdowns get a soft `shadow-md`; only modals get a real `shadow-modal` over a `rgba(0,0,0,0.6)` scrim. No glow, no neon edges.

**Backgrounds.** Flat near-black. The hero on the website adds one *very* subtle radial accent wash at the top (≤10% alpha) and a thin vignette — no full gradients, no busy textures, no patterns. Mod thumbnails are the only "imagery", and they're moody/dark.

**Borders, cards, surfaces.** A card = `surface-raised` + `1px` `border` + `8px` radius, often with media bleeding to the edge (`overflow: hidden`). Disabled/inactive media is **grayscaled** and returns to color on hover. Hover on a media card is a subtle `brightness(1.1)`.

**Motion.** Short and **color-first**. The default transition is `200ms` ease (`cubic-bezier(0.4,0,0.2,1)`) on `color / background / border`. Toggles slide their knob `200ms`; the sidebar animates width `200ms`; progress bars ease width over `300ms`; the only looping animation is a `spin` on the loading spinner / refresh icon and a gentle `pulse` for indeterminate progress. **No bounce, no spring, no parallax, no decorative entrance animations.**

**Hover / press states.**
- *Primary button:* accent → accent-bright on hover.
- *Secondary:* `surface-hover` → `surface-active`.
- *Ghost / icon button:* transparent → `surface-hover`, with text/icon going from `text-subtle` to `text`.
- *Nav item:* inactive items lighten to `surface-hover`; active item sits at `surface-active`.
- *Disabled:* `opacity: 0.4` + `not-allowed` cursor. There is **no shrink/scale press state** — feedback is color and the spinner.

**Transparency & blur.** Used sparingly: the website nav uses a `blur(10px)` translucent bar; modal scrims are flat black at 60%; tinted state wells use alpha over the dark surface. No frosted-glass panels in the app itself.

**Layout rules.** The app is a fixed desktop window: a full-width **top bar** (launch controls + wordmark), a collapsible **left sidebar** (48px ↔ 192px), and a scrolling main area with a sticky section header. Content grids are responsive auto-fill card grids. Scrollbars are restyled thin (`8px`) in surface colors.

---

## Iconography

- **Primary icon set: [Lucide](https://lucide.dev)** (`lucide-react` in the app). 16px is the default in-app size (14px inside small buttons, 12px for inline meta), stroke width 2, `currentColor` so icons inherit text color. This is the single most important thing to get right: **use Lucide, at small sizes, mono-stroke.** The cards and UI kits in this project load Lucide from CDN (`unpkg.com/lucide`) and render the same glyphs.
  - Common glyphs in use: `Compass` (browse), `Package` (installed), `Settings`, `Search`, `Download`, `Trash2`, `Play`, `Square` (stop), `RefreshCw`, `FolderOpen` / `FolderPlus` / `FolderTree`, `Heart`, `Eye`, `Clock`, `ChevronDown` / `ChevronLeft`, `X`, `ExternalLink`, `LayoutGrid` / `List`, `TriangleAlert`, `Loader`, `ScrollText`.
- **Brand-specific SVGs:** platform/store marks are shipped as flat SVGs in `assets/icons/` — `windows`, `linux`, `steam`, `epicgames`, `xbox`, each with a `-white` variant for dark UI. Use the `-white` variant on Modrex's dark surfaces. These came straight from the app repo; **copy them, don't redraw.**
- **No emoji. No Unicode-glyph icons.** The product never uses them; neither should generated assets.
- **Logo / monogram:** the `MODREX` wordmark (white `MOD` + orange `REX`, Bebas Neue) and the circular **MR** monogram (`assets/icon.png`, white M + orange R) are the brand marks. Reproduce the wordmark with the `.modrex-wordmark` CSS helper rather than the raster when you need it sharp at large sizes.

---

## What's in here (manifest)

**Global entry point**
- `styles.css` — link this one file. It only `@import`s the tokens below.

**Tokens** (`tokens/`)
- `colors.css` — the surface ramp, accent, text, border, and state colors + semantic aliases & alpha tints.
- `typography.css` — font families, the dense type scale, weights, tracking.
- `spacing.css` — spacing scale, radii, border width, shadow/elevation, motion (durations + easing).
- `fonts.css` — the Bebas Neue webfont import.
- `base.css` — element resets, dark canvas, restyled scrollbars, `.modrex-wordmark` helper.
- `components.css` — stable component classes (`.mdx-btn`, `.mdx-badge`, `.mdx-toggle`, …) the React primitives render with.

**Components** (`components/`) — React primitives, `window.ModrexDesignSystem_<hash>.<Name>`
- `core/` — **Button**, **IconButton**, **Toggle**, **Badge**
- `forms/` — **Input**, **Select**
- `feedback/` — **Banner**, **ProgressBar**, **Modal**
- `display/` — **Card**

**Foundation specimen cards** (`guidelines/`) — the small cards that populate the Design System tab (Colors, Type, Spacing, Brand).

**UI kits** (`ui_kits/`)
- `modrex-app/` — interactive recreation of the desktop app: Browse, Installed (grid + list), mod Detail, Settings, with working nav, search, filters, toggles, and launch flow. See its `README.md`.
- `modrex-web/` — marketing **landing** (`index.html`) + **docs** (`docs.html`) pages, in-brand. See its `README.md`.

**Assets** (`assets/`) — `logo.png`, `icon.png`, `icon.ico`, and `icons/` (platform SVGs).

**`SKILL.md`** — makes this folder usable as a downloadable Agent Skill.

---

## Working with this system

- For **throwaway visuals** (slides, mocks, one-off prototypes): copy the assets you need and write static HTML that links `styles.css`. Use the `.mdx-*` classes or the React primitives; pull glyphs from Lucide.
- For **production-flavored** work: read the tokens and component contracts (`.d.ts` + `.prompt.md` next to each component) and match them exactly.
- Stay dark, stay sharp, keep the orange rare and intentional, and let borders — not shadows — do the structural work.
