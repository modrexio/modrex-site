/* @ds-bundle: {"format":3,"namespace":"ModrexDesignSystem_708df2","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Toggle","sourcePath":"components/core/Toggle.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"Banner","sourcePath":"components/feedback/Banner.jsx"},{"name":"Modal","sourcePath":"components/feedback/Modal.jsx"},{"name":"ProgressBar","sourcePath":"components/feedback/ProgressBar.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"83d0feb2df5a","components/core/Button.jsx":"4f1ff2f348d0","components/core/IconButton.jsx":"8db712b40061","components/core/Toggle.jsx":"28e1490b28c8","components/display/Card.jsx":"b9b853a1c04b","components/feedback/Banner.jsx":"e810dbbad591","components/feedback/Modal.jsx":"fd9526c2c39d","components/feedback/ProgressBar.jsx":"97227c620508","components/forms/Input.jsx":"399a6b41d3c0","components/forms/Select.jsx":"380a95465b0b","ui_kits/modrex-app/App.jsx":"dce1866091df","ui_kits/modrex-app/BrowseScreen.jsx":"12c337b570bf","ui_kits/modrex-app/Chrome.jsx":"134a3a92a815","ui_kits/modrex-app/DetailScreen.jsx":"a90dbfc61df4","ui_kits/modrex-app/ModCard.jsx":"ee0fbcd30e34","ui_kits/modrex-app/SettingsScreen.jsx":"583bf93a61d9","ui_kits/modrex-app/data.js":"dc956488d6cb","ui_kits/modrex-app/icons.jsx":"0f09d7a8ded6"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ModrexDesignSystem_708df2 = window.ModrexDesignSystem_708df2 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
/**
 * Small status pill. Neutral by default; semantic variants carry
 * the app's state colors (warning "File missing", success
 * "Installed", danger errors, accent "Required").
 */
function Badge({
  variant = 'neutral',
  icon = null,
  children,
  className = ''
}) {
  const classes = ['mdx-badge', `mdx-badge--${variant}`, className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", {
    className: classes
  }, icon, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Modrex primary button. A small, dense, color-first control.
 * Variants mirror the app: accent primary, surface secondary,
 * ghost, soft-accent, and a burnt-red danger.
 */
function Button({
  variant = 'secondary',
  size = 'sm',
  icon = null,
  iconRight = null,
  loading = false,
  disabled = false,
  children,
  className = '',
  ...rest
}) {
  const classes = ['mdx-btn', `mdx-btn--${variant}`, size === 'md' ? 'mdx-btn--md' : null, className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("button", _extends({
    className: classes,
    disabled: disabled || loading
  }, rest), loading ? /*#__PURE__*/React.createElement(Spinner, {
    size: size === 'md' ? 16 : 14
  }) : icon, children, iconRight);
}
function Spinner({
  size = 14
}) {
  return /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: size,
      height: size,
      borderRadius: '9999px',
      border: '2px solid currentColor',
      borderTopColor: 'transparent',
      display: 'inline-block',
      animation: 'mdx-spin 0.6s linear infinite'
    }
  });
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Square, icon-only button. Used all over the app's chrome:
 * refresh, open-folder, dismiss, grid/list toggles, delete.
 */
function IconButton({
  variant = 'ghost',
  disabled = false,
  children,
  className = '',
  ...rest
}) {
  const classes = ['mdx-icon-btn', `mdx-icon-btn--${variant}`, className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("button", _extends({
    className: classes,
    disabled: disabled
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Toggle.jsx
try { (() => {
/**
 * On/off switch — the exact pill toggle used for enabling and
 * disabling installed mods. Accent track when on, grey when off.
 */
function Toggle({
  checked,
  onChange,
  disabled = false,
  title
}) {
  return /*#__PURE__*/React.createElement("button", {
    role: "switch",
    "aria-checked": checked,
    disabled: disabled,
    title: title,
    className: "mdx-toggle",
    onClick: () => onChange && onChange(!checked)
  }, /*#__PURE__*/React.createElement("span", {
    className: "mdx-toggle__knob"
  }));
}
Object.assign(__ds_scope, { Toggle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Toggle.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Surface container — the raised, hairline-bordered box everything
 * sits in (mod cards, settings wells, list rows). No shadow; the
 * 1px border on a raised surface does the work.
 */
function Card({
  padding = true,
  hover = false,
  children,
  className = '',
  style,
  ...rest
}) {
  const classes = ['mdx-card', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classes,
    style: {
      padding: padding ? 'var(--space-4)' : 0,
      transition: hover ? 'var(--transition-colors)' : undefined,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Banner.jsx
try { (() => {
/**
 * Inline notification bar that spans the top of a view. Mirrors the
 * app's launch-error (danger), mods-hidden (warning), and
 * updates-available (info/accent) strips.
 */
function Banner({
  variant = 'info',
  icon = null,
  children,
  action = null
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `mdx-banner mdx-banner--${variant}`
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8
    }
  }, icon, children), action && /*#__PURE__*/React.createElement("span", {
    style: {
      flexShrink: 0
    }
  }, action));
}
Object.assign(__ds_scope, { Banner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Banner.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Modal.jsx
try { (() => {
/**
 * Centered dialog over a dark scrim. Header (title + close),
 * scrollable body, and an optional footer for actions. Click the
 * scrim to dismiss. Mirrors the app's update-notes / warning dialogs.
 */
function Modal({
  open,
  onClose,
  title,
  children,
  footer = null,
  width
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "mdx-modal__scrim",
    onClick: e => e.target === e.currentTarget && onClose && onClose()
  }, /*#__PURE__*/React.createElement("div", {
    className: "mdx-modal",
    style: width ? {
      maxWidth: width
    } : undefined
  }, (title || onClose) && /*#__PURE__*/React.createElement("div", {
    className: "mdx-modal__header"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "mdx-modal__title"
  }, title), onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "mdx-icon-btn",
    onClick: onClose,
    "aria-label": "Close"
  }, /*#__PURE__*/React.createElement(CloseIcon, null))), /*#__PURE__*/React.createElement("div", {
    className: "mdx-modal__body"
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    className: "mdx-modal__footer"
  }, footer)));
}
function CloseIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18M6 6l12 12"
  }));
}
Object.assign(__ds_scope, { Modal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Modal.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ProgressBar.jsx
try { (() => {
/**
 * Thin 2px progress bar — the app's download/update indicator.
 * Pass a 0–100 percent, or omit it for an indeterminate pulse.
 */
function ProgressBar({
  percent = null
}) {
  const indeterminate = percent === null;
  return /*#__PURE__*/React.createElement("div", {
    className: "mdx-progress"
  }, /*#__PURE__*/React.createElement("div", {
    className: 'mdx-progress__fill' + (indeterminate ? ' mdx-progress__fill--indeterminate' : ''),
    style: indeterminate ? undefined : {
      width: `${Math.max(0, Math.min(100, percent))}%`
    }
  }));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Text input. Optional leading icon (e.g. a search glass) and a
 * clear button when there's a value. Focus ring is the accent
 * border, matching the app's search and settings fields.
 */
function Input({
  value,
  onChange,
  onClear,
  placeholder,
  icon = null,
  clearable = false,
  mono = false,
  disabled = false,
  type = 'text',
  className = '',
  ...rest
}) {
  const showClear = clearable && !!value;
  const inputClasses = ['mdx-input', icon ? 'mdx-input--has-icon' : null, showClear ? 'mdx-input--clearable' : null, mono ? 'mdx-input--mono' : null, className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", {
    className: "mdx-input-wrap"
  }, icon && /*#__PURE__*/React.createElement("span", {
    className: "mdx-input__icon"
  }, icon), /*#__PURE__*/React.createElement("input", _extends({
    type: type,
    className: inputClasses,
    value: value,
    placeholder: placeholder,
    disabled: disabled,
    onChange: e => onChange && onChange(e.target.value)
  }, rest)), showClear && /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "mdx-input__clear",
    onClick: () => onClear ? onClear() : onChange && onChange(''),
    "aria-label": "Clear"
  }, /*#__PURE__*/React.createElement(ClearIcon, null)));
}
function ClearIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18M6 6l12 12"
  }));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
/**
 * Custom dropdown select — the app's own (not a native <select>).
 * Closes on outside-click, supports an optional icon per option,
 * highlights the selected row in accent.
 */
function Select({
  value,
  onChange,
  options,
  placeholder = 'Select…',
  disabled = false
}) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  const selected = options.find(o => o.value === value);
  React.useEffect(() => {
    function onClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "mdx-select",
    ref: ref
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "mdx-select__trigger",
    disabled: disabled,
    onClick: () => setOpen(o => !o)
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    },
    className: selected ? '' : 'mdx-select__placeholder'
  }, selected?.icon, selected ? selected.label : placeholder), /*#__PURE__*/React.createElement("span", {
    className: 'mdx-select__chevron' + (open ? ' mdx-select__chevron--open' : '')
  }, /*#__PURE__*/React.createElement(ChevronDown, null))), open && /*#__PURE__*/React.createElement("div", {
    className: "mdx-select__menu"
  }, options.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    type: "button",
    className: 'mdx-select__option' + (o.value === value ? ' mdx-select__option--selected' : ''),
    onClick: () => {
      onChange && onChange(o.value);
      setOpen(false);
    }
  }, o.icon, o.label))));
}
function ChevronDown() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m6 9 6 6 6-6"
  }));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// ui_kits/modrex-app/App.jsx
try { (() => {
// App shell — wires chrome + views together with simple view state.

function App() {
  const {
    Banner,
    Button
  } = window.ModrexDesignSystem_708df2;
  const {
    MODS
  } = window.MODREX_DATA;
  const [view, setView] = React.useState('browse');
  const [detailId, setDetailId] = React.useState(null);
  const [gameRunning, setGameRunning] = React.useState(false);
  const [launching, setLaunching] = React.useState(false);
  const [showUpdates, setShowUpdates] = React.useState(true);
  function openDetail(id) {
    setDetailId(id);
  }
  function closeDetail() {
    setDetailId(null);
  }
  function toggleRun() {
    if (gameRunning) {
      setGameRunning(false);
      return;
    }
    setLaunching(true);
    setTimeout(() => {
      setLaunching(false);
      setGameRunning(true);
    }, 1400);
  }
  const detailMod = detailId != null ? MODS.find(m => m.id === detailId) : null;
  const updatable = MODS.filter(m => m.update).length;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      background: 'var(--color-surface)',
      color: 'var(--color-text)'
    }
  }, /*#__PURE__*/React.createElement(TopBar, {
    gameRunning: gameRunning,
    launching: launching,
    onToggleRun: toggleRun
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flex: 1,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(Sidebar, {
    view: detailMod ? 'browse' : view,
    onView: v => {
      setView(v);
      closeDetail();
    }
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      overflow: 'hidden'
    }
  }, detailMod ? /*#__PURE__*/React.createElement(DetailScreen, {
    mod: detailMod,
    onBack: closeDetail
  }) : view === 'browse' ? /*#__PURE__*/React.createElement(BrowseScreen, {
    onOpen: openDetail
  }) : view === 'installed' ? /*#__PURE__*/React.createElement(InstalledView, {
    onOpen: openDetail,
    updatable: updatable,
    showUpdates: showUpdates,
    onReview: () => setShowUpdates(false)
  }) : /*#__PURE__*/React.createElement(SettingsScreen, null))));
}

// Installed view reuses the grid with an updates banner at the top.
function InstalledView({
  onOpen,
  updatable,
  showUpdates,
  onReview
}) {
  const {
    Button
  } = window.ModrexDesignSystem_708df2;
  const {
    MODS
  } = window.MODREX_DATA;
  const [mode, setMode] = React.useState('grid');
  const installed = MODS.filter(m => m.installed);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 24px',
      borderBottom: '1px solid var(--color-border)',
      flexShrink: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: 18,
      fontWeight: 600,
      color: 'var(--color-text)'
    }
  }, "Installed Mods"), /*#__PURE__*/React.createElement("button", {
    className: "mdx-icon-btn mdx-icon-btn--solid",
    title: "Open mods folder"
  }, /*#__PURE__*/React.createElement(Ic, {
    name: "FolderOpen",
    size: 14
  })), /*#__PURE__*/React.createElement("button", {
    className: "mdx-icon-btn mdx-icon-btn--solid",
    title: "Refresh"
  }, /*#__PURE__*/React.createElement(Ic, {
    name: "RefreshCw",
    size: 14
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--text-tertiary)'
    }
  }, installed.length, " mods"), /*#__PURE__*/React.createElement("button", {
    className: "mdx-btn mdx-btn--secondary",
    style: {
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Ic, {
    name: "FolderPlus",
    size: 14
  }), " New Folder"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 2,
      background: 'var(--color-surface-hover)',
      borderRadius: 'var(--radius-sm)',
      padding: 2
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setMode('grid'),
    className: "mdx-icon-btn",
    style: {
      background: mode === 'grid' ? 'var(--color-surface-active)' : 'transparent',
      color: mode === 'grid' ? 'var(--color-text)' : 'var(--text-tertiary)'
    }
  }, /*#__PURE__*/React.createElement(Ic, {
    name: "LayoutGrid",
    size: 14
  })), /*#__PURE__*/React.createElement("button", {
    onClick: () => setMode('list'),
    className: "mdx-icon-btn",
    style: {
      background: mode === 'list' ? 'var(--color-surface-active)' : 'transparent',
      color: mode === 'list' ? 'var(--color-text)' : 'var(--text-tertiary)'
    }
  }, /*#__PURE__*/React.createElement(Ic, {
    name: "List",
    size: 14
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '16px 24px',
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, updatable > 0 && showUpdates && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '12px 16px',
      borderRadius: 'var(--radius-lg)',
      background: 'var(--accent-tint-10)',
      border: '1px solid var(--accent-tint-30)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 500,
      color: 'var(--color-accent)'
    }
  }, updatable, " mod can be updated"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: onReview
  }, "Review updates")), mode === 'grid' ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
      gap: 16
    }
  }, installed.map(m => /*#__PURE__*/React.createElement(ModCard, {
    key: m.id,
    mod: m,
    onOpen: () => onOpen(m.id)
  }))) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, installed.map(m => /*#__PURE__*/React.createElement(ListRow, {
    key: m.id,
    mod: m,
    onOpen: () => onOpen(m.id)
  })))));
}
function ListRow({
  mod,
  onOpen
}) {
  const {
    Toggle,
    IconButton
  } = window.ModrexDesignSystem_708df2;
  const [enabled, setEnabled] = React.useState(mod.enabled ?? true);
  return /*#__PURE__*/React.createElement("div", {
    className: "mdx-card",
    style: {
      display: 'flex',
      alignItems: 'stretch',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: onOpen,
    style: {
      width: 112,
      background: mod.thumb,
      cursor: 'pointer',
      filter: enabled ? 'none' : 'grayscale(1)'
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: onOpen,
    style: {
      flex: 1,
      minWidth: 0,
      textAlign: 'left',
      padding: '14px 20px',
      background: 'transparent',
      border: 'none'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14,
      fontWeight: 700,
      color: 'var(--color-text)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, mod.name), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '2px 0 0',
      fontSize: 12,
      color: 'var(--text-secondary)'
    }
  }, "By ", mod.author), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '4px 0 0',
      fontSize: 12,
      color: 'var(--text-tertiary)'
    }
  }, "v", mod.version)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '0 16px'
    }
  }, mod.update && /*#__PURE__*/React.createElement("span", {
    className: "mdx-badge mdx-badge--accent"
  }, "Update"), /*#__PURE__*/React.createElement(Toggle, {
    checked: enabled,
    onChange: setEnabled
  }), /*#__PURE__*/React.createElement(IconButton, {
    variant: "danger",
    title: "Remove"
  }, /*#__PURE__*/React.createElement(Ic, {
    name: "Trash2",
    size: 16
  }))));
}
window.mountApp = function (el) {
  ReactDOM.createRoot(el).render(/*#__PURE__*/React.createElement(App, null));
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/modrex-app/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/modrex-app/BrowseScreen.jsx
try { (() => {
// Browse screen — search + filters + responsive mod grid + pagination.

function BrowseScreen({
  onOpen
}) {
  const {
    Input,
    Select
  } = window.ModrexDesignSystem_708df2;
  const {
    MODS,
    CATEGORIES,
    SORT
  } = window.MODREX_DATA;
  const [query, setQuery] = React.useState('');
  const [cat, setCat] = React.useState('');
  const [sort, setSort] = React.useState('bumped_at');
  const [page, setPage] = React.useState(1);
  let mods = MODS.filter(m => (!query || m.name.toLowerCase().includes(query.toLowerCase()) || m.author.toLowerCase().includes(query.toLowerCase())) && (!cat || m.cat === cat));
  if (sort === 'downloads') mods = [...mods].sort((a, b) => b.downloads - a.downloads);else if (sort === 'likes') mods = [...mods].sort((a, b) => b.likes - a.likes);else if (sort === 'name') mods = [...mods].sort((a, b) => a.name.localeCompare(b.name));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 24px',
      borderBottom: '1px solid var(--color-border)',
      flexShrink: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: 18,
      fontWeight: 600,
      color: 'var(--color-text)'
    }
  }, "Browse Mods"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Input, {
    value: query,
    onChange: v => {
      setQuery(v);
      setPage(1);
    },
    placeholder: "Search mods\u2026",
    icon: /*#__PURE__*/React.createElement(Ic, {
      name: "Search",
      size: 14
    }),
    clearable: true
  })), /*#__PURE__*/React.createElement(Select, {
    value: cat,
    onChange: v => {
      setCat(v);
      setPage(1);
    },
    placeholder: "All categories",
    options: CATEGORIES
  }), /*#__PURE__*/React.createElement(Select, {
    value: sort,
    onChange: setSort,
    options: SORT
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '16px 24px'
    }
  }, mods.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      color: 'var(--text-tertiary)',
      fontSize: 14
    }
  }, "No mods found") : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
      gap: 16
    }
  }, mods.map(m => /*#__PURE__*/React.createElement(ModCard, {
    key: m.id,
    mod: m,
    onOpen: () => onOpen(m.id)
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 24px',
      borderTop: '1px solid var(--color-border)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--text-tertiary)'
    }
  }, mods.length, " mods"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4
    }
  }, [1, 2, 3, '…', 12].map((p, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    onClick: () => typeof p === 'number' && setPage(p),
    style: {
      fontSize: 12,
      padding: '4px 12px',
      borderRadius: 'var(--radius-sm)',
      border: 'none',
      background: p === page ? 'var(--color-accent)' : 'var(--color-surface-hover)',
      color: p === page ? '#fff' : 'var(--color-text)',
      cursor: p === '…' ? 'default' : 'pointer'
    }
  }, p)))));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/modrex-app/BrowseScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/modrex-app/Chrome.jsx
try { (() => {
// Top bar + left sidebar — the persistent app chrome.

function TopBar({
  gameRunning,
  onToggleRun,
  launching
}) {
  const {
    Button
  } = window.ModrexDesignSystem_708df2;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flexShrink: 0,
      background: 'var(--color-surface)',
      borderBottom: '1px solid var(--color-border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 44,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "modrex-wordmark",
    style: {
      fontSize: 24
    }
  }, "MOD", /*#__PURE__*/React.createElement("span", null, "REX")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--text-tertiary)',
      marginBottom: 4
    }
  }, "v0.9.1")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, gameRunning ? /*#__PURE__*/React.createElement(Button, {
    variant: "danger",
    icon: /*#__PURE__*/React.createElement(Ic, {
      name: "Square",
      size: 14,
      fill: "currentColor"
    }),
    onClick: onToggleRun
  }, "Stop game") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    icon: /*#__PURE__*/React.createElement(Ic, {
      name: "Play",
      size: 14,
      fill: "currentColor"
    })
  }, "Launch without mods"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    icon: launching ? /*#__PURE__*/React.createElement(Ic, {
      name: "Loader",
      size: 14,
      style: {
        animation: 'mdx-spin 0.6s linear infinite'
      }
    }) : /*#__PURE__*/React.createElement(Ic, {
      name: "Play",
      size: 14,
      fill: "currentColor"
    }),
    onClick: onToggleRun
  }, launching ? 'Launching…' : 'Launch modded')))));
}
const NAV = [{
  id: 'browse',
  label: 'Browse Mods',
  icon: 'Compass'
}, {
  id: 'installed',
  label: 'Installed',
  icon: 'Package'
}, {
  id: 'settings',
  label: 'Settings',
  icon: 'Settings'
}];
function Sidebar({
  view,
  onView
}) {
  const [collapsed, setCollapsed] = React.useState(false);
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: collapsed ? 48 : 192,
      flexShrink: 0,
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--color-surface-raised)',
      borderRight: '1px solid var(--color-border)',
      transition: 'width 0.2s var(--ease)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      padding: 8,
      flex: 1
    }
  }, NAV.map(item => {
    const active = view === item.id;
    return /*#__PURE__*/React.createElement("button", {
      key: item.id,
      onClick: () => onView(item.id),
      title: collapsed ? item.label : undefined,
      className: 'app-nav' + (active ? ' is-active' : '')
    }, /*#__PURE__*/React.createElement(Ic, {
      name: item.icon,
      size: 16
    }), !collapsed && /*#__PURE__*/React.createElement("span", {
      style: {
        whiteSpace: 'nowrap'
      }
    }, item.label));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 8,
      borderTop: '1px solid var(--color-border)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setCollapsed(c => !c),
    title: collapsed ? 'Expand' : 'Collapse',
    className: "app-nav app-nav--collapse"
  }, /*#__PURE__*/React.createElement(Ic, {
    name: "ChevronLeft",
    size: 16,
    style: {
      transform: collapsed ? 'rotate(180deg)' : 'none',
      transition: 'transform 0.2s var(--ease)'
    }
  }), !collapsed && /*#__PURE__*/React.createElement("span", {
    style: {
      whiteSpace: 'nowrap'
    }
  }, "Collapse menu"))));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/modrex-app/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/modrex-app/DetailScreen.jsx
try { (() => {
// Mod detail screen — sticky action header, banner, stats, tabs, description.

function Stat({
  value,
  label
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 600,
      color: 'var(--color-text)'
    }
  }, value), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--text-tertiary)'
    }
  }, label));
}
const DETAIL_TABS = [{
  id: 'description',
  label: 'Description'
}, {
  id: 'images',
  label: 'Images (6)'
}, {
  id: 'downloads',
  label: 'Downloads (2)'
}, {
  id: 'changelog',
  label: 'Changelog'
}, {
  id: 'deps',
  label: 'Dependencies & Instructions'
}];
function DetailScreen({
  mod,
  onBack
}) {
  const {
    Toggle,
    IconButton,
    Button,
    Badge
  } = window.ModrexDesignSystem_708df2;
  const [tab, setTab] = React.useState('description');
  const [enabled, setEnabled] = React.useState(mod.enabled ?? true);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '10px 24px',
      borderBottom: '1px solid var(--color-border)',
      flexShrink: 0,
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      fontSize: 14,
      border: 'none',
      background: 'transparent',
      color: 'var(--text-secondary)',
      transition: 'var(--transition-colors)'
    },
    onMouseEnter: e => e.currentTarget.style.color = 'var(--color-text)',
    onMouseLeave: e => e.currentTarget.style.color = 'var(--text-secondary)'
  }, /*#__PURE__*/React.createElement(Ic, {
    name: "ArrowLeft",
    size: 16
  }), " Back"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--text-tertiary)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, mod.name), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, mod.installed ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Toggle, {
    checked: enabled,
    onChange: setEnabled
  }), /*#__PURE__*/React.createElement(IconButton, {
    variant: "danger",
    title: "Remove"
  }, /*#__PURE__*/React.createElement(Ic, {
    name: "Trash2",
    size: 14
  }))) : /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "md",
    icon: /*#__PURE__*/React.createElement(Ic, {
      name: "Download",
      size: 14
    })
  }, "Install"))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 192,
      background: mod.thumb
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 24px',
      borderBottom: '1px solid var(--color-border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: 22,
      fontWeight: 700,
      lineHeight: 1.15,
      color: 'var(--color-text)'
    }
  }, mod.name), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '4px 0 0',
      fontSize: 14,
      color: 'var(--text-secondary)'
    }
  }, "by ", mod.author, " \xB7 ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-accent-bright)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 2
    }
  }, "Source ", /*#__PURE__*/React.createElement(Ic, {
    name: "ExternalLink",
    size: 12,
    style: {
      display: 'inline'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 6,
      marginTop: 12
    }
  }, mod.tags.map(tg => /*#__PURE__*/React.createElement(Badge, {
    key: tg,
    variant: "neutral"
  }, tg)))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--color-text)'
    }
  }, "v", mod.version))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 20,
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    value: mod.downloads.toLocaleString(),
    label: "Downloads"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 28,
      background: 'var(--color-border)'
    }
  }), /*#__PURE__*/React.createElement(Stat, {
    value: mod.likes.toLocaleString(),
    label: "Likes"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 28,
      background: 'var(--color-border)'
    }
  }), /*#__PURE__*/React.createElement(Stat, {
    value: mod.views.toLocaleString(),
    label: "Views"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      textAlign: 'right',
      fontSize: 12,
      color: 'var(--text-tertiary)'
    }
  }, /*#__PURE__*/React.createElement("div", null, "Published ", mod.published), /*#__PURE__*/React.createElement("div", null, "Updated ", mod.updatedFull)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      borderBottom: '1px solid var(--color-border)',
      padding: '0 24px'
    }
  }, DETAIL_TABS.map(tb => {
    const active = tab === tb.id;
    return /*#__PURE__*/React.createElement("button", {
      key: tb.id,
      onClick: () => setTab(tb.id),
      style: {
        fontSize: 12,
        padding: '12px 16px',
        border: 'none',
        borderBottom: '2px solid ' + (active ? 'var(--color-accent)' : 'transparent'),
        background: 'transparent',
        color: active ? 'var(--color-accent)' : 'var(--text-tertiary)',
        transition: 'var(--transition-colors)',
        whiteSpace: 'nowrap'
      }
    }, tb.label);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 24px',
      maxWidth: 760
    }
  }, tab === 'description' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14,
      lineHeight: 1.6,
      color: 'var(--text-secondary)'
    }
  }, mod.desc), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 0 8px',
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--color-text)'
    }
  }, "License"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14,
      color: 'var(--text-secondary)'
    }
  }, mod.license))), tab === 'images' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 12
    }
  }, [0, 1, 2, 3, 4, 5].map(i => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      height: 120,
      borderRadius: 'var(--radius-md)',
      background: mod.thumb,
      opacity: 0.7 + i % 3 * 0.1,
      border: '1px solid var(--color-border)'
    }
  }))), tab === 'downloads' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, [{
    n: mod.name + '.pak',
    s: '4.2 MB'
  }, {
    n: mod.name + ' (optional HUD).zip',
    s: '1.1 MB'
  }].map((f, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "mdx-card",
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '12px 14px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Ic, {
    name: "FileArchive",
    size: 16,
    style: {
      color: 'var(--text-tertiary)'
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontFamily: 'var(--font-mono)',
      color: 'var(--color-text)'
    }
  }, f.n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-tertiary)'
    }
  }, f.s, " \xB7 ", fmtCount(mod.downloads), " dl"))), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    icon: /*#__PURE__*/React.createElement(Ic, {
      name: "Download",
      size: 14
    })
  }, "Install")))), tab === 'changelog' && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--text-secondary)',
      lineHeight: 1.6
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 4px',
      fontWeight: 600,
      color: 'var(--color-text)'
    }
  }, "v", mod.version, " \u2014 ", mod.updated), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      paddingLeft: 18
    }
  }, /*#__PURE__*/React.createElement("li", null, "Fixed a crash on multi-pak installs."), /*#__PURE__*/React.createElement("li", null, "Rebalanced detection timing against the latest patch."), /*#__PURE__*/React.createElement("li", null, "Updated dependencies."))), tab === 'deps' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--color-text)'
    }
  }, "Required Dependencies"), /*#__PURE__*/React.createElement("div", {
    className: "mdx-card",
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '12px 14px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: "accent"
  }, "Required"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--color-text)'
    }
  }, "ModLoader Core")), /*#__PURE__*/React.createElement(Badge, {
    variant: "success"
  }, "Installed"))))));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/modrex-app/DetailScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/modrex-app/ModCard.jsx
try { (() => {
// Mod card — composite built from DS primitives (Toggle, Button, IconButton, Badge).

function fmtCount(n) {
  if (n >= 1e6) return (n / 1e6).toFixed(1) + 'M';
  if (n >= 1e3) return (n / 1e3).toFixed(1) + 'k';
  return String(n);
}
function ModCard({
  mod,
  onOpen
}) {
  const {
    Toggle,
    IconButton,
    Button
  } = window.ModrexDesignSystem_708df2;
  const [enabled, setEnabled] = React.useState(mod.enabled ?? true);
  const installed = mod.installed;
  const grayscale = installed && !enabled;
  return /*#__PURE__*/React.createElement("div", {
    className: "mdx-card",
    style: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: onOpen,
    className: "mc-thumb",
    style: {
      cursor: 'pointer',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 144,
      background: mod.thumb,
      filter: grayscale ? 'grayscale(1)' : 'none',
      transition: 'filter 0.2s var(--ease)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 12px 4px',
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("h3", {
    className: "mc-title",
    style: {
      margin: 0,
      fontSize: 14,
      fontWeight: 600,
      lineHeight: 1.35,
      color: 'var(--color-text)',
      display: '-webkit-box',
      WebkitLineClamp: 2,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden'
    }
  }, mod.name), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 12,
      color: 'var(--text-secondary)'
    }
  }, mod.author), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 12,
      color: 'var(--text-tertiary)',
      lineHeight: 1.4,
      display: '-webkit-box',
      WebkitLineClamp: 2,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden'
    }
  }, mod.short))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px 12px 12px',
      marginTop: 'auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      fontSize: 12,
      color: 'var(--text-tertiary)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement(Ic, {
    name: "Heart",
    size: 12
  }), fmtCount(mod.likes)), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement(Ic, {
    name: "Download",
    size: 12
  }), fmtCount(mod.downloads)), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement(Ic, {
    name: "Clock",
    size: 12
  }), mod.updated)), installed ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Toggle, {
    checked: enabled,
    onChange: setEnabled
  }), /*#__PURE__*/React.createElement(IconButton, {
    variant: "danger",
    title: "Remove"
  }, /*#__PURE__*/React.createElement(Ic, {
    name: "Trash2",
    size: 14
  }))) : /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    icon: /*#__PURE__*/React.createElement(Ic, {
      name: "Download",
      size: 14
    })
  }, "Install")));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/modrex-app/ModCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/modrex-app/SettingsScreen.jsx
try { (() => {
// Settings screen — game path, launcher, updates, logs, launch options.

function SettingsScreen() {
  const {
    Button,
    Select,
    Input
  } = window.ModrexDesignSystem_708df2;
  const [launcher, setLauncher] = React.useState('steam');
  const [args, setArgs] = React.useState('-fileopenlog');
  const [checked, setChecked] = React.useState(false);
  function SettingSection({
    title,
    desc,
    children
  }) {
    return /*#__PURE__*/React.createElement("section", {
      style: {
        maxWidth: 560,
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        marginBottom: 28
      }
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: 0,
        fontSize: 14,
        fontWeight: 600,
        color: 'var(--color-text)'
      }
    }, title), desc && /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 12,
        color: 'var(--text-tertiary)',
        lineHeight: 1.5
      }
    }, desc), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 4
      }
    }, children));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 24px',
      borderBottom: '1px solid var(--color-border)',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: 18,
      fontWeight: 600,
      color: 'var(--color-text)'
    }
  }, "Settings")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '24px'
    }
  }, /*#__PURE__*/React.createElement(SettingSection, {
    title: "Game Path",
    desc: "Path to your PAYDAY 3 installation. Detected automatically from your installed launchers if not set manually."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '12px 16px',
      borderRadius: 'var(--radius-lg)',
      background: 'var(--color-surface-hover)',
      border: '1px solid var(--color-border)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      color: 'var(--text-secondary)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, "C:\\Program Files (x86)\\Steam\\steamapps\\common\\PAYDAY 3"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    icon: /*#__PURE__*/React.createElement(Ic, {
      name: "FolderOpen",
      size: 14
    })
  }, "Browse")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '8px 0 0',
      fontSize: 12,
      color: 'var(--color-success-text)'
    }
  }, "Auto-detected")), /*#__PURE__*/React.createElement(SettingSection, {
    title: "Launcher",
    desc: "How to launch PAYDAY 3. Detected automatically when the game path is set."
  }, /*#__PURE__*/React.createElement(Select, {
    value: launcher,
    onChange: setLauncher,
    options: [{
      value: 'steam',
      label: 'Steam',
      icon: /*#__PURE__*/React.createElement("img", {
        src: "../../assets/icons/steam-white.svg",
        width: "14",
        height: "14",
        alt: ""
      })
    }, {
      value: 'epic',
      label: 'Epic Games',
      icon: /*#__PURE__*/React.createElement("img", {
        src: "../../assets/icons/epicgames-white.svg",
        width: "14",
        height: "14",
        alt: ""
      })
    }, {
      value: 'xbox',
      label: 'Xbox',
      icon: /*#__PURE__*/React.createElement("img", {
        src: "../../assets/icons/xbox-white.svg",
        width: "14",
        height: "14",
        alt: ""
      })
    }]
  })), /*#__PURE__*/React.createElement(SettingSection, {
    title: "Updates"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    icon: /*#__PURE__*/React.createElement(Ic, {
      name: "RefreshCw",
      size: 14,
      style: checked ? {
        animation: 'mdx-spin 0.6s linear infinite'
      } : undefined
    }),
    onClick: () => {
      setChecked(true);
      setTimeout(() => setChecked(false), 1200);
    }
  }, "Check for updates"), checked && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--color-success-text)'
    }
  }, "You're up to date"))), /*#__PURE__*/React.createElement(SettingSection, {
    title: "Logs",
    desc: "If something goes wrong, open the log file and attach it to your bug report."
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    icon: /*#__PURE__*/React.createElement(Ic, {
      name: "ScrollText",
      size: 14
    })
  }, "Open log file")), /*#__PURE__*/React.createElement(SettingSection, {
    title: "Launch Options",
    desc: "Extra arguments passed to PAYDAY 3 on launch. -fileopenlog is recommended for most mods to load correctly."
  }, /*#__PURE__*/React.createElement(Input, {
    value: args,
    onChange: setArgs,
    mono: true,
    placeholder: "-fileopenlog"
  }))));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/modrex-app/SettingsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/modrex-app/data.js
try { (() => {
// Mock data for the Modrex app UI kit — PAYDAY 3 flavored, no real network.
// Thumbnails are deterministic CSS gradients (no real imagery available).

window.MODREX_DATA = function () {
  function grad(a, b, ang) {
    return `linear-gradient(${ang || 135}deg, ${a}, ${b})`;
  }
  const CATEGORIES = [{
    value: '',
    label: 'All categories'
  }, {
    value: 'gameplay',
    label: 'Gameplay'
  }, {
    value: 'ui',
    label: 'UI / HUD'
  }, {
    value: 'audio',
    label: 'Audio'
  }, {
    value: 'visual',
    label: 'Visual'
  }, {
    value: 'tools',
    label: 'Tools'
  }, {
    value: 'maps',
    label: 'Heists & Maps'
  }];
  const SORT = [{
    value: 'bumped_at',
    label: 'Last Updated'
  }, {
    value: 'downloads',
    label: 'Most Downloaded'
  }, {
    value: 'likes',
    label: 'Most Liked'
  }, {
    value: 'published_at',
    label: 'Newest'
  }, {
    value: 'name',
    label: 'Name'
  }];
  const MODS = [{
    id: 1,
    name: 'Civilian Heat Overhaul',
    author: 'ripperoni',
    cat: 'gameplay',
    tags: ['Gameplay', 'Balance'],
    short: 'Smarter civilian panic, alarm timing, and guard sightlines for a tenser stealth game.',
    likes: 3120,
    downloads: 48200,
    views: 91400,
    updated: '2d ago',
    version: '2.4.1',
    thumb: grad('#3a2d1a', '#16110a'),
    desc: 'Reworks the entire civilian AI layer. Civs now react to line-of-sight, hold their hands up longer under threat, and trip alarms with realistic delay. Tuned alongside the base detection curve so loud builds still feel fair.',
    published: 'Jan 14, 2025',
    updatedFull: 'Jun 02, 2026',
    license: 'MIT',
    installed: false
  }, {
    id: 2,
    name: 'No Intro Videos',
    author: 'kludge',
    cat: 'tools',
    tags: ['Tools', 'QoL'],
    short: 'Skip the publisher splash screens and boot straight into the menu.',
    likes: 8800,
    downloads: 152300,
    views: 210500,
    updated: '5h ago',
    version: '1.0.3',
    thumb: grad('#1d2a2e', '#0e1416'),
    desc: 'Removes the startup bink videos. Pure quality-of-life. Drop-in .pak, no dependencies.',
    published: 'Nov 02, 2024',
    updatedFull: 'Jun 05, 2026',
    license: 'Unlicense',
    installed: true,
    enabled: true
  }, {
    id: 3,
    name: 'Tactical HUD Reborn',
    author: 'vesper',
    cat: 'ui',
    tags: ['UI / HUD', 'Visual'],
    short: 'A cleaner, denser heads-up display with readable ammo and objective tracking.',
    likes: 5440,
    downloads: 73900,
    views: 118200,
    updated: '1d ago',
    version: '3.1.0',
    thumb: grad('#2e1a2a', '#140e13'),
    desc: 'Replaces the default HUD with a compact, high-contrast layout. Configurable scale, optional minimal mode, and a reworked objective tracker.',
    published: 'Mar 21, 2025',
    updatedFull: 'Jun 04, 2026',
    license: 'GPL-3.0',
    installed: true,
    enabled: false
  }, {
    id: 4,
    name: 'Heavier Recoil Pack',
    author: 'doomslug',
    cat: 'gameplay',
    tags: ['Gameplay', 'Weapons'],
    short: 'Weightier weapon handling and recoil curves for a more grounded gunfeel.',
    likes: 2010,
    downloads: 31100,
    views: 54300,
    updated: '3d ago',
    version: '1.6.2',
    thumb: grad('#26221a', '#11100b'),
    desc: 'Retunes recoil, sway, and recovery per weapon class. Designed to reward burst discipline without making full-auto useless.',
    published: 'Feb 09, 2025',
    updatedFull: 'Jun 01, 2026',
    license: 'MIT',
    installed: false
  }, {
    id: 5,
    name: 'Ambient Radio Expansion',
    author: 'lo-fi heister',
    cat: 'audio',
    tags: ['Audio'],
    short: 'Adds 40+ licensed-free tracks to in-level radios and the safehouse.',
    likes: 1490,
    downloads: 22700,
    views: 39800,
    updated: '6d ago',
    version: '0.8.0',
    thumb: grad('#1a2620', '#0b1410'),
    desc: 'A curated set of royalty-free tracks wired into the existing radio objects. Toggle stations per-heist.',
    published: 'Apr 30, 2025',
    updatedFull: 'May 30, 2026',
    license: 'CC-BY-4.0',
    installed: false
  }, {
    id: 6,
    name: 'Sharper Shadows & AO',
    author: 'pixelmancer',
    cat: 'visual',
    tags: ['Visual'],
    short: 'Reworked shadow resolution and ambient occlusion presets for crisper scenes.',
    likes: 3960,
    downloads: 60400,
    views: 88900,
    updated: '12h ago',
    version: '2.0.1',
    thumb: grad('#22252e', '#0e1014'),
    desc: 'Adjusts shadow cascades and AO sampling. Includes Performance, Balanced, and Quality presets.',
    published: 'Dec 18, 2024',
    updatedFull: 'Jun 05, 2026',
    license: 'MIT',
    installed: true,
    enabled: true,
    update: true
  }, {
    id: 7,
    name: 'Loadout Quick-Swap',
    author: 'vesper',
    cat: 'tools',
    tags: ['Tools', 'QoL'],
    short: 'Save and hot-swap full loadouts from a single keybind in the lobby.',
    likes: 2780,
    downloads: 41200,
    views: 67100,
    updated: '4d ago',
    version: '1.2.0',
    thumb: grad('#2a2118', '#13100b'),
    desc: 'Stores named loadout presets and lets you cycle them without re-entering the inventory.',
    published: 'May 11, 2025',
    updatedFull: 'Jun 01, 2026',
    license: 'MIT',
    installed: false
  }, {
    id: 8,
    name: 'Touch the Sky — Skybox Pack',
    author: 'pixelmancer',
    cat: 'visual',
    tags: ['Visual', 'Heists & Maps'],
    short: 'Hand-graded skyboxes and time-of-day variants for every base heist.',
    likes: 4320,
    downloads: 55800,
    views: 80200,
    updated: '2d ago',
    version: '1.4.0',
    thumb: grad('#1c2330', '#0d1018'),
    desc: 'Replaces skyboxes with re-graded variants. Optional dusk and overcast versions per map.',
    published: 'Jan 02, 2025',
    updatedFull: 'Jun 03, 2026',
    license: 'CC-BY-4.0',
    installed: false
  }];
  return {
    CATEGORIES,
    SORT,
    MODS
  };
}();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/modrex-app/data.js", error: String((e && e.message) || e) }); }

// ui_kits/modrex-app/icons.jsx
try { (() => {
// Lucide icon helper shared across the kit. Usage: <Ic name="Download" size={14} />
function Ic({
  name,
  size = 16,
  strokeWidth = 2,
  style,
  fill = 'none'
}) {
  const node = window.lucide && window.lucide[name] || [];
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: fill,
    stroke: "currentColor",
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      display: 'block',
      flexShrink: 0,
      ...style
    }
  }, node.map(([tag, attrs], i) => React.createElement(tag, {
    key: i,
    ...attrs
  })));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/modrex-app/icons.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Toggle = __ds_scope.Toggle;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Banner = __ds_scope.Banner;

__ds_ns.Modal = __ds_scope.Modal;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

})();
