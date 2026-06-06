import * as React from 'react'

/** Centered dialog over a dark scrim, with header / body / footer. */
export interface ModalProps {
    open: boolean
    /** Called on close button or scrim click. */
    onClose?: () => void
    title?: React.ReactNode
    children: React.ReactNode
    /** Right-aligned action row (Buttons). */
    footer?: React.ReactNode
    /** Override max-width (default 480px). e.g. "32rem". */
    width?: string
}

export function Modal(props: ModalProps): JSX.Element | null
