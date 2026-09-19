import { getCollection } from "astro:content";
import type { APIRoute } from "astro";

const locales = [
    { code: "en-US", prefix: "" },
    { code: "es", prefix: "es" },
] as const;

const staticPages = ["", "blog/", "projects/", "contact/"];

function escapeXml(value: string) {
    return value
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&apos;");
}

function localize(base: string, prefix: string, path: string) {
    return prefix ? `${base}/${prefix}/${path}` : `${base}/${path}`;
}

function urlEntry(base: string, path: string) {
    const hrefs = locales.map(({ code, prefix }) => ({
        code,
        href: localize(base, prefix, path),
    }));

    return hrefs
        .map(
            ({ code, href: loc }) =>
                `<url><loc>${escapeXml(loc)}</loc>${hrefs
                    .map(
                        ({ code: hreflang, href: alternate }) =>
                            `<xhtml:link rel="alternate" hreflang="${hreflang}" href="${escapeXml(alternate)}"/>`,
                    )
                    .join("")}</url>`,
        )
        .join("");
}

export const GET: APIRoute = async ({ site }) => {
    if (!site) {
        throw new Error("Missing `site` in your astro.config.mjs");
    }

    const base = site.toString().replace(/\/$/, "");

    const blog = await getCollection("blog");
    const projects = await getCollection("projects");

    const contentPaths = [
        ...new Set(blog.map((post) => `blog/${post.data.slug}/`)),
        ...new Set(projects.map((project) => `projects/${project.data.slug}/`)),
    ];

    const entries = [...staticPages, ...contentPaths].map((path) =>
        urlEntry(base, path),
    );

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${entries.join("")}</urlset>`;

    return new Response(sitemap, {
        headers: {
            "Content-Type": "application/xml; charset=utf-8",
        },
    });
};