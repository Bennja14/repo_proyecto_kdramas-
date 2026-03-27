# Bases de datos 

Para el proyecto, utilizaremos diversas bases de datos, la primera de ellas será de elaboración propia, para la creación de nuestra base de datos, utilizaremos como fuente la página Drama Wiki Fandom del siguiente link: 

https://drama.fandom.com/es/wiki/Categor%C3%ADa:KDrama_por_a%C3%B1o 

El sitio organiza los K-dramas por año de emisión y permite acceder a listas anuales con las series ordenadas alfabéticamente. Cada K-drama cuenta con una ficha que incluye información detallada sobre sus características. Esto facilita construir una base desde el 2000 en adelante, año de la expansión de la ola coreana Hallyu en Latinoamérica. 

Sobre el método de recolección de datos, usaremos el método de web scraping, permitiendo extraer de mejor manera la información disponible en el sitio. En cada fila estará el nombre de un K-drama y las columnas representarán las siguientes variables: 

* Año de emisión 
* Fecha de inicio y término 
* Número de episodios 
* Género 
* Cadena televisiva 
* Director 
* Productor 
* Guionista 
* Actores 
* Personajes 
* Banda sonora

## Segunda base de datos  

En segunda instancia, para la investigación sobre kdramas y sus características e impacto utilizaremos también páginas como **MyDramaList, Themoviedb, FUNdex, entre otros.**

Utilizaremos web scrapping porque queremos medir muchas variables, las cuales se detallan a continuación. 

### Variables a recopilar
* Nombre
* Fecha al aire
* Año realización
* Trabajo original
* Número episodios
* Duración min
* Content rating
* Rating
* Género
* Tags
* Director
* Screenwriter
* Cast principal
* Producción
* Ranking
* Cantidad_votaciones
* Cantidad premios
* Records
* Buzzworthiness
* Tiempo top1 en Netflix
* Plataforma
* País
* Idioma
* Presupuesto
* Popularidad_internacional
* Fecha_estreno_internacional
* Formato

Quedando así esta tabla: 

| Nombre | Fecha_al_aire | Año_realización | Trabajo_original_de | Número_episodios | Duración_min | Content_rating | Rating | Género | Tags | Director | Screenwriter | Cast_principal | Producción | Plataforma | Ranking | Cantidad_votaciones | Cantidad_premios | Records | Buzzworthiness | Tiempo_top1_Netflix | País | Idioma | Presupuesto | Popularidad_internacional | Fecha_estreno_internacional | Formato |
|--------|--------------|----------------|---------------------|------------------|--------------|----------------|--------|--------|------|----------|--------------|----------------|------------|------------|---------|----------------------|-------------------|---------|----------------|----------------------|------|--------|-------------|---------------------------|-------------------------------|----------|
|        |              |                |                     |                  |              |                |        |        |      |          |              |                |            |            |         |                      |                   |         |                |                      |      |        |             |                           |                               |          |

Los datos de MyDramaList hasta 2023 ya se encuentran recompilados en una base de datos realizada de forma manual en la web Kagge por Ahbab Hossain y otros colaboradores.Utilizaremos muchas de las variables cualitativas y cuantitativas que el escogió y agregaremos nuevas para lograr medir en mayor profundidad las **características en común de los kdramas más populares.**

Esta investigación nos aporta mucha información pues incluso a simple vista nos permite detectar directores, guionistas, o tramas que se repiten mayoritariamente entre los kdramas más populares. Además, nos permite contrastar con la oferta existente el 2023 y la cantidad de votantes en ese entonces versus ahora.

Base de datos de Ahbab: [Top 250 Korean Dramas](https://www.kaggle.com/datasets/ahbab911/top-250-korean-dramas-kdrama-dataset/data).


Para la investigación entonces, combinaremos bases de datos existentes con la que crearemos nosotros para aportarle mayor fundamento estadístico a nuestro reportaje.

## Tercera base de datos

Finalmente, para efectos de este proyeto, se utilizará otra base de datos de elaboración propia, basada en el contenido disponible en la plataforma "Hancinema" https://www.hancinema.net

Para recolectar los datos disponibles dentro de la plataforma, se hará uso del método de "web scraping", tal de poder obtener todos los datos necesarios del portal, evitando el monumental esfuerzo manual de hacerlo.

Ficha del material

### Autor y publicación de los datos

El autor del portal es Cédric Collemine, quien creó el sitio de forma independiente en el año 2003, con el objetivo de proporcionar información sobre los productos audiovisuales surcoreanos, incluyendo películas y series.

### Contenido

El portal (en su apartado de series, el tema del proyecto) esá compuesto por una lista que recopila todos los kdramas desde 1994 hasta la fecha, incluyendo aquellos que se encuentran en emisión y otros que están próximos a salir al aire.

En cada serie se encuentra una serie de informaciones como:

* Año de estreno
* Género
* Dirección y escritura
* Canal donde fue emitido
* Fechas en los que estuvo al aire
* Casting de la serie

Estos constituyen una serie de variables cuantitativos (Años de emisión o de estreno) y cualitativos (Género). Estos datos fueron levantados desde la creación del sitio en 2003 hasta el día de hoy, manteniéndose en constante actualización.

### Pertinencia

Esta base de datos es pertinente ya que conserva una enorme lista de Kdramas a lo largo del tiempo, lo que nos permite abrir la muestra para analizar la "fórmula" de estas series y su propio éxito. Nos sirve dentro del catastro de series que llegamos a hacer, incluyendo sus variables como el género o el año de publicación.

### Metodología

Para el catastro de estos datos, utilizaremos entonces el web scrapping, tal de obtener todas las variables que queremos usar en el proyecto, así también el ahorrar el esfuezo de realizar la misma acción manualmente.