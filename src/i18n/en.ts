import type { Translation } from "./types";

const t: Translation = {
    locale: "en",
    nav: {
        pepe: "Pepe Coral",
        projects: "/projects",
        blog: "/blog",
        contact: "/contact",
    },
    home: {
        title: "Pepe Coral",
        description: "Pepe Coral's Portfolio",
        h1: "Hi, I'm Pepe Coral",
        body: "Software engineer who likes building clean, fast web apps. I write about what I learn along the way, take a look below, or just say hi.",
        getInTouch: "Get in touch",
        workAvailable: "Available for work",
        latestPosts: "Latest Posts",
        viewAllPosts: "View All",
        featuredProjects: "Latest Projects",
        viewAllProjects: "View All",
        downloadCv: "Download CV"
    },
    projects: {
        title: "Projects - Pepe Coral",
        description: "Pepe Coral's Projects",
        h1: "Projects",
        projects: "projects",
        featured: "Featured",
    },
    blog: {
        title: "Blog - Pepe Coral",
        description: "Pepe Coral's Blog",
        h1: "Blog",
        posts: "posts",
    },
    contact: {
        title: "Contact",
        description: "Get in touch with Pepe Coral — let's talk about your next project.",
        h1: "Let's get in touch.",
        subtitle: "Have a question, want to collaborate, or just want to say hello? I'd love to hear from you.",
        getInTouch: "Get in touch",
        emailLabel: "Email",
        elsewhereLabel: "Elsewhere",
        copyEmail: "Copy email",
        copied: "Copied!",
        downloadCv: "Download CV",
        ctaTitle: "Let's talk.",
        ctaBody: "Whether you have an idea, a project, or just want to say hello, feel free to reach out.",
        github: "GitHub",
        linkedin: "LinkedIn",
    },

    blogArticle: { onThisPage: "On this page" },
    notFound: {
        title: "404 - Page not found - Pepe Coral",
        description: "The page you're looking for doesn't exist or has been moved.",
        h1: "Page not found",
        body: "The page you're looking for doesn't exist or has been moved.",
        backHome: "Go back home",
    },
};

export default t;