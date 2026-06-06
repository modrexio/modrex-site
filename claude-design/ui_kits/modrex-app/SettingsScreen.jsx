// Settings screen — game path, launcher, updates, logs, launch options.

function SettingsScreen() {
  const { Button, Select, Input } = window.ModrexDesignSystem_708df2;
  const [launcher, setLauncher] = React.useState('steam');
  const [args, setArgs] = React.useState('-fileopenlog');
  const [checked, setChecked] = React.useState(false);

  function SettingSection({ title, desc, children }) {
    return (
      <section style={{ maxWidth: 560, display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 28 }}>
        <h2 style={{ margin: 0, fontSize: 14, fontWeight: 600, color: 'var(--color-text)' }}>{title}</h2>
        {desc && <p style={{ margin: 0, fontSize: 12, color: 'var(--text-tertiary)', lineHeight: 1.5 }}>{desc}</p>}
        <div style={{ marginTop: 4 }}>{children}</div>
      </section>
    );
  }

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div style={{ padding: '16px 24px', borderBottom: '1px solid var(--color-border)', flexShrink: 0 }}>
        <h1 style={{ margin: 0, fontSize: 18, fontWeight: 600, color: 'var(--color-text)' }}>Settings</h1>
      </div>
      <div style={{ flex: 1, overflowY: 'auto', padding: '24px' }}>
        <SettingSection title="Game Path" desc="Path to your PAYDAY 3 installation. Detected automatically from your installed launchers if not set manually.">
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 16px', borderRadius: 'var(--radius-lg)', background: 'var(--color-surface-hover)', border: '1px solid var(--color-border)' }}>
            <span style={{ flex: 1, fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--text-secondary)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              C:\Program Files (x86)\Steam\steamapps\common\PAYDAY 3
            </span>
            <Button variant="primary" icon={<Ic name="FolderOpen" size={14} />}>Browse</Button>
          </div>
          <p style={{ margin: '8px 0 0', fontSize: 12, color: 'var(--color-success-text)' }}>Auto-detected</p>
        </SettingSection>

        <SettingSection title="Launcher" desc="How to launch PAYDAY 3. Detected automatically when the game path is set.">
          <Select value={launcher} onChange={setLauncher} options={[
            { value: 'steam', label: 'Steam', icon: <img src="../../assets/icons/steam-white.svg" width="14" height="14" alt="" /> },
            { value: 'epic', label: 'Epic Games', icon: <img src="../../assets/icons/epicgames-white.svg" width="14" height="14" alt="" /> },
            { value: 'xbox', label: 'Xbox', icon: <img src="../../assets/icons/xbox-white.svg" width="14" height="14" alt="" /> },
          ]} />
        </SettingSection>

        <SettingSection title="Updates">
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <Button variant="secondary" icon={<Ic name="RefreshCw" size={14} style={checked ? { animation: 'mdx-spin 0.6s linear infinite' } : undefined} />}
              onClick={() => { setChecked(true); setTimeout(() => setChecked(false), 1200); }}>
              Check for updates
            </Button>
            {checked && <span style={{ fontSize: 12, color: 'var(--color-success-text)' }}>You're up to date</span>}
          </div>
        </SettingSection>

        <SettingSection title="Logs" desc="If something goes wrong, open the log file and attach it to your bug report.">
          <Button variant="secondary" icon={<Ic name="ScrollText" size={14} />}>Open log file</Button>
        </SettingSection>

        <SettingSection title="Launch Options" desc="Extra arguments passed to PAYDAY 3 on launch. -fileopenlog is recommended for most mods to load correctly.">
          <Input value={args} onChange={setArgs} mono placeholder="-fileopenlog" />
        </SettingSection>
      </div>
    </div>
  );
}
