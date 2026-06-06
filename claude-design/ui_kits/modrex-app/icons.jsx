// Lucide icon helper shared across the kit. Usage: <Ic name="Download" size={14} />
function Ic({ name, size = 16, strokeWidth = 2, style, fill = 'none' }) {
  const node = (window.lucide && window.lucide[name]) || [];
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={fill}
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ display: 'block', flexShrink: 0, ...style }}
    >
      {node.map(([tag, attrs], i) => React.createElement(tag, { key: i, ...attrs }))}
    </svg>
  );
}
