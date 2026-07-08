# Análisis de las visualizaciones 

## Gráfico tipo TreeMap sobre cantidad de Kdramas por cada plataforma

Este gráfico contiene la cantidad de kdramas que posee cada plataforma de streaming dentro de su catálogo de visualización. Se muestra cada plataforma de streaming como un bloque, donde su tamaño va de acuerdo a la cantidad de kdramas que poseen en su catálogo, además de estar coloreadas con el color característico de su marca. 

La principal dimensión que abarca es cuantitativa, esto debido a que analiza la cantidad de kdramas que tiene cada plataforma de streaming, tal de poder observar a simple vista qué plataforma concentra la mayor cantidad de series en el panorama actual. 

El mensaje que se busca comunicar es no solo que Viki contiene la mayor cantidad de kdramas en su catálogo (como es el caso), sino también mostrar la oferta inmensa de kdramas que hay disponible en una oferta inmensa de plataformas de streaming, lo que nos permite concluir que el panorama de los kdramas en este tiempo se da casi que exclusivamente en el streaming, y que las plataformas juegan un papel importantísimo en la distribución de kdramas a nivel global.

## Gráfico de Kdramas por año 

Este gráfico de barras muestra la cantidad de kdramas que se han hecho por año, abarcando desde 1962 hasta el 2025, esto considera el año de su primera emisión. 

La dimensión que abarca este gráfico es la temporal, ya que permite observar a simple vista la cantidad de kdramas que se han realizado año por año, lo que nos permitiría concluir en qué año se ha realizado la mayor cantidad de kdramas, además de que nos permite visualizar perfectamente las olas coreanas o Hallyu, especialmente en los años de pandemia, donde la producción y emisión de kdrams se disparó. 

En ese sentido, el mensaje que busca mostrar este gráfico es que la producción de kdramas ha ido en ferviente ascenso, especialmente a partir del año 2010 y aún más pronunciada en la época de pandemia, donde el consumo de kdramas se disparó, así como su producción. Además, nos permite ver un fenómeno muy interesante, y es que después de pandemia, a partir del año 2022, la producción de kdramas se redujo considerablemente, lo que es muy interesante viendo el panorama desde donde venían los kdramas en esos años. 

## Chart sobre términos Hallyu en Chile 

El gráfico contiene palabras vinculadas al Hallyu en Chile con la herramienta de Google Trends, donde se busca mostrar la evolución del interés de los usuarios chilenos en el tiempo. Se comparan las búsquedas de estos términos representativos como BTS, Idioma coreano, Drama coreano, K-pop, Korean cuisine (Cocina coreana), Bias y Manhwa, evidenciando las distintas expresiones de la cultura surcoreana. El índice de interés va de 0 a 100. El valor 100 representa el momento de mayor popularidad registrado entre todos los términos comparados en Chile. Los demás valores son relativos a ese máximo.

Su dimensión que se quiere comunicar es la temporal, ya que se observa cómo cambian las tendencias de búsqueda entre 2004 y 2026, siendo el primero el año en que comenzó a registrarse el análisis de tendencias en la herramienta de Google. Con esto, se puede comprender que la llegada de los K-Dramas en el país fue parte de un proceso amplio de difusión cultural y que ha crecido progresivamente.

En cuanto a los hallazgos, podemos ver que el interés por Corea del Sur aumenta progresivamente desde 2013 en adelante, coincidiendo con la tercera ola coreana. Palabras como Manhwa comienzan a ganar presencia en los últimos años, con su índice más alto de 84 en febrero de 2025, lo que refleja una expansión del consumo hacia otras industrias culturales coreanas. Términos como Korean cuisine o Bias presentan niveles de búsqueda menores, aunque igualmente evidencian que el fenómeno va acompañado de la música, las series y de distintas expresiones.

## Gráfico Kdramas Vs Series Occidentales

La visualización fue desarrollada utilizando la plantilla Bar Chart Race de Flourish. Se procesó la información obtenida desde Google Trends en Excel y archivo CSV.

La base original entregada por Google Trends contenía el índice de interés de las seis series, pero posteriormente los datos fueron reorganizados para adaptarse al formato requerido por el Chart de Flourish.

Después se exportó la tabla en formato CSV UTF-8 y se subió a la base de la plantilla de Flourish asignando: Label como los nombres de las series y Values como las columnas correspondientes a cada fecha.
Al final se personalizó los colores, con tal de que sea una categorización por K-Drama y por serie occidental, la animación, etiquetas y tipografía a Hahmlet para facilitar la lectura del gráfico y para que esté alineado a nuestra identidad visual.

Posteriormente, se publicó en Flourish para que nos entregara un código, y con ello fue incrustado en la página web.

Esta visualización compara la popularidad de tres K-Dramas: True Beauty, Juego del Calamar y Propuesta Laboral, con tres series occidentales: Game of Thrones, Euphoria y The Mandalorian, utilizando datos de Google Trends en Chile.

El índice de interés va de 0 a 100. El valor 100 representa el momento de mayor popularidad registrado entre todas las series comparadas en Chile. Los demás valores son relativos a ese máximo.

La dimensión principal es temporal y permite observar cómo evolucionan las búsquedas de cada serie desde 2020 hasta 2026 y comparar su comportamiento.
Buscamos transmitir que los K-Dramas ya no ocupan un espacio de nicho, sino que han logrado competir por la atención del público chileno con producciones occidentales ampliamente reconocidas.
La comparación muestra que las series occidentales mantienen un interés sostenido. Sin embargo, los K-Dramas presentan momentos de alta popularidad que igualan e incluso superan temporalmente a estas producciones.

El caso más evidente es el Juego del Calamar, que alcanza el índice máximo de Google Trends (100) durante su tiempo de recién estreno, posicionándose por encima de las series consideradas en ese período. Asimismo, True Beauty y Propuesta Laboral registran aumentos relevantes durante sus lanzamientos, evidenciando que los K-Dramas generan búsquedas significativas entre los usuarios chilenos.

## Gráfico de líderes en distribución de Kdramas 

Esta visualización compara el volumen de K-Dramas distribuidos por las principales plataformas y cadenas de televisión, utilizando registros históricos de la plataforma MyDramaList.

Buscamos transmitir que, a pesar de la fuerte irrupción de las plataformas de streaming occidentales en el mercado global, el liderazgo real de la producción y de los catálogos sigue perteneciendo firmemente a las empresas tradicionales de Corea del Sur.

La comparación muestra que las corporaciones coreanas como MBC, SBS y KBS2 tienen la mayor cantidad de títulos del mercado. Esto evidencia que el motor central de la industria se mantiene en su país de origen, posicionando a las multinacionales occidentales más como aliadas de difusión que como dueñas del fenómeno cultural.

La visualización fue desarrollada utilizando la plantilla Treemap de Flourish. El proceso de generación detallado fue el siguiente:
- Extracción (Web Scraping): Se obtuvieron los datos brutos del catálogo de K-Dramas directamente desde la plataforma MyDramaList mediante un script automatizado.
- Procesamiento en Excel: La información se organizó en Excel utilizando una tabla dinámica para agrupar y contar la cantidad exacta de dramas que posee cada distribuidor.
- Carga en Flourish: Se subió la tabla limpia a Flourish, asignando los nombres de las cadenas como etiquetas (Label) y el volumen de series como los valores (Values).
- Personalización: Se aplicó una paleta de colores para categorizar visualmente a las empresas nativas coreanas frente a las occidentales. También se configuraron las animaciones, etiquetas y se adaptó la tipografía corporativa para alinearla a nuestra identidad visual.
- Publicación: Finalmente, se publicó el gráfico en Flourish para obtener el código embed, el cual se incrustó directamente en la página web.

<div class="flourish-embed flourish-hierarchy" data-src="visualisation/29540377"><script src="https://public.flourish.studio/resources/embed.js"></script><noscript><img src="https://public.flourish.studio/visualisation/29540377/thumbnail" width="100%" alt="hierarchy visualization" /></noscript></div>
