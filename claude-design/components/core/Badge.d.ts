import * as React from 'react'

/** Small status pill carrying the app's state colors. */
export interface BadgeProps {
    /** Semantic color. Default "neutral". */
    variant?: 'neutral' | 'accent' | 'warning' | 'danger' | 'success'
    /** Optional leading icon node. */
    icon?: React.ReactNode
    children: React.ReactNode
    className?: string
}

export function Badge(props: BadgeProps): JSX.Element
