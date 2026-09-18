---
locale: en
slug: cv
title: "Automating CV Generation with Typst"
description: "How I turned my CV into a data-driven, programmable document generation system."
date: 2026-08-20
tags:
  - typst
  - data-driven

featured: false
image: "../../assets/blog/cv/thumbnail.png"

---

## The Problem

Looking for a job is a tedious process. A big part of it involves tailoring your CV to highlight the skills each job posting is looking for and better match what they need.

The first solution that comes to mind is to do it manually: make a copy of your `.docx` or Google document and modify whatever you need.

Before long, you'll find yourself buried in documents—one for every specialty you have, every language you're interested in, not to mention the ones you tailor specifically for that job you really liked.

And then one day, you realize you've made a typo, you no longer like the color you used, or you'd rather use a different font. You look back at your mountain of documents and wonder:

**How am I supposed to change this in hundreds of places?**

The problem isn't really having lots of CVs. The problem is that we're using the final document as our data source.

## What We Need

It's clear that using regular text documents doesn't solve our problem. We need a way to build documents systematically and in an organized manner.

We need to stop thinking of the PDF we send out as the document we need to edit and start seeing it for what it really is: **the final product of a generation process**.

I came to the conclusion that the Word document was taking on too many responsibilities, and they were all tightly coupled. The document was simultaneously responsible for the formatting, styling, and content.

If we can separate these responsibilities and build a system that takes these elements as input and generates the PDF we want, we have our solution.

<div style="display: flex; justify-content: center;">
  <img
    src="/assets/blog/cv/base-idea.en.png"
    alt="A sketch of the basic idea"
    style="width: 100%; max-width: 600px; height: auto;"
  />
</div>


The CV stops being something we edit directly and becomes something we generate.

## How We Can Solve It

### Typst

> Typst is a typesetting system based on a markup language.
>
> — Wikipedia

You may have heard of LaTeX. Typst is based on a similar idea, but it's a more modern system with a much simpler syntax.

It's similar to HTML in that it lets us describe the contents of a document. The difference is that instead of describing a web page, we're describing a document intended to be typeset and then converted, for example, into a PDF.

In practice, Typst includes not only a markup language, but also a programming language that lets us use variables, functions, conditionals, and loops when composing our documents.

This makes it very flexible and, in this case, perfect for solving our problem.

Its compiler is also free and open-source software under the Apache License 2.0. The document format is text-based as well, so we can work with it comfortably using version control systems such as Git.

This last point is especially important: our CV stops being a file we edit and becomes code that we can version.

### TOML

> TOML (Tom's Obvious Minimal Language) is a configuration file format that is easy to read because of its obvious semantics and minimal design.
>
> — Wikipedia

In practice, TOML works similarly to JSON or XML: it lets us structure data in text files in a convenient way.

In this case, I decided to use TOML because it has direct integration with Typst, making it especially easy to read these files. Its syntax is also designed to be easy for humans to read and edit.

TOML will be used to define the data for our system. On one hand, we'll have the content of our CV, and on the other, the configuration needed to generate each of its variants.

For example, if you change your current role:

```diff
- role = "Software Engineer"
+ role = "Senior Software Engineer"
```

I don't need to search for where that text appears in each of my CVs. I change it once, and every variant that uses that data will be updated the next time I compile them.

And, just like Typst files, TOML files are plain text, so the entire system can live in Git.

## How My System Works

Building on the tools we've discussed, the system is divided into several pieces.

Typst is the compiler that generates the documents. The templates and composition logic are defined in `.typ` files, while the content and configuration for each variant are stored in TOML files.

<div style="display: flex; justify-content: center;">
  <img
    src="/assets/blog/cv/impl.en.png"
    alt="A sketch of the implementation."
    style="width: 100%; max-width: 600px; height: auto;"
  />
</div>

The separation is important because each piece now has a different responsibility.

The `.typ` files know **how** the document should be built, while the TOML files know **what** information should appear.

This allows the same template to generate different CVs without having to duplicate the entire document.

For example, I can have one configuration for a backend-oriented profile, another for frontend, and another for a specific job posting. They all use the same foundation and simply change the data provided to the template.

This means that tailoring a CV no longer means editing an existing document. It means creating or modifying a configuration.

## GitHub Actions

Part of the magic of this system comes from its integration with GitHub Actions.

Once I consider a version complete, I can tag it. When I push that change to the remote GitHub repository, GitHub Actions automatically compiles all the variants of my CV.

The result is a set of PDFs that I can use directly to apply for jobs.

The resulting PDFs are also stored as releases in my repository, organized by version.

<div style="display: flex; justify-content: center;">
  <img
    src="/assets/blog/cv/builds.png"
    alt="A screenshot of completed GitHub Actions builds for compiling the documents."
    style="width: 100%;  height: auto;"
  />
</div>

There's also an indirect benefit: my CV now has a history. I can see what changes I made, when I made them, and which version I was using at a given point in time. If something breaks, I can roll back to an earlier version. If I change the design, all variants can be regenerated using the new template.

I no longer have a folder full of documents named things like `CV_final.pdf`, `CV_final_2.pdf`, or `CV_final_definitivo.pdf`.

I have a repository, with versioned releases accessible from anywhere and always ready to download.

## Conclusions

Thanks to this system, I've standardized and automated the creation of my CVs, which has made my job search process considerably simpler.

But I think the most interesting part isn't automating the generation of a PDF. It's changing the way I think about my CV.

Instead of having independent documents that I have to maintain manually, I now have a data source, some templates, and a generation process.

This makes things that used to be tedious trivial. Changing a font, modifying a color, fixing a typo, or updating my work experience are all changes I can make once and apply to every variant.

And because everything is text-based and versioned with Git, I've also gained something I didn't have before: **control over my own CV**.

This system is probably overkill for someone who only needs to send out a couple of CVs a year. For me, however, the initial effort of setting it up paid off very quickly.

In the end, the idea wasn't to automate CV creation, but to stop editing CVs.