import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const linkSchema = z.object({
    url: z.string().url(),
    card: z.string(),
    page: z.string(),
    icon: z.enum(["github", "steam"]).optional(),
    cardClass: z.string().optional(),
    pageClass: z.string().optional(),
});

const blog = defineCollection({
    loader: glob({
        pattern: "**/*.{md,mdx}",
        base: "./src/content/blog",
        generateId: ({ entry }) => entry.replace(/\.(md|mdx)$/, ""),
    }),

    schema: ({ image }) =>
        z.object({
            locale: z.enum(["en", "es"]),
            slug: z.string(),
            title: z.string(),
            description: z.string(),
            date: z.coerce.date(),

            tags: z.array(z.string()).default([]),

            featured: z.boolean().default(false),

            image: image(),

            links: z.array(linkSchema).default([]),
        }),
});

const projects = defineCollection({
    loader: glob({
        pattern: "**/*.{md,mdx}",
        base: "./src/content/projects",
        generateId: ({ entry }) => entry.replace(/\.(md|mdx)$/, ""),
    }),

    schema: ({ image }) =>
        z.object({
            locale: z.enum(["en", "es"]),
            slug: z.string(),
            title: z.string(),
            description: z.string(),

            tags: z.array(z.string()).default([]),

            featured: z.boolean().default(false),

            image: image(),

            links: z.array(linkSchema).default([]),
        }),
});

export const collections = {
    blog,
    projects,
};