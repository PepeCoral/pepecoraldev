import type { APIRoute } from "astro";

export const GET: APIRoute = ({ site }) => {
    const sitemapUrl = new URL("sitemap.xml", site);

    const robots = `
User-agent: *
Allow: /

Sitemap: ${sitemapUrl}
`.trim();

    return new Response(robots, {
        headers: {
            "Content-Type": "text/plain; charset=utf-8",
        },
    });
};