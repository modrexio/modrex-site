// Mod card — composite built from DS primitives (Toggle, Button, IconButton, Badge).

function fmtCount(n) {
  if (n >= 1e6) return (n / 1e6).toFixed(1) + 'M';
  if (n >= 1e3) return (n / 1e3).toFixed(1) + 'k';
  return String(n);
}

function ModCard({ mod, onOpen }) {
  const { Toggle, IconButton, Button } = window.ModrexDesignSystem_708df2;
  const [enabled, setEnabled] = React.useState(mod.enabled ?? true);
  const installed = mod.installed;
  const grayscale = installed && !enabled;

  return (
    <div className="mdx-card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div onClick={onOpen} className="mc-thumb" style={{ cursor: 'pointer', position: 'relative' }}>
        <div style={{
          height: 144, background: mod.thumb, filter: grayscale ? 'grayscale(1)' : 'none',
          transition: 'filter 0.2s var(--ease)',
        }} />
        <div style={{ padding: '12px 12px 4px', display: 'flex', flexDirection: 'column', gap: 4 }}>
          <h3 className="mc-title" style={{
            margin: 0, fontSize: 14, fontWeight: 600, lineHeight: 1.35, color: 'var(--color-text)',
            display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden',
          }}>{mod.name}</h3>
          <p style={{ margin: 0, fontSize: 12, color: 'var(--text-secondary)' }}>{mod.author}</p>
          <p style={{
            margin: 0, fontSize: 12, color: 'var(--text-tertiary)', lineHeight: 1.4,
            display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden',
          }}>{mod.short}</p>
        </div>
      </div>

      <div style={{ padding: '8px 12px 12px', marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 12, color: 'var(--text-tertiary)' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><Ic name="Heart" size={12} />{fmtCount(mod.likes)}</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><Ic name="Download" size={12} />{fmtCount(mod.downloads)}</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><Ic name="Clock" size={12} />{mod.updated}</span>
        </div>
        {installed ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <Toggle checked={enabled} onChange={setEnabled} />
            <IconButton variant="danger" title="Remove"><Ic name="Trash2" size={14} /></IconButton>
          </div>
        ) : (
          <Button variant="primary" icon={<Ic name="Download" size={14} />}>Install</Button>
        )}
      </div>
    </div>
  );
}
