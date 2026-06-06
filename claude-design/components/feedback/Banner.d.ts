import * as React from 'react'

/** Full-width inline notification strip at the top of a view. */
export interface BannerProps {
    /** "info" (accent, default), "warning", or "danger". */
    variant?: 'info' | 'warning' | 'danger'
    /** Optional leading icon node. */
    icon?: React.ReactNode
    children: React.ReactNode
    /** Right-aligned action node (a Button, link, or IconButton). */
    action?: React.ReactNode
}

export function Banner(props: BannerProps): JSX.Element
