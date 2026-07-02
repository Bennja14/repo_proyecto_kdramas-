# Ficha técnica de visualizaciones 

## **Chart sobre términos Hallyu en Chile**: 

**Características de los datos**

La base de datos fue construida utilizando Google Trends con ubicación en Chile, y así comparar la evolución del interés relativo de distintos términos asociados a la Ola Coreana (Hallyu) entre 2004 y 2026.

Google Trends incluye datos de búsquedas en Google desde el año 2004, por lo que de igual manera calza con la internacionalización de Ola Coreana. Nos entrega un índice entre 0 y 100, donde 100 representa el momento de mayor popularidad registrado para alguno de los términos comparados durante el período seleccionado.

**Variables incorporadas**

- Fecha: Registro mensual

- BTS: Índice de interés relativo de las búsquedas del grupo BTS.

- Coreano: Índice relativo de búsquedas del idioma coreano.

- Drama coreano: índice relativo de búsquedas de dramas coreanos.

- K-Pop: índice relativo de búsquedas de la música pop coreana.

- Korean cuisine: Índice relativo de búsquedas relacionadas con gastronomía coreana.

- Bias: índice relativo de búsquedas relacionadas al término “Bias”.
- Manhwa: índice relativo de búsquedas relacionadas a los cómics originarios de Corea del Sur.

**Observaciones**

Los datos muestran que el interés por la cultura coreana en Chile ya estaba presente desde los primeros registros disponibles de Google Trends en 2004, especialmente mediante búsquedas relacionadas con el idioma.

A partir del 2010 el crecimiento comienza a acelerarse, observándose aumentos importantes en las búsquedas de K-Dramas y K-Pop. El mayor índice de toda la base corresponde a BTS, que alcanza el valor 100 en abril de 2026.

Los resultados muestran que el crecimiento del interés por Corea del Sur no responde a un único fenómeno, sino a la expansión conjunta de música, televisión, gastronomía y entretenimiento

## Gráfico Kdramas Vs Series Occidentales 

**Características de los datos**

La base de datos fue construida utilizando Google Trends con ubicación en Chile, y así comparar la evolución del interés relativo entre tres K-Dramas y tres series occidentales.

El período analizado comprende desde enero de 2020 hasta junio de 2026. Los valores son el índice relativo de Google Trends (0-100), por lo que representan popularidad comparativa entre las búsquedas.

**Variables incorporadas**

- Fecha: Registro mensual

- Juego del Calamar: K-Drama con índice de interés relativo.

- True Beauty: K-Drama con índice de interés relativo.

- Propuesta Laboral: K-Drama con índice de interés relativo.

- Game of Thrones: Serie occidental con índice de interés relativo.

- The Mandalorian: Serie occidental con índice de interés relativo..

- Euphoria: Serie occidental con índice de interés relativo.

**Observaciones**

La comparación muestra que las series occidentales mantienen un interés constante durante gran parte del período analizado. Y en contraste, los K-Dramas presentan incrementos mucho más pronunciados durante sus estrenos internacionales.
El principal hallazgo corresponde al Juego del Calamar, que alcanza el índice máximo de Google Trends (100) en octubre de 2021, convirtiéndose en el mayor nivel de interés registrado entre las producciones comparadas.
True Beauty y Propuesta Laboral muestran que el interés por los K-Dramas no es un fenómeno aislado, sino que distintos títulos coreanos tienen peso y logran competir con series occidentales ampliamente conocidas.

## Gráfico de Kdramas por año 

**Características de los datos**

El gráfico fue hecho a través de Google Colab con lenguaje Phyton, ocupando daatos de un webscrapping del sitio MyDramaList, abarcando kdramas desde el año 1962 hasta el 2025. 

Este webscrapping incluía el título del kdrama, su fecha de emisión, su plataforma y productoora original y la plataforma de streaming donde se puede visualizar. Para la creación de este gráfico, se utilizaron únicamente las variables de título de kdrama y fecha de emisión, de donde se extrajo el año de su primera emisión para ocuparlo como la variable del año

**Variables incorporadas** 

- Título del kdrama: Nombre de cada kdrama presente en la base de datos 
- Year (Año): Año de su primera emisión 

**Observaciones**

El gráfico nos permite visualizar que, desde 1962, ha existido un alza sostenido de producción y emisión de kdramas a lo largo de las últimas décadas, llegando a su punto máximo en el año 2021, en plena pandemia, lo que nos muestra que la industria del kdrama es una industria en alza hasta el día de hoy. 

Además, nos permite ver un fenómeno interesante acerca de la caída que sufrió la producción y emisión de kdramas a partir del 2022, donde en 2025 cayeron hasta casi la mitad de lo que se había producido en 2021, lo que nos puede dar luces acerca de cómo se ha comportado la industria de los kdramas luego de su boom en 2021. 

## Gráfico tipo TreeMap sobre cantidad de Kdramas por cada plataforma

**Características de los datos** 

La base de datos fue hecha a partir de un webscrapping en el sitio MyDramaList, de donde se recolectaron más de 4 mil kdramas junto a su fecha de emisión, su plataforma y productora original y la plataforma de streaming en la que se encuentra disponible.

**Variables incorporadas**

- Plataforma: Cada plataforma de streaming que tiene, a lo menos, un kdrama de la base de datos en su catálogo de visualización 
- Cantidad de kdramas: Aquí se contabilizaron todos los kdramas que están disponibles en cada plataforma. Como hay kdramas diponibles en más de una plataforma, la cantidad final de datos en el gráfico es mayor a la cantidad de datos originales

**Observaciones** 

El gráfico nos permite mostrar, en primera instancia, que VIki es la plataforma que más kdramas posee en su catálogo, seguido por otras grandes plataforams como Kocowa, Disney+ o Netflix, además, destaca la cantidad de plataformas, ya que existen muchas que poseen apenas un solo kdrama, pero que igualmente existen. 

Bajo esa misma línea, destaca la cantidad de kdramas que tienen las plataformas de streaming, además de la mencionada vasta oferta de plataformas, lo que nos permite concluir que el streaming capitaliza la distribución de kdramas a nivel global, además de la diversidad de kdramas repartidos en diferentes plataformas. 

## Gráfico de líderes de distribución por Kdrama

**Características de los datos** 

La base de datos recopila el volumen histórico de series distribuidas por cada entidad, permitiendo analizar la concentración y el peso real de la industria local coreana frente a la internacional.

- Origen de los datos: Web scraping de MyDramaList.

- Formato visual: Gráfico de árbol jerárquico (Treemap).


**Variables incorporadas**

- Distribuidor: Cadena o plataforma de televisión (ej. MBC, SBS, KBS2 vs. plataformas occidentales).
- Volumen de K-Dramas: Cantidad total de series alojadas o distribuidas por cada entidad.

**Observaciones**

La disposición del Treemap permite ver de forma instantánea que los bloques de mayor tamaño corresponden a las señales tradicionales coreanas (MBC, SBS y KBS2). Esta proporción demuestra visualmente que el volumen acumulado de la industria local supera con creces los catálogos de los servicios occidentales, confirmando que la soberanía de la oferta global de K-Dramas sigue estando en Corea del Sur.
