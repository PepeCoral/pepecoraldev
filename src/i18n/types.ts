export interface NavTranslation {
    pepe: string;
    projects: string;
    blog: string;
    contact: string;
}

export interface PageTranslation {
    title: string;
    description: string;
}

export interface HomeTranslation extends PageTranslation {

    h1: string;
    body: string;
    getInTouch: string;
    workAvailable: string;
    latestPosts: string;
    viewAllPosts: string;
    featuredProjects: string;
    viewAllProjects: string;

}

export interface ProjectsTranslation extends PageTranslation {
    h1: string;
    projects: string;
    featured: string;
}

export interface BlogTranslation extends PageTranslation {
    h1: string;
    posts: string;
}

export interface ContactTranslation extends PageTranslation {
    h1: string;
    subtitle: string;
    getInTouch: string;
    emailLabel: string;
    elsewhereLabel: string;
    copyEmail: string;
    copied: string;
    ctaTitle: string;
    ctaBody: string;
    github: string;
    linkedin: string;
}

export interface BlogArticleTranslation {
}



export interface Translation {
    locale: Locale

    nav: NavTranslation;

    home: HomeTranslation;

    projects: ProjectsTranslation;

    contact: ContactTranslation;

    blog: BlogTranslation;

    blogArticle: BlogArticleTranslation;
}


export type Locale = 'es' | 'en';