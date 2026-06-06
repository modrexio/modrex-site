// Browse screen — search + filters + responsive mod grid + pagination.

function BrowseScreen({ onOpen }) {
  const { Input, Select } = window.ModrexDesignSystem_708df2;
  const { MODS, CATEGORIES, SORT } = window.MODREX_DATA;
  const [query, setQuery] = React.useState('');
  const [cat, setCat] = React.useState('');
  const [sort, setSort] = React.useState('bumped_at');
  const [page, setPage] = React.useState(1);

  let mods = MODS.filter((m) =>
    (!query || m.name.toLowerCase().includes(query.toLowerCase()) || m.author.toLowerCase().includes(query.toLowerCase())) &&
    (!cat || m.cat === cat)
  );
  if (sort === 'downloads') mods = [...mods].sort((a, b) => b.downloads - a.downloads);
  else if (sort === 'likes') mods = [...mods].sort((a, b) => b.likes - a.likes);
  else if (sort === 'name') mods = [...mods].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div style={{ padding: '16px 24px', borderBottom: '1px solid var(--color-border)', flexShrink: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
        <h1 style={{ margin: 0, fontSize: 18, fontWeight: 600, color: 'var(--color-text)' }}>Browse Mods</h1>
        <div style={{ display: 'flex', gap: 8 }}>
          <div style={{ flex: 1 }}>
            <Input value={query} onChange={(v) => { setQuery(v); setPage(1); }} placeholder="Search mods…"
              icon={<Ic name="Search" size={14} />} clearable />
          </div>
          <Select value={cat} onChange={(v) => { setCat(v); setPage(1); }} placeholder="All categories" options={CATEGORIES} />
          <Select value={sort} onChange={setSort} options={SORT} />
        </div>
      </div>

      <div style={{ flex: 1, overflowY: 'auto', padding: '16px 24px' }}>
        {mods.length === 0 ? (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: 'var(--text-tertiary)', fontSize: 14 }}>
            No mods found
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 16 }}>
            {mods.map((m) => <ModCard key={m.id} mod={m} onOpen={() => onOpen(m.id)} />)}
          </div>
        )}
      </div>

      <div style={{ padding: '12px 24px', borderTop: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexShrink: 0 }}>
        <span style={{ fontSize: 12, color: 'var(--text-tertiary)' }}>{mods.length} mods</span>
        <div style={{ display: 'flex', gap: 4 }}>
          {[1, 2, 3, '…', 12].map((p, i) => (
            <button key={i} onClick={() => typeof p === 'number' && setPage(p)}
              style={{
                fontSize: 12, padding: '4px 12px', borderRadius: 'var(--radius-sm)', border: 'none',
                background: p === page ? 'var(--color-accent)' : 'var(--color-surface-hover)',
                color: p === page ? '#fff' : 'var(--color-text)',
                cursor: p === '…' ? 'default' : 'pointer',
              }}>{p}</button>
          ))}
        </div>
      </div>
    </div>
  );
}
