---
locale: es
slug: donde-siempre
title: "Donde Siempre"
description: "Un marketplace de comercio local, enfocado en el nicho de la moda."
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
    page: Backend en GitHub
    icon: github
    pageClass: "btn btn-sm btn-neutral"
  - url: "https://github.com/ispp-knot/dondesiempre-frontend"
    card: Frontend
    page: Frontend en GitHub
    icon: github
    pageClass: "btn btn-sm btn-neutral"

---

**Donde Siempre** es un proyecto universitario desarrollado en el marco de la asignatura ISPP (Ingeniería de Software y Prácticas Profesionales), llevado a cabo por un equipo de **17 ingenieros de software durante un cuatrimestre**. El proyecto recibió una **Matrícula de Honor** como reconocimiento al trabajo realizado y a los resultados obtenidos.

El proyecto consistió en el desarrollo de una **Progressive Web App (PWA)** orientada al comercio local. La plataforma permitía a tiendas y comercios registrarse, crear un escaparate virtual, publicar sus productos y ofrecer sus servicios de manera online. Como resultado, desarrollamos un **MVP funcional** con una versión destinada a testing mediante despliegue continuo y **cuatro versiones desplegadas para usuarios piloto**, obtenidos durante el desarrollo del proyecto.

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

Durante el desarrollo del MVP formé parte de la **dirección técnica del proyecto**, dentro de una estructura organizada en equipos multidisciplinares coordinados por cuatro *team leaders*. Desempeñé el rol de **Technical Team Leader**, siendo responsable de la selección de tecnologías, la definición de la arquitectura de la aplicación, el establecimiento de estándares de desarrollo y la coordinación técnica del equipo.

La aplicación seguía una **arquitectura cliente-servidor**, con un backend desarrollado en **Spring Boot** siguiendo una separación por capas de **Controller, Service y Repository**, y un frontend desarrollado en **Next.js** mediante *Client-Side Rendering (CSR)*. La comunicación entre ambos componentes se realizaba mediante una **API REST**, documentada mediante **OpenAPI**. Para la persistencia utilizamos **PostgreSQL** y **Spring Data JPA**, mientras que la autenticación se implementó mediante **JWT**.

Uno de los principales objetivos de mi trabajo fue establecer una infraestructura que garantizase la **calidad y consistencia del código** a medida que crecía el equipo. Definí y estandaricé el proceso de desarrollo mediante una estrategia de *branching* basada en **Trunk-Based Development**, utilizando *Pull Requests* como mecanismo obligatorio de integración. Ningún desarrollador podía realizar *merge* directamente sobre `main` y todo el código debía pasar por una **revisión manual** antes de integrarse.

También participé en el diseño y mantenimiento del sistema de **CI/CD mediante GitHub Actions**. Cada Pull Request ejecutaba automáticamente los tests, linters y análisis de calidad con **SonarQube**, estableciendo estas comprobaciones como requisitos obligatorios antes del *merge*. Además, implementamos **despliegue continuo sobre Azure**, permitiendo disponer de una versión actualizada del proyecto para realizar pruebas de manera constante.

Para facilitar la coordinación del equipo, automatizamos también las notificaciones relacionadas con el desarrollo. La apertura de Pull Requests e incidencias generaba automáticamente notificaciones en el **servidor de Discord del equipo**, manteniendo a los desarrolladores informados sin necesidad de realizar un seguimiento manual.

A nivel de gestión, trabajamos siguiendo una metodología **Scrumban**, utilizando **GitHub Projects** para la organización y seguimiento del trabajo y realizando retrospectivas periódicas para identificar problemas y mejorar nuestros procesos.

Además de mis responsabilidades de liderazgo técnico, participé directamente en el **desarrollo de funcionalidades clave del MVP**. La coordinación de un equipo de 17 ingenieros supuso uno de los principales retos del proyecto, especialmente a la hora de mantener una comunicación fluida, establecer procesos comunes y garantizar que las decisiones técnicas se aplicasen de manera consistente en los distintos equipos. Esta experiencia me permitió desarrollar no solo mis conocimientos técnicos, sino también mis capacidades de **liderazgo, coordinación y gestión de equipos de desarrollo**.