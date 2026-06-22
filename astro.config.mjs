import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import starlight from '@astrojs/starlight'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    site: 'https://modrex.net',
    integrations: [
        starlight({
            title: 'Modrex Docs',
            description:
                'Documentation for installing, managing, and troubleshooting mods with Modrex.',
            favicon: '/favicon.ico',
            titleDelimiter: '-',
            customCss: ['./src/styles/starlight.css'],
            disable404Route: true,
            social: [
                { icon: 'github', label: 'GitHub', href: 'https://github.com/modrexio/modrex' },
                { icon: 'discord', label: 'Discord', href: 'https://discord.gg/tenzpx8JRM' },
            ],
            sidebar: [
                {
                    label: 'Start here',
                    items: [
                        { label: 'Documentation', link: '/docs/' },
                        { slug: 'docs/getting-started' },
                    ],
                },
                {
                    label: 'Using Modrex',
                    items: [
                        { slug: 'docs/installing-mods' },
                        { slug: 'docs/organizing' },
                        { slug: 'docs/launching' },
                    ],
                },
                {
                    label: 'Reference',
                    items: [{ slug: 'docs/settings' }, { slug: 'docs/troubleshooting' }],
                },
                {
                    label: 'Links',
                    items: [
                        { label: 'Home', link: '/' },
                        { label: 'Download', link: '/#download' },
                    ],
                },
            ],
            head: [
                {
                    tag: 'meta',
                    attrs: {
                        name: 'google-site-verification',
                        content: 'BPDEmTr1cgOYsYwW_cXaEN4UAOcAgcVXiVaCAoHunk0',
                    },
                },
                {
                    tag: 'link',
                    attrs: { rel: 'apple-touch-icon', href: '/icon.png' },
                },
            ],
        }),
        mdx(),
        sitemap(),
    ],
    vite: {
        plugins: [tailwindcss()],
    },
})
