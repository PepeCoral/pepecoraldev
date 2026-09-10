---
locale: en
slug: cv
title: "Automating CV generation with Typst"
description: "How I turned my CV into a data-driven, programmable document generation system."
date: 2026-08-20
tags:
  - typst
  - data-driven
  
featured: false
image: "../../assets/blog/cv/thumbnail.png"
---

## El problema
Buscar trabajo es un proceso tedioso. Una parte importante de este es personalizar tu curriculum para ensalzar aquellas habilidades que busca cada oferta para encajar mejor. La primera manera que se nos ocurre de hacer esto es manualmente, haces una copia de tu .docx o documento de Google y modificas aquello que quieras.

Pronto te veras enterrado en documentos, uno por cada especialidad que dominas, en cada idioma que te interesa, sin hablar de aquellas que personalizas al detalle para esa oferta que te encantó.

Y entonces un día te das cuenta de que has cometido una falta de ortografía, que el color que utilizaste ya no te gusta o que prefieres utilizar otra fuente. Entonces miras atras a tu montaña de documentos y te preguntas, como se supone que tengo que cambiar esto en cientos de sitios.


## Que necesitamos
Está claro que utilizar documentos de texto habituales no soluciona nuestro problema, necesitamos una manera de construir documentos de manera sistematica y organizada.

Tenemos que dejar de ver el PDF que enviamos como el documento que modificar y tenemos que empezar a darnos cuenta de que ese es nuestro producto final.

Entonces mi mente de ingeniero de software hizo de las suyas y llegó a una conclusión necesitamos dividir responsabilidades.


- Datos 

## Como podemos resolverlo
### ¿Que es Typst?
Typst es un sistema de composición tipografica basado en un lenguaje de marcado. Wikipedia

Puede que te suene LaTeX, es algo similar pero modernizado. Es similar a html en el sentido que sirve para describir los contenidos de un documento, la diferencia es que en vez de describir una web, estamos describiendo un documento.

En la practica Typst no solo incluye un lenguaje de marcado si no que tambien cuenta con un  lenguaje de programación que nos permite usar variables, funciones, condicionales o bucles para la composición de nuestros documentos. Haciendolo muy flexible y perfecto para solucionar nuestro problema.

Ademas su compilador es de software libre bajo licencia Apache License 2.0. Sabemos que es nuestro. No dependemos de otros

Typst funciona con texto plano por lo que funciona perfectamente con sistemas de control de versiones como git.

```diff
+ Senior Software Engineer
- Software Engineer
```



## Como funciona mi sistema
### GitHub Actions
Parte de la magia de este sistema es su integracion con Github Actions. En el momento en el que decido que una version está completa puedo marcarla con un tag. Al enviar esto al servidor remoto de GitHub se compilan todoas las variantes automaticamente, los PDFs resultantes se almacenan como releases en mi repositorio, quedando organizados por versiones.
[Imagen]

## Conclusiones