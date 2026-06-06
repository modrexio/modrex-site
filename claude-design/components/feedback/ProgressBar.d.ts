/** Thin 2px accent progress bar for downloads/updates. */
export interface ProgressBarProps {
    /** 0–100. Omit (or null) for an indeterminate pulsing bar. */
    percent?: number | null
}

export function ProgressBar(props: ProgressBarProps): JSX.Element
