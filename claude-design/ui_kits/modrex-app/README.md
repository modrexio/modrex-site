# Modrex App — UI kit

An interactive, high-fidelity recreation of the **Modrex desktop app** (Tauri v2 + React). It composes the design-system primitives — it does **not** re-implement them.

## Run it
Open `index.html`. It renders a 1280×800 desktop window with working navigation.

## Screens & flows
- **Top bar** — `MODREX` wordmark + version, and the launch controls (`Launch without mods` / `Launch modded`). Click *Launch modded* to see the launching → running → stop state cycle.
- **Sidebar** — Browse Mods · Installed · Settings, collapsible to icon-only.
- **Browse** — search, category + sort `Select`s, a responsive mod-card grid, and pagination. Search/filter are live against the mock data.
- **Installed** — grid/list toggle, an updates banner, folders affordance, and per-mod enable/remove.
- **Mod detail** — sticky action header, banner, stats row, and tabs (Description, Images, Downloads, Changelog, Dependencies). Click any mod card to open it; *Back* returns.
- **Settings** — game path, launcher select (with store icons), updates, logs, launch options.

## Files
- `index.html` — loader + 1280×800 window frame. Fetches the DS component sources, transpiles them into `window.ModrexDesignSystem_<hash>`, then mounts the screens. (It composes the real primitives without depending on the server-built bundle, so it also runs standalone.)
- `data.js` — mock PAYDAY 3 mod catalog (`window.MODREX_DATA`). Thumbnails are deterministic CSS gradients — no real imagery was available.
- `icons.jsx` — `<Ic name="..." />` Lucide helper.
- `Chrome.jsx` — `TopBar` + `Sidebar`.
- `ModCard.jsx` — the mod card composite.
- `BrowseScreen.jsx`, `DetailScreen.jsx`, `SettingsScreen.jsx` — the views.
- `App.jsx` — the shell that wires view state together; exposes `window.mountApp(el)`.

## Notes
- Built strictly from the app's real component code in `modrex-main/src/renderer/src/`. Layouts, copy, and states mirror the originals; logic is cosmetic only.
- Mod artwork is represented by gradient tiles. Drop real `modworkshop` thumbnails in if you need photographic fidelity.
