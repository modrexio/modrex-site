import * as React from 'react'

/** Raised, hairline-bordered surface container. */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Apply default 16px padding (default true). Set false for media/edge content. */
    padding?: boolean
    /** Enable color transitions for hover treatments. */
    hover?: boolean
    children: React.ReactNode
}

export function Card(props: CardProps): JSX.Element
