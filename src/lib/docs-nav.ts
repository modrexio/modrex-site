export interface NavItem {
    title: string
    href: string
}

export interface NavGroup {
    label: string
    items: NavItem[]
}

export const NAV: NavGroup[] = [
    {
        label: 'Getting started',
        items: [{ title: 'Installation', href: '/docs/getting-started' }],
    },
    {
        label: 'Using Modrex',
        items: [
            { title: 'Installing mods', href: '/docs/installing-mods' },
            { title: 'Organizing mods', href: '/docs/organizing' },
            { title: 'Launching the game', href: '/docs/launching' },
        ],
    },
    {
        label: 'Reference',
        items: [
            { title: 'Settings', href: '/docs/settings' },
            { title: 'Troubleshooting', href: '/docs/troubleshooting' },
        ],
    },
]
