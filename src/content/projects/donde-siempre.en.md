---
locale: en
slug: donde-siempre
title: "Donde Siempre"
description: "A local commerce marketplace focused on the fashion niche."
tags:
  - api
  - web
  - spring
  - nextjs

featured: false
image: "../../assets/projects/donde-siempre/thumbnail.png"
links:
  - url: "https://github.com/ispp-knot/dondesiempre-backend"
    card: Backend
    page: Backend in GitHub
    class: "btn btn-sm btn-neutral"
  - url: "https://github.com/ispp-knot/dondesiempre-frontend"
    card: Frontend
    page: Frontend in GitHub
    class: "btn btn-sm btn-neutral"

---

**Donde Siempre** was a university project developed as part of the ISPP (Software Engineering and Professional Practice) course by a team of **17 software engineers over one semester**. The project was awarded an **Honors Grade (Matrícula de Honor)** in recognition of the work carried out and the results achieved.

The project involved developing a **Progressive Web App (PWA)** aimed at supporting local commerce. The platform allowed shops and businesses to register, create a virtual storefront, publish their products, and offer their services online. As a result, we delivered a **functional MVP**, with one version dedicated to testing through continuous deployment and **four versions deployed to pilot users** recruited during the development of the project.

<div style="display: flex; justify-content: center;">
  <iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/TP6aJ4_gG8o?si=wHUWO3xU9EWejoG7"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen>
  </iframe>
</div>

During MVP development, I was part of the project's **technical leadership**, within a structure organized into multidisciplinary teams coordinated by four *team leaders*. I served as **Technical Team Leader**, responsible for technology selection, application architecture, development standards, and technical coordination across the team.

The application followed a **client-server architecture**, with a backend developed in **Spring Boot** using a layered architecture based on **Controller, Service, and Repository**, and a frontend developed in **Next.js** using *Client-Side Rendering (CSR)*. Communication between both components was handled through a **REST API** documented with **OpenAPI**. For persistence, we used **PostgreSQL** and **Spring Data JPA**, while authentication was implemented using **JWT**.

One of the main goals of my work was to establish an infrastructure that would ensure **code quality and consistency** as the team grew. I defined and standardized the development process using a **Trunk-Based Development** branching strategy, with *Pull Requests* as a mandatory integration mechanism. No developer could merge directly into `main`, and all code had to undergo a **manual review** before being integrated.

I also contributed to the design and maintenance of the **CI/CD pipeline using GitHub Actions**. Every Pull Request automatically ran tests, linters, and quality analysis with **SonarQube**, with these checks enforced as mandatory requirements before merging. In addition, we implemented **continuous deployment to Azure**, allowing us to maintain an up-to-date version of the project for continuous testing.

To facilitate team coordination, we also automated development-related notifications. Opening Pull Requests and issues automatically triggered notifications on the team's **Discord server**, keeping developers informed without requiring manual tracking.

From a project management perspective, we followed a **Scrumban** methodology, using **GitHub Projects** to organize and track work and holding regular retrospectives to identify issues and improve our processes.

In addition to my technical leadership responsibilities, I was directly involved in **developing key MVP features**. Coordinating a team of 17 engineers was one of the project's main challenges, particularly when it came to maintaining effective communication, establishing shared processes, and ensuring that technical decisions were applied consistently across teams. This experience allowed me to strengthen not only my technical skills, but also my **leadership, coordination, and software development team management skills**.