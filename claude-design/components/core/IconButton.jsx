import React from 'react'

/**
 * Square, icon-only button. Used all over the app's chrome:
 * refresh, open-folder, dismiss, grid/list toggles, delete.
 */
export function IconButton({
    variant = 'ghost',
    disabled = false,
    children,
    className = '',
    ...rest
}) {
    const classes = ['mdx-icon-btn', `mdx-icon-btn--${variant}`, className]
        .filter(Boolean)
        .join(' ')

    return (
        <button className={classes} disabled={disabled} {...rest}>
            {children}
        </button>
    )
}
