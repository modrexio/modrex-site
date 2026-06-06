import React from 'react'

/**
 * Surface container — the raised, hairline-bordered box everything
 * sits in (mod cards, settings wells, list rows). No shadow; the
 * 1px border on a raised surface does the work.
 */
export function Card({ padding = true, hover = false, children, className = '', style, ...rest }) {
    const classes = ['mdx-card', className].filter(Boolean).join(' ')
    return (
        <div
            className={classes}
            style={{
                padding: padding ? 'var(--space-4)' : 0,
                transition: hover ? 'var(--transition-colors)' : undefined,
                ...style,
            }}
            {...rest}
        >
            {children}
        </div>
    )
}
