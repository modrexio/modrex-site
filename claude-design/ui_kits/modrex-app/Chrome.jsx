// Top bar + left sidebar — the persistent app chrome.

function TopBar({ gameRunning, onToggleRun, launching }) {
  const { Button } = window.ModrexDesignSystem_708df2;
  return (
    <div style={{ flexShrink: 0, background: 'var(--color-surface)', borderBottom: '1px solid var(--color-border)' }}>
      <div style={{ height: 44, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 16px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 8 }}>
          <span className="modrex-wordmark" style={{ fontSize: 24 }}>MOD<span>REX</span></span>
          <span style={{ fontSize: 12, color: 'var(--text-tertiary)', marginBottom: 4 }}>v0.9.1</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          {gameRunning ? (
            <Button variant="danger" icon={<Ic name="Square" size={14} fill="currentColor" />} onClick={onToggleRun}>
              Stop game
            </Button>
          ) : (
            <>
              <Button variant="secondary" icon={<Ic name="Play" size={14} fill="currentColor" />}>
                Launch without mods
              </Button>
              <Button variant="primary"
                icon={launching ? <Ic name="Loader" size={14} style={{ animation: 'mdx-spin 0.6s linear infinite' }} /> : <Ic name="Play" size={14} fill="currentColor" />}
                onClick={onToggleRun}>
                {launching ? 'Launching…' : 'Launch modded'}
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

const NAV = [
  { id: 'browse', label: 'Browse Mods', icon: 'Compass' },
  { id: 'installed', label: 'Installed', icon: 'Package' },
  { id: 'settings', label: 'Settings', icon: 'Settings' },
];

function Sidebar({ view, onView }) {
  const [collapsed, setCollapsed] = React.useState(false);
  return (
    <aside style={{
      width: collapsed ? 48 : 192, flexShrink: 0, display: 'flex', flexDirection: 'column',
      background: 'var(--color-surface-raised)', borderRight: '1px solid var(--color-border)',
      transition: 'width 0.2s var(--ease)', overflow: 'hidden',
    }}>
      <nav style={{ display: 'flex', flexDirection: 'column', gap: 4, padding: 8, flex: 1 }}>
        {NAV.map((item) => {
          const active = view === item.id;
          return (
            <button key={item.id} onClick={() => onView(item.id)} title={collapsed ? item.label : undefined}
              className={'app-nav' + (active ? ' is-active' : '')}>
              <Ic name={item.icon} size={16} />
              {!collapsed && <span style={{ whiteSpace: 'nowrap' }}>{item.label}</span>}
            </button>
          );
        })}
      </nav>
      <div style={{ padding: 8, borderTop: '1px solid var(--color-border)' }}>
        <button onClick={() => setCollapsed((c) => !c)} title={collapsed ? 'Expand' : 'Collapse'}
          className="app-nav app-nav--collapse">
          <Ic name="ChevronLeft" size={16} style={{ transform: collapsed ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s var(--ease)' }} />
          {!collapsed && <span style={{ whiteSpace: 'nowrap' }}>Collapse menu</span>}
        </button>
      </div>
    </aside>
  );
}
