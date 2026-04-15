<<<<<<< Updated upstream
## Hipótesis actual: 

Las plataformas de streaming han sido un factor clave en la globalización de los K-Dramas.

## Preguntas de investigación actuales:

¿Qué cadenas de distribución o plataformas concentran una mayor cantidad de k-dramas? Y de estas, ¿cuáles tienen los k-dramas con mejor rating? - ¿Cuántos k-dramas distribuidos por Netflix superan las 9 estrellas de rating?

## Avance de su proyecto en relación con la hipótesis y preguntas de investigación: 

A partir de la base de datos, logramos ordenar y categorizar los datos sobre la distribución y producción de los K-Dramas, facilitando la identificación de datos claves sobre las cadenas de emisión y transmisión.

## Síntesis de la historia

Dado el auge de las producciones audiovisuales de la industria audiovisual de entretenimiento coreano, nuestra investigación plantea que estas producciones se han consagrado en el mercado global gracias a su difusión por diversas plataformas de streaming, accediendo a ellas una cantidad elevada de televidentes de todas partes del mundo.

Nuestra investigación se enfoca en analizar el proceso de su consagración como un fenómeno cultural y comercial a escala global. Esto, debido al innegable y sostenido auge de las producciones audiovisuales provenientes de la industria del entretenimiento surcoreano por la "ola coreana" o conocido como Hallyu.

Este éxito ha sido impulsado y consolidado por su estrategia de difusión. Específicamente, el rol catalizador de las plataformas de streaming global, entre ellas Netflix, Disney+ y Prime Video, ha sido decisivo.

Estas plataformas han actuado como puentes de acceso masivo e inmediato, eliminando barreras geográficas y temporales. Esta distribución digital estratégica ha permitido que el contenido coreano trascienda nichos de audiencia y se posicione ante una cantidad elevada y heterogénea de televidentes de todas partes del mundo. La accesibilidad facilitada por el streaming, que incluye la provisión de subtítulos y doblajes en múltiples idiomas, ha sido clave para la democratización de su consumo y la transformación de la producción audiovisual coreana en un producto de consumo cultural verdaderamente globalizado.
=======
# Historial de procesos y decisiones

Para este proyecto, se seleccionó una base de datos de **Kaggle** que incluía las siguientes variables iniciales:

* **title:** Nombre del drama coreano.
* **release_year:** Año de estreno (2016-2025).
* **episodes:** Número total de episodios.
* **ratings:** Calificación promedio de los usuarios (escala 1-10).
* **netflix / viu / prime_video / disney_plus:** Disponibilidad en dichas plataformas (yes/no).

**Decisiones y ajustes del catálogo:**
Elegimos esta base debido a que sus variables son fundamentales para nuestro reportaje sobre el consumo de *streaming*. No obstante, determinamos que los datos requerían una actualización y ampliación. En primer lugar, sustituimos la variable “Viu” por **Rakuten Viki**, dada su mayor relevancia y presencia en el mercado chileno. 

Posteriormente, realizamos una verificación manual de la disponibilidad de los títulos en Chile, ya que la base original no especificaba la región geográfica de la oferta. Para mejorar el análisis, incorporé dos nuevas plataformas de *streaming* y utilizamos **Gemini** para contrastar la disponibilidad de los catálogos en el territorio nacional (sin uso de VPN).

**Desafíos técnicos y herramientas:**
Durante la recolección, intenté aplicar técnicas de **web scraping** para obtener la métrica de *watchers* (espectadores) en MyDramaList. Sin embargo, el sitio bloqueó el acceso con un **error 403**, identificando la actividad como automatizada. Tras evaluar este problema y la naturaleza cambiante del dato, decidí descartar esta variable por su complejidad de mantenimiento y menor peso en la investigación. De igual forma, intenté extraer datos sobre la cantidad de idiomas de doblaje y subtitulado, pero las plataformas de *streaming* presentaron bloqueos similares. 

Finalmente, opté por fortalecer la variable **original_network** (cadena de origen), la cual completé con apoyo de **Gemini** y validé manualmente, resultando ser uno de los indicadores más útiles para el reportaje final.

***

* **MyDramaList (MDL) y AsianWiki (AW):** Seleccionadas por su amplio volumen de información y por ser las referencias principales para los aficionados a nivel global.
* **Rakuten Viki:** Utilizada como fuente directa para validar la existencia de títulos, resolviendo discrepancias de nombres causadas por conflictos de traducción.
* **Otras fuentes consideradas:** Durante la investigación exploramos **FUNdex** para monitorear el *BuzzWorthiness* (tendencias), pero se descartó como fuente principal por estar orientada mayoritariamente al público coreano, lo que representaba una limitante para el enfoque local de nuestro trabajo.

***

A partir de la base de datos limpia, es posible responder preguntas:

1. ¿Qué plataforma de streaming lidera actualmente la oferta de distribución de K-dramas en Chile?
2. ¿En qué servicio de streaming se alojan los contenidos con las valoraciones más altas por parte de los usuarios?
3. ¿Qué cadenas de televisión o productoras coreanas son las que logran exportar una mayor cantidad de contenido a las plataformas globales?
>>>>>>> Stashed changes
