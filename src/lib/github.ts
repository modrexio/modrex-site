const REPO = 'modrexio/modrex'

export interface Release {
    tag_name: string
    name: string
    body: string
    published_at: string
    assets: ReleaseAsset[]
}

export interface ReleaseAsset {
    name: string
    browser_download_url: string
    size: number
    download_count: number
}

export async function getLatestRelease(): Promise<Release> {
    const res = await fetch(`https://api.github.com/repos/${REPO}/releases/latest`, {
        headers: { Accept: 'application/vnd.github+json' },
    })
    if (!res.ok) throw new Error(`GitHub API error: ${res.status}`)
    return res.json()
}

export async function getAllReleases(): Promise<Release[]> {
    const res = await fetch(`https://api.github.com/repos/${REPO}/releases?per_page=50`, {
        headers: { Accept: 'application/vnd.github+json' },
    })
    if (!res.ok) throw new Error(`GitHub API error: ${res.status}`)
    return res.json()
}
