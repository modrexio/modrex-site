import React from 'react'

/**
 * Custom dropdown select — the app's own (not a native <select>).
 * Closes on outside-click, supports an optional icon per option,
 * highlights the selected row in accent.
 */
export function Select({
    value,
    onChange,
    options,
    placeholder = 'Select…',
    disabled = false,
}) {
    const [open, setOpen] = React.useState(false)
    const ref = React.useRef(null)
    const selected = options.find((o) => o.value === value)

    React.useEffect(() => {
        function onClickOutside(e) {
            if (ref.current && !ref.current.contains(e.target)) setOpen(false)
        }
        document.addEventListener('mousedown', onClickOutside)
        return () => document.removeEventListener('mousedown', onClickOutside)
    }, [])

    return (
        <div className="mdx-select" ref={ref}>
            <button
                type="button"
                className="mdx-select__trigger"
                disabled={disabled}
                onClick={() => setOpen((o) => !o)}
            >
                <span
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}
                    className={selected ? '' : 'mdx-select__placeholder'}
                >
                    {selected?.icon}
                    {selected ? selected.label : placeholder}
                </span>
                <span
                    className={
                        'mdx-select__chevron' +
                        (open ? ' mdx-select__chevron--open' : '')
                    }
                >
                    <ChevronDown />
                </span>
            </button>
            {open && (
                <div className="mdx-select__menu">
                    {options.map((o) => (
                        <button
                            key={o.value}
                            type="button"
                            className={
                                'mdx-select__option' +
                                (o.value === value
                                    ? ' mdx-select__option--selected'
                                    : '')
                            }
                            onClick={() => {
                                onChange && onChange(o.value)
                                setOpen(false)
                            }}
                        >
                            {o.icon}
                            {o.label}
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}

function ChevronDown() {
    return (
        <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m6 9 6 6 6-6" />
        </svg>
    )
}
