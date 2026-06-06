import React from 'react'

/**
 * Centered dialog over a dark scrim. Header (title + close),
 * scrollable body, and an optional footer for actions. Click the
 * scrim to dismiss. Mirrors the app's update-notes / warning dialogs.
 */
export function Modal({ open, onClose, title, children, footer = null, width }) {
    if (!open) return null
    return (
        <div
            className="mdx-modal__scrim"
            onClick={(e) => e.target === e.currentTarget && onClose && onClose()}
        >
            <div className="mdx-modal" style={width ? { maxWidth: width } : undefined}>
                {(title || onClose) && (
                    <div className="mdx-modal__header">
                        <h2 className="mdx-modal__title">{title}</h2>
                        {onClose && (
                            <button
                                type="button"
                                className="mdx-icon-btn"
                                onClick={onClose}
                                aria-label="Close"
                            >
                                <CloseIcon />
                            </button>
                        )}
                    </div>
                )}
                <div className="mdx-modal__body">{children}</div>
                {footer && <div className="mdx-modal__footer">{footer}</div>}
            </div>
        </div>
    )
}

function CloseIcon() {
    return (
        <svg
            width="16"
            height="16"
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
