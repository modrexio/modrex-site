// Mock data for the Modrex app UI kit — PAYDAY 3 flavored, no real network.
// Thumbnails are deterministic CSS gradients (no real imagery available).

window.MODREX_DATA = (function () {
  function grad(a, b, ang) {
    return `linear-gradient(${ang || 135}deg, ${a}, ${b})`;
  }

  const CATEGORIES = [
    { value: '', label: 'All categories' },
    { value: 'gameplay', label: 'Gameplay' },
    { value: 'ui', label: 'UI / HUD' },
    { value: 'audio', label: 'Audio' },
    { value: 'visual', label: 'Visual' },
    { value: 'tools', label: 'Tools' },
    { value: 'maps', label: 'Heists & Maps' },
  ];

  const SORT = [
    { value: 'bumped_at', label: 'Last Updated' },
    { value: 'downloads', label: 'Most Downloaded' },
    { value: 'likes', label: 'Most Liked' },
    { value: 'published_at', label: 'Newest' },
    { value: 'name', label: 'Name' },
  ];

  const MODS = [
    {
      id: 1, name: 'Civilian Heat Overhaul', author: 'ripperoni',
      cat: 'gameplay', tags: ['Gameplay', 'Balance'],
      short: 'Smarter civilian panic, alarm timing, and guard sightlines for a tenser stealth game.',
      likes: 3120, downloads: 48200, views: 91400, updated: '2d ago',
      version: '2.4.1', thumb: grad('#3a2d1a', '#16110a'),
      desc: 'Reworks the entire civilian AI layer. Civs now react to line-of-sight, hold their hands up longer under threat, and trip alarms with realistic delay. Tuned alongside the base detection curve so loud builds still feel fair.',
      published: 'Jan 14, 2025', updatedFull: 'Jun 02, 2026', license: 'MIT',
      installed: false,
    },
    {
      id: 2, name: 'No Intro Videos', author: 'kludge',
      cat: 'tools', tags: ['Tools', 'QoL'],
      short: 'Skip the publisher splash screens and boot straight into the menu.',
      likes: 8800, downloads: 152300, views: 210500, updated: '5h ago',
      version: '1.0.3', thumb: grad('#1d2a2e', '#0e1416'),
      desc: 'Removes the startup bink videos. Pure quality-of-life. Drop-in .pak, no dependencies.',
      published: 'Nov 02, 2024', updatedFull: 'Jun 05, 2026', license: 'Unlicense',
      installed: true, enabled: true,
    },
    {
      id: 3, name: 'Tactical HUD Reborn', author: 'vesper',
      cat: 'ui', tags: ['UI / HUD', 'Visual'],
      short: 'A cleaner, denser heads-up display with readable ammo and objective tracking.',
      likes: 5440, downloads: 73900, views: 118200, updated: '1d ago',
      version: '3.1.0', thumb: grad('#2e1a2a', '#140e13'),
      desc: 'Replaces the default HUD with a compact, high-contrast layout. Configurable scale, optional minimal mode, and a reworked objective tracker.',
      published: 'Mar 21, 2025', updatedFull: 'Jun 04, 2026', license: 'GPL-3.0',
      installed: true, enabled: false,
    },
    {
      id: 4, name: 'Heavier Recoil Pack', author: 'doomslug',
      cat: 'gameplay', tags: ['Gameplay', 'Weapons'],
      short: 'Weightier weapon handling and recoil curves for a more grounded gunfeel.',
      likes: 2010, downloads: 31100, views: 54300, updated: '3d ago',
      version: '1.6.2', thumb: grad('#26221a', '#11100b'),
      desc: 'Retunes recoil, sway, and recovery per weapon class. Designed to reward burst discipline without making full-auto useless.',
      published: 'Feb 09, 2025', updatedFull: 'Jun 01, 2026', license: 'MIT',
      installed: false,
    },
    {
      id: 5, name: 'Ambient Radio Expansion', author: 'lo-fi heister',
      cat: 'audio', tags: ['Audio'],
      short: 'Adds 40+ licensed-free tracks to in-level radios and the safehouse.',
      likes: 1490, downloads: 22700, views: 39800, updated: '6d ago',
      version: '0.8.0', thumb: grad('#1a2620', '#0b1410'),
      desc: 'A curated set of royalty-free tracks wired into the existing radio objects. Toggle stations per-heist.',
      published: 'Apr 30, 2025', updatedFull: 'May 30, 2026', license: 'CC-BY-4.0',
      installed: false,
    },
    {
      id: 6, name: 'Sharper Shadows & AO', author: 'pixelmancer',
      cat: 'visual', tags: ['Visual'],
      short: 'Reworked shadow resolution and ambient occlusion presets for crisper scenes.',
      likes: 3960, downloads: 60400, views: 88900, updated: '12h ago',
      version: '2.0.1', thumb: grad('#22252e', '#0e1014'),
      desc: 'Adjusts shadow cascades and AO sampling. Includes Performance, Balanced, and Quality presets.',
      published: 'Dec 18, 2024', updatedFull: 'Jun 05, 2026', license: 'MIT',
      installed: true, enabled: true, update: true,
    },
    {
      id: 7, name: 'Loadout Quick-Swap', author: 'vesper',
      cat: 'tools', tags: ['Tools', 'QoL'],
      short: 'Save and hot-swap full loadouts from a single keybind in the lobby.',
      likes: 2780, downloads: 41200, views: 67100, updated: '4d ago',
      version: '1.2.0', thumb: grad('#2a2118', '#13100b'),
      desc: 'Stores named loadout presets and lets you cycle them without re-entering the inventory.',
      published: 'May 11, 2025', updatedFull: 'Jun 01, 2026', license: 'MIT',
      installed: false,
    },
    {
      id: 8, name: 'Touch the Sky — Skybox Pack', author: 'pixelmancer',
      cat: 'visual', tags: ['Visual', 'Heists & Maps'],
      short: 'Hand-graded skyboxes and time-of-day variants for every base heist.',
      likes: 4320, downloads: 55800, views: 80200, updated: '2d ago',
      version: '1.4.0', thumb: grad('#1c2330', '#0d1018'),
      desc: 'Replaces skyboxes with re-graded variants. Optional dusk and overcast versions per map.',
      published: 'Jan 02, 2025', updatedFull: 'Jun 03, 2026', license: 'CC-BY-4.0',
      installed: false,
    },
  ];

  return { CATEGORIES, SORT, MODS };
})();
