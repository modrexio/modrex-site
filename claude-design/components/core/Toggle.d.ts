/** Pill on/off switch — used to enable/disable installed mods. */
export interface ToggleProps {
    /** Controlled on/off state. */
    checked: boolean
    /** Called with the next boolean value when clicked. */
    onChange?: (checked: boolean) => void
    disabled?: boolean
    /** Native tooltip text. */
    title?: string
}

export function Toggle(props: ToggleProps): JSX.Element
