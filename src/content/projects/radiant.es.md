---
locale: es
slug: radiant
title: "Radiant"
description: "Una plataforma para la gestión de imagen médica."
tags:
  - api
  - spring
  - cli
  - python

featured: false
image: "../../assets/projects/radiant/thumbnail.png"
links:
  - url: "https://github.com/radiant-ct/radiant-api"
    card: Backend
    page: Backend en GitHub
    icon: github
    pageClass: "btn btn-sm btn-neutral"
  - url: "https://github.com/radiant-ct/radiant-cli"
    card: CLI
    page: CLI en GitHub
    icon: github
    pageClass: "btn btn-sm btn-neutral"
  - url: "https://pypi.org/project/radiant-ct/"
    card: PyPI
    page: CLI en PyPI
    icon: python
    pageClass: "btn btn-sm btn-secondary"

---

**Radiant** es una plataforma para la **gestión y reutilización de imágenes médicas**, orientada a profesionales e investigadores del ámbito de la imagen médica y, especialmente, a proyectos de **aprendizaje automático aplicado al cáncer**.

El proyecto fue desarrollado como mi **Trabajo de Fin de Grado en la Universidad de Sevilla**, tutorizado por el **Departamento de Matemática Aplicada I**, y obtuvo una calificación de **9,4**. El desarrollo se realizó en el contexto de un proyecto universitario en colaboración con el **Hospital Universitario Virgen del Rocío**, donde surgió la necesidad de facilitar la creación y reutilización de datasets para investigación debido a la dificultad de disponer de suficientes datos para el entrenamiento de modelos de aprendizaje automático.

La plataforma trabaja con imágenes médicas en formato **DICOM** y permite almacenarlas, calcular sus **características radiomicas** y filtrarlas en función tanto de sus metadatos como de dichas características. El objetivo principal es facilitar la **reutilización, combinación y creación de datasets**, permitiendo a los investigadores construir nuevos conjuntos de datos a partir de diferentes criterios de filtrado sin necesidad de modificar o duplicar los datos originales.

Debido al coste computacional de operaciones como la **compresión, descompresión y extracción de características radiomicas**, estas tareas se ejecutan de manera **asíncrona**. El sistema utiliza una **cola de Redis** para gestionar los trabajos pendientes y diferentes **workers independientes** encargados de procesarlos, evitando bloquear las operaciones principales del servidor y permitiendo distribuir la carga de trabajo.

Uno de los aspectos fundamentales de Radiant es su enfoque en la **reproducibilidad de los datasets**. Los investigadores pueden crear archivos que describen el contenido de un conjunto de datos. Estos archivos pueden compartirse con otros investigadores, que pueden utilizar Radiant para reconstruir exactamente el mismo conjunto de datos a partir de la misma definición. De esta forma, un dataset no se limita a ser una colección de imágenes, sino que puede representarse mediante una descripción reproducible.

Para interactuar con el sistema desarrollé un **cliente de línea de comandos (CLI)** con una interfaz y un conjunto de comandos inspirados en herramientas como **Git**, permitiendo gestionar los datasets y automatizar operaciones desde el terminal. Además, Radiant dispone de una **Terminal User Interface (TUI)** que permite explorar los datos y construir filtros complejos de manera visual e interactiva.

<div style="display: flex; justify-content: center;">
  <img
    src="/assets/projects/radiant/tui.png"
    alt="Terminal User Interface for filtering medical images"
    style="width: 100%; height: auto;"
  />
</div>

El sistema está diseñado para facilitar la colaboración entre investigadores, permitiendo compartir las definiciones de los datasets y reproducirlos posteriormente mediante las mismas condiciones de filtrado. Esto proporciona una forma estructurada de **crear, reutilizar, combinar y compartir datasets médicos**, facilitando su utilización en experimentos de investigación y en el desarrollo de modelos de aprendizaje automático aplicados a imagen médica.