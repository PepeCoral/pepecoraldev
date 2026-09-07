import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

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

            url: z.string().url().optional(),

            github: z.string().url().optional(),
        }),
});

export const collections = {
    blog,
    projects,
};