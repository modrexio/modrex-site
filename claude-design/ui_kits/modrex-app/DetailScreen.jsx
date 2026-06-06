// Mod detail screen — sticky action header, banner, stats, tabs, description.

function Stat({ value, label }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
      <span style={{ fontSize: 16, fontWeight: 600, color: 'var(--color-text)' }}>{value}</span>
      <span style={{ fontSize: 12, color: 'var(--text-tertiary)' }}>{label}</span>
    </div>
  );
}

const DETAIL_TABS = [
  { id: 'description', label: 'Description' },
  { id: 'images', label: 'Images (6)' },
  { id: 'downloads', label: 'Downloads (2)' },
  { id: 'changelog', label: 'Changelog' },
  { id: 'deps', label: 'Dependencies & Instructions' },
];

function DetailScreen({ mod, onBack }) {
  const { Toggle, IconButton, Button, Badge } = window.ModrexDesignSystem_708df2;
  const [tab, setTab] = React.useState('description');
  const [enabled, setEnabled] = React.useState(mod.enabled ?? true);

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* Sticky action header */}
      <div style={{ padding: '10px 24px', borderBottom: '1px solid var(--color-border)', flexShrink: 0, display: 'flex', alignItems: 'center', gap: 12 }}>
        <button onClick={onBack} style={{
          display: 'flex', alignItems: 'center', gap: 6, fontSize: 14, border: 'none', background: 'transparent',
          color: 'var(--text-secondary)', transition: 'var(--transition-colors)',
        }}
          onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-text)')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}>
          <Ic name="ArrowLeft" size={16} /> Back
        </button>
        <span style={{ fontSize: 14, color: 'var(--text-tertiary)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{mod.name}</span>
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 8 }}>
          {mod.installed ? (
            <>
              <Toggle checked={enabled} onChange={setEnabled} />
              <IconButton variant="danger" title="Remove"><Ic name="Trash2" size={14} /></IconButton>
            </>
          ) : (
            <Button variant="primary" size="md" icon={<Ic name="Download" size={14} />}>Install</Button>
          )}
        </div>
      </div>

      <div style={{ flex: 1, overflowY: 'auto' }}>
        {/* Banner */}
        <div style={{ height: 192, background: mod.thumb }} />

        {/* Title block */}
        <div style={{ padding: '20px 24px', borderBottom: '1px solid var(--color-border)' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16 }}>
            <div style={{ minWidth: 0 }}>
              <h1 style={{ margin: 0, fontSize: 22, fontWeight: 700, lineHeight: 1.15, color: 'var(--color-text)' }}>{mod.name}</h1>
              <p style={{ margin: '4px 0 0', fontSize: 14, color: 'var(--text-secondary)' }}>
                by {mod.author} · <span style={{ color: 'var(--color-accent-bright)', display: 'inline-flex', alignItems: 'center', gap: 2 }}>Source <Ic name="ExternalLink" size={12} style={{ display: 'inline' }} /></span>
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 12 }}>
                {mod.tags.map((tg) => <Badge key={tg} variant="neutral">{tg}</Badge>)}
              </div>
            </div>
            <div style={{ textAlign: 'right', flexShrink: 0 }}>
              <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--color-text)' }}>v{mod.version}</div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginTop: 16 }}>
            <Stat value={mod.downloads.toLocaleString()} label="Downloads" />
            <div style={{ width: 1, height: 28, background: 'var(--color-border)' }} />
            <Stat value={mod.likes.toLocaleString()} label="Likes" />
            <div style={{ width: 1, height: 28, background: 'var(--color-border)' }} />
            <Stat value={mod.views.toLocaleString()} label="Views" />
            <div style={{ marginLeft: 'auto', textAlign: 'right', fontSize: 12, color: 'var(--text-tertiary)' }}>
              <div>Published {mod.published}</div>
              <div>Updated {mod.updatedFull}</div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div style={{ display: 'flex', borderBottom: '1px solid var(--color-border)', padding: '0 24px' }}>
          {DETAIL_TABS.map((tb) => {
            const active = tab === tb.id;
            return (
              <button key={tb.id} onClick={() => setTab(tb.id)} style={{
                fontSize: 12, padding: '12px 16px', border: 'none', borderBottom: '2px solid ' + (active ? 'var(--color-accent)' : 'transparent'),
                background: 'transparent', color: active ? 'var(--color-accent)' : 'var(--text-tertiary)',
                transition: 'var(--transition-colors)', whiteSpace: 'nowrap',
              }}>{tb.label}</button>
            );
          })}
        </div>

        {/* Tab content */}
        <div style={{ padding: '20px 24px', maxWidth: 760 }}>
          {tab === 'description' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: 'var(--text-secondary)' }}>{mod.desc}</p>
              <div>
                <h2 style={{ margin: '0 0 8px', fontSize: 14, fontWeight: 600, color: 'var(--color-text)' }}>License</h2>
                <p style={{ margin: 0, fontSize: 14, color: 'var(--text-secondary)' }}>{mod.license}</p>
              </div>
            </div>
          )}
          {tab === 'images' && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <div key={i} style={{ height: 120, borderRadius: 'var(--radius-md)', background: mod.thumb, opacity: 0.7 + (i % 3) * 0.1, border: '1px solid var(--color-border)' }} />
              ))}
            </div>
          )}
          {tab === 'downloads' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[{ n: mod.name + '.pak', s: '4.2 MB' }, { n: mod.name + ' (optional HUD).zip', s: '1.1 MB' }].map((f, i) => (
                <div key={i} className="mdx-card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 14px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <Ic name="FileArchive" size={16} style={{ color: 'var(--text-tertiary)' }} />
                    <div>
                      <div style={{ fontSize: 13, fontFamily: 'var(--font-mono)', color: 'var(--color-text)' }}>{f.n}</div>
                      <div style={{ fontSize: 12, color: 'var(--text-tertiary)' }}>{f.s} · {fmtCount(mod.downloads)} dl</div>
                    </div>
                  </div>
                  <Button variant="primary" icon={<Ic name="Download" size={14} />}>Install</Button>
                </div>
              ))}
            </div>
          )}
          {tab === 'changelog' && (
            <div style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              <p style={{ margin: '0 0 4px', fontWeight: 600, color: 'var(--color-text)' }}>v{mod.version} — {mod.updated}</p>
              <ul style={{ margin: 0, paddingLeft: 18 }}>
                <li>Fixed a crash on multi-pak installs.</li>
                <li>Rebalanced detection timing against the latest patch.</li>
                <li>Updated dependencies.</li>
              </ul>
            </div>
          )}
          {tab === 'deps' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <h2 style={{ margin: 0, fontSize: 14, fontWeight: 600, color: 'var(--color-text)' }}>Required Dependencies</h2>
              <div className="mdx-card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 14px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <Badge variant="accent">Required</Badge>
                  <span style={{ fontSize: 13, color: 'var(--color-text)' }}>ModLoader Core</span>
                </div>
                <Badge variant="success">Installed</Badge>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
