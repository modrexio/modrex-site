import React from 'react'

/**
 * Text input. Optional leading icon (e.g. a search glass) and a
 * clear button when there's a value. Focus ring is the accent
 * border, matching the app's search and settings fields.
 */
export function Input({
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
    const showClear = clearable && !!value
    const inputClasses = [
        'mdx-input',
        icon ? 'mdx-input--has-icon' : null,
        showClear ? 'mdx-input--clearable' : null,
        mono ? 'mdx-input--mono' : null,
        className,
    ]
        .filter(Boolean)
        .join(' ')

    return (
        <div className="mdx-input-wrap">
            {icon && <span className="mdx-input__icon">{icon}</span>}
            <input
                type={type}
                className={inputClasses}
                value={value}
                placeholder={placeholder}
                disabled={disabled}
                onChange={(e) => onChange && onChange(e.target.value)}
                {...rest}
            />
            {showClear && (
                <button
                    type="button"
                    className="mdx-input__clear"
                    onClick={() => (onClear ? onClear() : onChange && onChange(''))}
                    aria-label="Clear"
                >
                    <ClearIcon />
                </button>
            )}
        </div>
    )
}

function ClearIcon() {
    return (
        <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M18 6 6 18M6 6l12 12" />
        </svg>
    )
}
