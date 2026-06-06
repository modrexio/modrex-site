import React from 'react'

/**
 * Inline notification bar that spans the top of a view. Mirrors the
 * app's launch-error (danger), mods-hidden (warning), and
 * updates-available (info/accent) strips.
 */
export function Banner({ variant = 'info', icon = null, children, action = null }) {
    return (
        <div className={`mdx-banner mdx-banner--${variant}`}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                {icon}
                {children}
            </span>
            {action && <span style={{ flexShrink: 0 }}>{action}</span>}
        </div>
    )
}
