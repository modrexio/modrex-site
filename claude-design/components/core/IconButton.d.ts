import * as React from 'react'

/** Square, icon-only button for app chrome (refresh, delete, dismiss). */
export interface IconButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /** "ghost" (transparent, default), "solid" (surface well), or "danger". */
    variant?: 'ghost' | 'solid' | 'danger'
    /** The icon node — typically a Lucide icon sized 14–16. */
    children: React.ReactNode
}

export function IconButton(props: IconButtonProps): JSX.Element
