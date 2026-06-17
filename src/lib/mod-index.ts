import { createRequire } from 'node:module'

import initSqlJs from 'sql.js'

const INDEX_RELEASE_API =
    'https://api.github.com/repos/modrexio/modrex-index/releases/tags/latest-index'

interface IndexRelease {
    assets: { name: string; url: string }[]
}

export interface ModIndexStats {
    supportedMods: number
}

const require = createRequire(import.meta.url)

export async function getModIndexStats(): Promise<ModIndexStats> {
    const assetUrl = await getIndexAssetUrl()
    const dbBytes = await downloadIndex(assetUrl)
    const SQL = await initSqlJs({
        locateFile: () => require.resolve('sql.js/dist/sql-wasm.wasm'),
    })
    const db = new SQL.Database(dbBytes)

    try {
        const result = db.exec(`
            SELECT COUNT(DISTINCT m.id) AS supported_mods
            FROM mods m
            JOIN files f ON f.mod_id = m.id
        `)
        const supportedMods = Number(result[0]?.values[0]?.[0] ?? 0)
        return { supportedMods }
    } finally {
        db.close()
    }
}

async function getIndexAssetUrl(): Promise<string> {
    const res = await fetch(INDEX_RELEASE_API, {
        headers: { Accept: 'application/vnd.github+json' },
    })
    if (!res.ok) throw new Error(`GitHub API error: ${res.status}`)

    const release = (await res.json()) as IndexRelease
    const asset = release.assets.find((item) => item.name === 'index.db')
    if (!asset) throw new Error('index.db asset not found')

    return asset.url
}

async function downloadIndex(assetUrl: string): Promise<Uint8Array> {
    const res = await fetch(assetUrl, {
        headers: { Accept: 'application/octet-stream' },
    })
    if (!res.ok) throw new Error(`GitHub asset error: ${res.status}`)

    return new Uint8Array(await res.arrayBuffer())
}
