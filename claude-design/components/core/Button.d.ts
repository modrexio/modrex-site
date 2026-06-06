import * as React from 'react'

/**
 * Modrex primary button — small, dense, color-first.
 *
 * @startingPoint section="Core" subtitle="Accent / secondary / ghost / danger button" viewport="700x150"
 */
export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /** Visual style. Default "secondary". */
    variant?: 'primary' | 'secondary' | 'ghost' | 'danger' | 'accent-soft'
    /** "sm" (default, the app's norm) or "md". */
    size?: 'sm' | 'md'
    /** Leading icon node (e.g. a Lucide <Download size={14} />). */
    icon?: React.ReactNode
    /** Trailing icon node. */
    iconRight?: React.ReactNode
    /** Show a spinner and disable. */
    loading?: boolean
    children?: React.ReactNode
}

export function Button(props: ButtonProps): JSX.Element
