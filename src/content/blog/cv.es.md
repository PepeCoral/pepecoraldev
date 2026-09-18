---
locale: es
slug: cv
title: "Automatizando la generación de currículums con Typst"
description: "Cómo convertí mi CV en un sistema data-driven y programable para la generación de documentos."
date: 2026-08-20
tags:
  - typst
  - data-driven

featured: false
image: "../../assets/blog/cv/thumbnail.png"

---

## El problema

Buscar trabajo es un proceso tedioso. Una parte importante de este proceso consiste en personalizar tu currículum para destacar aquellas habilidades que busca cada oferta y encajar mejor con lo que necesitan.

La primera solución que se nos ocurre es hacerlo manualmente haces una copia de tu `.docx` o de tu documento de Google y modificas aquello que quieras.

Pronto te verás enterrado en documentos, uno por cada especialidad que dominas, en cada idioma que te interesa, sin hablar de aquellos que personalizas al detalle para esa oferta que te encantó.

Y entonces un día te das cuenta de que has cometido una falta de ortografía, que el color que utilizaste ya no te gusta o que prefieres utilizar otra fuente. Entonces miras atrás a tu montaña de documentos y te preguntas:

**¿Cómo se supone que tengo que cambiar esto en cientos de sitios?**

El problema no es realmente tener muchos currículums. El problema es que estamos utilizando el documento final como fuente de datos.

## Qué necesitamos

Está claro que utilizar documentos de texto habituales no soluciona nuestro problema. Necesitamos una manera de construir documentos de forma sistemática y organizada.

Tenemos que dejar de ver el PDF que enviamos como el documento que debemos modificar y empezar a verlo como lo que realmente es: **el producto final de un proceso de generación**.

La conclusión a la que llegué fue que el documento de Word estaba asumiendo demasiadas responsabilidades y, además, todas estaban acopladas. El documento se encargaba simultáneamente del formato, el estilo y el contenido.

Si somos capaces de dividir estas responsabilidades y crear un sistema que reciba estos elementos y genere como resultado el PDF que buscamos, tendremos el problema resuelto.

<div style="display: flex; justify-content: center;">
  <img
    src="/assets/blog/cv/base-idea.es.png"
    alt="Un boceto de la idea base"
    style="width: 100%; max-width: 600px; height: auto;"
  />
</div>


El currículum deja de ser algo que editamos directamente y pasa a ser algo que generamos.

## Cómo podemos resolverlo

### Typst

> Typst es un sistema de composición tipográfica basado en un lenguaje de marcado.
>
> — Wikipedia

Puede que te suene LaTeX. Typst parte de una idea similar, pero es un sistema más moderno y con una sintaxis mucho más sencilla.

Es parecido a HTML en el sentido de que sirve para describir los contenidos de un documento. La diferencia es que, en vez de describir una página web, estamos describiendo un documento destinado a ser compuesto y posteriormente convertido, por ejemplo, en PDF.

En la práctica, Typst no solo incluye un lenguaje de marcado, sino que también cuenta con un lenguaje de programación que nos permite utilizar variables, funciones, condicionales o bucles para la composición de nuestros documentos.

Esto lo hace muy flexible y, en este caso, perfecto para solucionar nuestro problema.

Además, su compilador es software libre bajo la licencia Apache License 2.0. El formato de los documentos también está basado en texto plano, por lo que podemos trabajar con ellos cómodamente utilizando sistemas de control de versiones como Git.

Esto último es especialmente importante: nuestro currículum deja de ser un archivo que editamos y pasa a ser código que podemos versionar.

### TOML

> TOML (Tom's Obvious Minimal Language) es un formato de archivo de configuración que es fácil de leer debido a la semántica obvia que pretende ser mínima.
>
> — Wikipedia

En la práctica, TOML funciona de forma similar a JSON o XML: nos permite estructurar datos en archivos de texto de una manera cómoda.

En este caso decidí utilizar TOML porque tiene integración directa con Typst, haciendo que sea especialmente sencillo leer los archivos. Además, su sintaxis está pensada para ser fácil de leer y editar por humanos.

TOML nos servirá para definir los datos de nuestro sistema. Por un lado tendremos el contenido de nuestro currículum y, por otro, la configuración necesaria para generar cada una de sus variantes.

Por ejemplo, si cambias tu puesto actual:

```diff
- role = "Software Engineer"
+ role = "Senior Software Engineer"
```

no necesito buscar dónde aparece ese texto en cada uno de mis currículums. Lo cambio una vez y todas las variantes que utilicen ese dato se actualizarán al volver a compilarlas.

Y, al igual que los archivos de Typst, los archivos TOML son texto plano, por lo que todo el sistema puede vivir dentro de Git.

## Cómo funciona mi sistema

Partiendo de las herramientas que hemos mencionado previamente, el sistema queda dividido en varias piezas.

El compilador que genera los documentos es Typst. Las plantillas y la lógica de composición están definidas en archivos `.typ`, mientras que el contenido y la configuración de cada variante se encuentran en archivos TOML.

<div style="display: flex; justify-content: center;">
  <img
    src="/assets/blog/cv/impl.es.png"
    alt="Un boceto de la implementación."
    style="width: 100%; max-width: 600px; height: auto;"
  />
</div>

La separación es importante porque ahora cada pieza tiene una responsabilidad diferente.

Los archivos `.typ` saben **cómo** se debe construir el documento, mientras que los archivos TOML saben **qué** información debe aparecer.

Esto permite que una misma plantilla pueda generar diferentes currículums sin tener que duplicar el documento completo.

Por ejemplo, puedo tener una configuración para un perfil más orientado a backend, otra para frontend y otra para una oferta concreta. Todas utilizan la misma base y simplemente cambian los datos que se proporcionan a la plantilla.


De esta forma, personalizar un currículum ya no significa editar un documento existente. Significa crear o modificar una configuración.

## GitHub Actions

Parte de la magia de este sistema está en su integración con GitHub Actions.

En el momento en el que considero que una versión está completa, puedo marcarla con un tag. Al enviar ese cambio al repositorio remoto de GitHub, GitHub Actions se encarga de compilar automáticamente todas las variantes de mi currículum.

El resultado son los PDFs que puedo utilizar directamente para enviar mis candidaturas.

Además, los PDFs resultantes se almacenan como releases en mi repositorio, quedando organizados por versiones.

<div style="display: flex; justify-content: center;">
  <img
    src="/assets/blog/cv/builds.png"
    alt="Una imagen de github actions completadas de compilar los documentos."
    style="width: 100%;  height: auto;"
  />
</div>
Esto tiene una ventaja indirecta, mi currículum también tiene historial. Puedo saber qué cambios hice, cuándo los hice y qué versión estaba utilizando en un momento determinado. Si algo se rompe, puedo volver a una versión anterior. Si cambio el diseño, todas las variantes se pueden regenerar utilizando la nueva plantilla.

Ya no tengo una carpeta llena de documentos llamados cosas como `CV_final.pdf`, `CV_final_2.pdf` o `CV_final_definitivo.pdf`.

Tengo un repositorio. Con realeases versionadas accesible desde cualquier sitio y siempre listas para descargar.

## Conclusiones

Gracias a este sistema he conseguido estandarizar y automatizar la creación de mis currículums, lo que ha simplificado bastante mi proceso de búsqueda de trabajo.

Pero creo que lo más interesante no es haber conseguido automatizar la generación de un PDF. Lo interesante es haber cambiado la forma en la que pienso sobre el currículum.

En lugar de tener documentos independientes que tengo que mantener manualmente, ahora tengo una fuente de datos, unas plantillas y un proceso de generación.

Esto hace que cosas que antes eran tediosas sean triviales. Cambiar una fuente, modificar un color, corregir una errata o actualizar mi experiencia laboral son cambios que puedo hacer una sola vez y aplicar a todas las variantes.

Y, al estar todo basado en texto y versionado con Git, también he ganado algo que no tenía antes: **control sobre mi propio currículum**.

Probablemente este sistema sea excesivo para alguien que solo necesita enviar un par de currículums al año. Para mí, sin embargo, el coste inicial de montarlo se ha compensado rápidamente.

Al final, la idea no era automatizar la creación de un currículum, si no dejar de editar currículums.