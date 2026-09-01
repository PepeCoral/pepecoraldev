---
title: "Understanding Astro Routing"
description: "How I use Astro's file-based routing for my projects."
date: 2026-08-20
tags:
  - astro
  - web development
  - typescript
featured: false
image: "../../assets/blog/astro-routing.jpeg"
---

# Understanding Astro Routing

Astro's routing system is one of the things I really like about it.

Pages inside `src/pages` automatically become routes.

For example:

- `src/pages/index.astro` → `/`
- `src/pages/blog/index.astro` → `/blog`
- `src/pages/blog/[slug].astro` → `/blog/:slug`

## Dynamic routes

Dynamic routes are particularly useful for blog posts.

We can generate a page for every Markdown file in our collection.