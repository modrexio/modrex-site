// Transparent passthrough to GA4's Measurement Protocol endpoint, used by the
// desktop app's opt-in analytics (modrex-main/src-tauri/src/commands/analytics.rs).
//
// The app already sends from its Rust backend instead of the webview so in-page
// ad blockers can't strip the request — but DNS-level and hosts-file blocklists
// (Pi-hole, AdGuard Home, NextDNS, "debloat Windows" scripts) and outbound
// firewalls block `google-analytics.com` for every process on a machine, not just
// browsers, and this audience runs that tooling heavily. Routing through
// modrex.net instead means the request only has to survive being blocked by
// name, not by Google's domain.
//
// This function otherwise doesn't know or care about GA4's event schema — it
// just forwards the query string and body verbatim — so it can never drift out
// of sync with whatever analytics.rs decides to send. The one exception is
// `ip_override` below: without it, GA4 geolocates every user as wherever this
// function's own outbound fetch egresses from (Cloudflare's network), not the
// real visitor — since the request Google actually sees comes from Cloudflare,
// not the desktop app's connection.
export async function onRequestPost({ request }: { request: Request }): Promise<Response> {
    const incoming = new URL(request.url)
    const measurementId = incoming.searchParams.get('measurement_id')
    const apiSecret = incoming.searchParams.get('api_secret')
    if (!measurementId || !apiSecret) {
        return new Response('Missing measurement_id or api_secret', { status: 400 })
    }

    const target = new URL('https://www.google-analytics.com/mp/collect')
    target.searchParams.set('measurement_id', measurementId)
    target.searchParams.set('api_secret', apiSecret)

    // Set by Cloudflare's edge itself from the real TCP connection — the client
    // can't spoof this by sending its own header, Cloudflare overwrites it.
    // Absent under local `wrangler pages dev` (no real edge involved); the
    // request still forwards, just without geo correction, same as before.
    const clientIp = request.headers.get('CF-Connecting-IP')
    let body = await request.text()
    if (clientIp) {
        try {
            const parsed = JSON.parse(body)
            parsed.ip_override = clientIp
            body = JSON.stringify(parsed)
        } catch {
            // Malformed JSON from the client — forward as-is; GA4 rejects it the
            // same way it would have without this function in the path.
        }
    }

    try {
        await fetch(target, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'User-Agent': request.headers.get('User-Agent') ?? '',
            },
            body,
        })
    } catch {
        // GA4's own endpoint never returns error codes for malformed payloads
        // either, and the desktop client doesn't read this response — there's
        // nothing useful to surface even if the upstream call fails.
    }

    return new Response(null, { status: 204 })
}
