import React from 'react'

/**
 * Thin 2px progress bar — the app's download/update indicator.
 * Pass a 0–100 percent, or omit it for an indeterminate pulse.
 */
export function ProgressBar({ percent = null }) {
    const indeterminate = percent === null
    return (
        <div className="mdx-progress">
            <div
                className={
                    'mdx-progress__fill' +
                    (indeterminate ? ' mdx-progress__fill--indeterminate' : '')
                }
                style={indeterminate ? undefined : { width: `${Math.max(0, Math.min(100, percent))}%` }}
            />
        </div>
    )
}
