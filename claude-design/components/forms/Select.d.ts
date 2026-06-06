import * as React from 'react'

export interface SelectOption {
    value: string
    label: string
    /** Optional leading icon node (e.g. a launcher logo). */
    icon?: React.ReactNode
}

/** Custom dropdown select (closes on outside-click; accent-selected row). */
export interface SelectProps {
    value: string
    onChange?: (value: string) => void
    options: SelectOption[]
    placeholder?: string
    disabled?: boolean
}

export function Select(props: SelectProps): JSX.Element
