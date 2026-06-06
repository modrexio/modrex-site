import React from 'react'

/**
 * Modrex primary button. A small, dense, color-first control.
 * Variants mirror the app: accent primary, surface secondary,
 * ghost, soft-accent, and a burnt-red danger.
 */
export function Button({
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
    const classes = [
        'mdx-btn',
        `mdx-btn--${variant}`,
        size === 'md' ? 'mdx-btn--md' : null,
        className,
    ]
        .filter(Boolean)
        .join(' ')

    return (
        <button className={classes} disabled={disabled || loading} {...rest}>
            {loading ? <Spinner size={size === 'md' ? 16 : 14} /> : icon}
            {children}
            {iconRight}
        </button>
    )
}

function Spinner({ size = 14 }) {
    return (
        <span
            aria-hidden="true"
            style={{
                width: size,
                height: size,
                borderRadius: '9999px',
                border: '2px solid currentColor',
                borderTopColor: 'transparent',
                display: 'inline-block',
                animation: 'mdx-spin 0.6s linear infinite',
            }}
        />
    )
}
