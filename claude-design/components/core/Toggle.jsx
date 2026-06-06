import React from 'react'

/**
 * On/off switch — the exact pill toggle used for enabling and
 * disabling installed mods. Accent track when on, grey when off.
 */
export function Toggle({ checked, onChange, disabled = false, title }) {
    return (
        <button
            role="switch"
            aria-checked={checked}
            disabled={disabled}
            title={title}
            className="mdx-toggle"
            onClick={() => onChange && onChange(!checked)}
        >
            <span className="mdx-toggle__knob" />
        </button>
    )
}
