import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const blog = defineCollection({
    loader: glob({
        pattern: "**/*.{md,mdx}",
        base: "./src/content/blog",
    }),

    schema: ({ image }) =>
        z.object({
            title: z.string(),
            description: z.string(),
            date: z.coerce.date(),

            tags: z.array(z.string()).default([]),

            featured: z.boolean().default(false),

            image: image(),
        }),
});

export const collections = {
    blog,
};