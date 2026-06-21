export const INDEX_DB_URL =
    'https://github.com/modrexio/modrex-index/releases/download/latest-index/index.db'

export const INDEX_STATS_URL =
    'https://github.com/modrexio/modrex-index/releases/download/latest-index/index-stats.json'

export const SUPPORTED_MODS_QUERY = `
    SELECT COUNT(DISTINCT m.id) AS supported_mods
    FROM mods m
    JOIN files f ON f.mod_id = m.id
`

export interface ModIndexStatsPayload {
    supportedMods: number
    generatedAt: string
}
