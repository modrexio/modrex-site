import * as React from 'react'

/**
 * Text input with optional leading icon and clear button.
 *
 * @startingPoint section="Forms" subtitle="Search / text field with icon + clear" viewport="700x150"
 */
export interface InputProps {
    value: string
    /** Called with the new string value. */
    onChange?: (value: string) => void
    /** Override the clear-button behavior (defaults to onChange('')). */
    onClear?: () => void
    placeholder?: string
    /** Leading icon node (e.g. a Lucide <Search size={14} />). */
    icon?: React.ReactNode
    /** Show a clear (✕) button when there's a value. */
    clearable?: boolean
    /** Render the value in the monospace stack (paths, args). */
    mono?: boolean
    disabled?: boolean
    type?: string
    className?: string
}

export function Input(props: InputProps): JSX.Element
