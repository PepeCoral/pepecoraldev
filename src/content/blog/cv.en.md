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
links:
  - url: "https://github.com/PepeCoral/coral-cv-public"
    card: Repository
    page: Repository on GitHub
    icon: github
    pageClass: "btn btn-sm btn-neutral"
---

## The Problem

Looking for a job is a tedious process. In my case, a significant part of that process involves tailoring my CV to highlight the skills each job posting is looking for and better match what they need.

My first solution was to do it manually: make a copy of my `.docx` or Google Doc and modify whatever I wanted.

Before long, I found myself buried in documents: one for every specialty I wanted to highlight, in every language I was interested in, not to mention the ones I customized in detail for specific job postings.

Then, one day, I realized I had made a typo, that I no longer liked the color I was using, or that I wanted to switch to a different font. I looked back at my mountain of documents and wondered:

**How am I supposed to change this in hundreds of places?**

The problem wasn't really having too many CVs. The problem was that I was using the final document as my data source.

## What We Need

It was clear that using regular text documents wasn't solving my problem. I needed a way to build my documents in a systematic and organized way.

I had to stop thinking of the PDF I sent out as the document I needed to edit and start seeing it as the output of a generation process.

I realized that my Word document was taking on too many responsibilities, and all of them were tightly coupled. The document was responsible for the formatting, styling, and content at the same time.

If I could separate these responsibilities and build a system that took these elements as input and generated the PDF I wanted as output, I would have solved the problem.

<div style="display: flex; justify-content: center;">
  <img
    src="/assets/blog/cv/base-idea.en.png"
    alt="A sketch of the basic idea"
    style="width: 100%; max-width: 600px; height: auto;"
  />
</div>

So I decided to solve it by building my own CV generation system.

## How We Can Solve It

### Typst

> Typst is a markup-based typesetting system.
>
> — Wikipedia

You may have heard of LaTeX. Typst is based on a similar idea, but it's a more modern system with a much simpler syntax.

It's similar to HTML in that it lets us describe the contents of a document. The difference is that instead of describing a web page, we're describing a document that is meant to be typeset and then converted, for example, into a PDF.

In practice, Typst isn't just a markup language. It also includes a programming language that lets us use variables, functions, conditionals, and loops when composing our documents.

This makes it very flexible and, in this case, perfect for solving my problem.

What's more, its compiler is open-source software licensed under the Apache License 2.0. Document files are also plain text, so we can work with them comfortably using version control systems such as Git.

The latter is especially important for my system: I can now version my CV like any other software project.

### TOML

> TOML (Tom's Obvious Minimal Language) is a configuration file format that is easy to read because of its obvious semantics, which are intended to be minimal.
>
> — Wikipedia

In practice, TOML works similarly to JSON or XML: it lets us structure data in text files in a convenient way.

In this case, I decided to use TOML because it has direct integration with Typst, making the files particularly easy to read. Its syntax is also designed to be easy for humans to read and edit.

TOML is what I use to define my system's data. On the one hand, I have my CV content; on the other, I have the configuration needed to generate each of its variants.

For example, if I change my current job title:

```diff
- role = "Software Engineer"
+ role = "Senior Software Engineer"
```

I don't need to search for that text across all my CVs. I change it once, and every variant that uses that data will be updated the next time I compile them.

And, just like Typst files, TOML files are plain text, so the entire system can live in Git.

## How My System Works

Based on the tools we've discussed above, the system is split into several components.

Typst is the compiler that generates the documents. The templates and composition logic are defined in `.typ` files, while the content and configuration for each variant are stored in TOML files.

<div style="display: flex; justify-content: center;">
  <img
    src="/assets/blog/cv/impl.en.png"
    alt="A sketch of the implementation."
    style="width: 100%; max-width: 600px; height: auto;"
  />
</div>

The separation is important because each component now has a different responsibility.

The `.typ` files know **how** the document should be built, while the TOML files know **what** information should appear.

This means a single template can generate different CVs without having to duplicate the entire document.

For example, I can have one configuration for a backend-oriented profile, another for frontend, and another for a specific job posting. They all use the same foundation and simply change the data provided to the template.

This means tailoring a CV no longer involves editing an existing document. It means creating or modifying a configuration.

## GitHub Actions

Part of the magic of this system comes from its integration with GitHub Actions.

When I consider a version complete, I can tag it. Once I push that change to the remote GitHub repository, GitHub Actions automatically compiles all the variants of my CV.

The result is a set of PDFs that I can use directly when applying for jobs.

The resulting PDFs are also stored as releases in my repository, keeping them organized by version.

<div style="display: flex; justify-content: center;">
  <img
    src="/assets/blog/cv/builds.png"
    alt="A screenshot of completed GitHub Actions builds for compiling the documents."
    style="width: 100%; height: auto;"
  />
</div>

This has an indirect benefit: my CV now has a history as well. I can see what changes I made, when I made them, and which version I was using at any given point. If something breaks, I can roll back to an earlier version. If I change the design, all the variants can be regenerated using the new template.

I no longer have a folder full of documents called things like `CV_final.pdf`, `CV_final_2.pdf`, or `CV_final_definitivo.pdf`.

I have a repository with versioned releases, accessible from anywhere and always ready to download.

And the entire system is published on GitHub. If you're interested in building something similar, you can check out the code, templates, and structure I use for my own CV and adapt them to your needs.

## Conclusions

Thanks to this system, I've been able to standardize and automate the creation of my CVs, which has significantly simplified my job search process.

But I think the most interesting part isn't automating the generation of a PDF. It's changing the way I think about my CV.

Instead of having independent documents that I need to maintain manually, I now have a data source, templates, and a generation process.

This makes things that used to be tedious trivial. Changing a font, modifying a color, fixing a typo, or updating my work experience are all changes I can make once and apply to every variant.

And because everything is text-based and versioned with Git, I've also gained something I didn't have before: **control over my own CV**.

This system is probably overkill for someone who only needs to send out a couple of CVs a year. For me, however, the initial effort of setting it up has quickly paid off.

In the end, the goal wasn't to automate CV creation, but to make my day-to-day life easier.