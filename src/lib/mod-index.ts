import { createRequire } from 'node:module'

import initSqlJs from 'sql.js'

import { INDEX_DB_URL, SUPPORTED_MODS_QUERY } from './mod-index-shared'

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
        const result = db.exec(SUPPORTED_MODS_QUERY)
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
