import { createRequire } from 'node:module'

import initSqlJs from 'sql.js'

const INDEX_DB_URL =
    'https://github.com/modrexio/modrex-index/releases/download/latest-index/index.db'

export interface ModIndexStats {
    supportedMods: number
}

const require = createRequire(import.meta.url)

export async function getModIndexStats(): Promise<ModIndexStats> {
    const dbBytes = await downloadIndex()
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

async function downloadIndex(): Promise<Uint8Array> {
    const res = await fetch(INDEX_DB_URL)
    if (!res.ok) throw new Error(`Index download error: ${res.status}`)

    return new Uint8Array(await res.arrayBuffer())
}
