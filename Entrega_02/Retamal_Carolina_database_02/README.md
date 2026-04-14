# Documentación

## Historial de procesos y decisiones

La base de datos que usamos abarca los K-Dramas lanzados entre los años 2016 y 2025, donde incluye las siguientes variables: nombre del K-Drama, año de lanzamiento, número de episodios, calificaciones de usuarios, y su disponibilidad en cuatro plataformas de streaming global, Netflix, Viki, Amazon Prime Video y Disney+. Todos estos datos corresponden a una recopilación de datos de las páginas AsianWiki y MyDramaList -bases de datos online dedicadas a las películas y series asiáticas-, siendo esta última donde se identificaron las calificaciones agregadas por una comunidad de usuarios.

El proceso de limpieza que realicé corresponde a la variable de disponibilidad en la plataforma Amazon Prime Video, la cual fue trabajada de manera manual.

Al analizar la base de datos que encontramos, se identificó un problema en los datos entregados por la variable de Prime Video, pues estaban sin verificar y no coincidían con la disponibilidad real de cada K-Drama en la plataforma. Como la disponibilidad de películas y series en las plataformas de streaming varía según el país en que uno está, se tomó la decisión de verificar si realmente se encuentra disponible en Chile.

Es por esto que se definió que esta variable sólo marcaría el K-Drama como “yes” si el título podía ser encontrado en la plataforma de Prime Video y si se podían ver sus episodios. Asimismo, se marcaría “no” si el K-Drama no se encontraba en la plataforma, si no se podían acceder a los episodios porque no está disponible en el país y si se encontraba con los derechos caducados. Todo esto desde una cuenta con acceso a la plataforma pagada en el país en el momento de la verificación. 

Ya en el proceso de búsqueda, se hizo título por título de forma manual de acuerdo a los K-Dramas que aparecen en la base de datos. Se registró si el K-Drama aparecía disponible para su reproducción o lo contrario. Esto fue aplicado a la totalidad de títulos de la base.

Durante el proceso de verificación, se identificó que ningún K-Drama lanzado durante y antes del año 2020 se encuentra disponible en Amazon Prime Video Chile, ya que el primer título disponible en la plataforma corresponde a Mouse, estrenado el 3 de marzo de 2021. Esto es un dato relevante para nuestro análisis respecto a las plataformas de streaming globales. En total, se encontraron 7 K-Dramas disponibles en la plataforma, lo que permite registrar lo que efectivamente existe en ese universo.

## Fuente de datos utilizada

**Plataforma oficial de Amazon Prime Video https://www.primevideo.com/**

Fue elegida porque se optó por la consulta directa a los contenidos de la plataforma oficial de la variable, de tal manera que era la única forma de garantizar que el dato evidencia la disponibilidad real y actual para cualquier usuario que acceda en Chile. Otras fuentes como Wikis donde aparece la disponibilidad del K-Drama en ciertas plataformas pueden ser útiles, pero se decidió ir directamente a la fuente principal que responde a lo que se busca.

**Base de datos de K-Dramas 2016-2025**

Fue elegida porque responde justamente a nuestra necesidad de acceder a variables importantes como la disponibilidad de K-Dramas en sitios de streaming globales. En base a estos datos se construyó el universo en el que trabajaremos como equipo, donde cada uno realizó su propia verificación a la variable que cada uno escogió. En mi caso, hice la limpieza de la variable de Prime Video. 

Preguntas que se pueden responder
1. ¿A partir de qué año comenzó Prime Video Chile a incluir K-Dramas en su catálogo?
2. ¿Cómo ha evolucionado la presencia de K-Dramas en plataformas de streaming en Chile entre 2016 y 2025?
3. ¿Qué plataforma concentra la mayor cantidad de k-dramas disponibles en Chile: Netflix, Viki, Prime Video o Disney+?
