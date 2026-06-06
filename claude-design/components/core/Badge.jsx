import React from 'react'

/**
 * Small status pill. Neutral by default; semantic variants carry
 * the app's state colors (warning "File missing", success
 * "Installed", danger errors, accent "Required").
 */
export function Badge({ variant = 'neutral', icon = null, children, className = '' }) {
    const classes = ['mdx-badge', `mdx-badge--${variant}`, className]
        .filter(Boolean)
        .join(' ')
    return (
        <span className={classes}>
            {icon}
            {children}
        </span>
    )
}
