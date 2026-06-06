// App shell — wires chrome + views together with simple view state.

function App() {
  const { Banner, Button } = window.ModrexDesignSystem_708df2;
  const { MODS } = window.MODREX_DATA;
  const [view, setView] = React.useState('browse');
  const [detailId, setDetailId] = React.useState(null);
  const [gameRunning, setGameRunning] = React.useState(false);
  const [launching, setLaunching] = React.useState(false);
  const [showUpdates, setShowUpdates] = React.useState(true);

  function openDetail(id) { setDetailId(id); }
  function closeDetail() { setDetailId(null); }

  function toggleRun() {
    if (gameRunning) { setGameRunning(false); return; }
    setLaunching(true);
    setTimeout(() => { setLaunching(false); setGameRunning(true); }, 1400);
  }

  const detailMod = detailId != null ? MODS.find((m) => m.id === detailId) : null;
  const updatable = MODS.filter((m) => m.update).length;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: 'var(--color-surface)', color: 'var(--color-text)' }}>
      <TopBar gameRunning={gameRunning} launching={launching} onToggleRun={toggleRun} />
      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        <Sidebar view={detailMod ? 'browse' : view} onView={(v) => { setView(v); closeDetail(); }} />
        <main style={{ flex: 1, overflow: 'hidden' }}>
          {detailMod ? (
            <DetailScreen mod={detailMod} onBack={closeDetail} />
          ) : view === 'browse' ? (
            <BrowseScreen onOpen={openDetail} />
          ) : view === 'installed' ? (
            <InstalledView onOpen={openDetail} updatable={updatable} showUpdates={showUpdates} onReview={() => setShowUpdates(false)} />
          ) : (
            <SettingsScreen />
          )}
        </main>
      </div>
    </div>
  );
}

// Installed view reuses the grid with an updates banner at the top.
function InstalledView({ onOpen, updatable, showUpdates, onReview }) {
  const { Button } = window.ModrexDesignSystem_708df2;
  const { MODS } = window.MODREX_DATA;
  const [mode, setMode] = React.useState('grid');
  const installed = MODS.filter((m) => m.installed);

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div style={{ padding: '16px 24px', borderBottom: '1px solid var(--color-border)', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <h1 style={{ margin: 0, fontSize: 18, fontWeight: 600, color: 'var(--color-text)' }}>Installed Mods</h1>
          <button className="mdx-icon-btn mdx-icon-btn--solid" title="Open mods folder"><Ic name="FolderOpen" size={14} /></button>
          <button className="mdx-icon-btn mdx-icon-btn--solid" title="Refresh"><Ic name="RefreshCw" size={14} /></button>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ fontSize: 12, color: 'var(--text-tertiary)' }}>{installed.length} mods</span>
          <button className="mdx-btn mdx-btn--secondary" style={{ gap: 6 }}><Ic name="FolderPlus" size={14} /> New Folder</button>
          <div style={{ display: 'flex', gap: 2, background: 'var(--color-surface-hover)', borderRadius: 'var(--radius-sm)', padding: 2 }}>
            <button onClick={() => setMode('grid')} className="mdx-icon-btn" style={{ background: mode === 'grid' ? 'var(--color-surface-active)' : 'transparent', color: mode === 'grid' ? 'var(--color-text)' : 'var(--text-tertiary)' }}><Ic name="LayoutGrid" size={14} /></button>
            <button onClick={() => setMode('list')} className="mdx-icon-btn" style={{ background: mode === 'list' ? 'var(--color-surface-active)' : 'transparent', color: mode === 'list' ? 'var(--color-text)' : 'var(--text-tertiary)' }}><Ic name="List" size={14} /></button>
          </div>
        </div>
      </div>
      <div style={{ flex: 1, overflowY: 'auto', padding: '16px 24px', display: 'flex', flexDirection: 'column', gap: 16 }}>
        {updatable > 0 && showUpdates && (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px', borderRadius: 'var(--radius-lg)', background: 'var(--accent-tint-10)', border: '1px solid var(--accent-tint-30)' }}>
            <span style={{ fontSize: 14, fontWeight: 500, color: 'var(--color-accent)' }}>{updatable} mod can be updated</span>
            <Button variant="primary" onClick={onReview}>Review updates</Button>
          </div>
        )}
        {mode === 'grid' ? (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 16 }}>
            {installed.map((m) => <ModCard key={m.id} mod={m} onOpen={() => onOpen(m.id)} />)}
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {installed.map((m) => <ListRow key={m.id} mod={m} onOpen={() => onOpen(m.id)} />)}
          </div>
        )}
      </div>
    </div>
  );
}

function ListRow({ mod, onOpen }) {
  const { Toggle, IconButton } = window.ModrexDesignSystem_708df2;
  const [enabled, setEnabled] = React.useState(mod.enabled ?? true);
  return (
    <div className="mdx-card" style={{ display: 'flex', alignItems: 'stretch', overflow: 'hidden' }}>
      <div onClick={onOpen} style={{ width: 112, background: mod.thumb, cursor: 'pointer', filter: enabled ? 'none' : 'grayscale(1)' }} />
      <button onClick={onOpen} style={{ flex: 1, minWidth: 0, textAlign: 'left', padding: '14px 20px', background: 'transparent', border: 'none' }}>
        <p style={{ margin: 0, fontSize: 14, fontWeight: 700, color: 'var(--color-text)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{mod.name}</p>
        <p style={{ margin: '2px 0 0', fontSize: 12, color: 'var(--text-secondary)' }}>By {mod.author}</p>
        <p style={{ margin: '4px 0 0', fontSize: 12, color: 'var(--text-tertiary)' }}>v{mod.version}</p>
      </button>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '0 16px' }}>
        {mod.update && <span className="mdx-badge mdx-badge--accent">Update</span>}
        <Toggle checked={enabled} onChange={setEnabled} />
        <IconButton variant="danger" title="Remove"><Ic name="Trash2" size={16} /></IconButton>
      </div>
    </div>
  );
}

window.mountApp = function (el) {
  ReactDOM.createRoot(el).render(<App />);
};
