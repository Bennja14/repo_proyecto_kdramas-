# Documentación técnica de la visualización 

## Objetivo de la visualización

La visualización busca mostrar cómo evolucionaron los ratings promedio de los K-dramas entre 2016 y 2025 según distintas plataformas de streaming, permitiendo comparar tendencias y diferencias entre servicios como Netflix, Prime Video, Disney+ y Viu.


## Herramientas utilizadas

Para el desarrollo del proyecto se utilizaron las bibliotecas pandas y Altair en Python.
- Pandas fue utilizado para la carga, limpieza, transformación y procesamiento de los datos.
- Altair fue utilizado para la creación de la visualización interactiva.

Además, se utilizó la librería Pillow (PIL) para convertir la visualización desde formato PNG a JPG ya que Gemini mencionó que Altair por sí misma no podía hacerlo.


## Procesamiento y limpieza de datos

Primero se cargó la base de datos `2016-2025_Kdramas_dataset.csv` mediante `pd.read_csv()`.

Posteriormente se eliminaron filas con valores nulos en las columnas `release_year` y `ratings` utilizando `dropna()`, con el fin de asegurar que los datos utilizados en la visualización fueran válidos.

Luego se transformaron los tipos de datos de las columnas relevantes:

- `release_year` → entero (`int`)
- `ratings` → decimal (`float`)

Esto permitió realizar correctamente cálculos estadísticos y agrupaciones.

---

## Transformación de plataformas

El dataset original contenía una columna distinta para cada plataforma (`netflix`, `prime_video`, `disney_plus`, `viu`, etc.), utilizando valores “yes” o “no” para indicar disponibilidad.

Para facilitar el análisis y la visualización, se utilizó `pd.melt()` para transformar la base desde un formato ancho a un formato largo. Esto permitió crear una única columna llamada `platform`, que contiene el nombre de la plataforma correspondiente.

Posteriormente se filtraron únicamente los registros donde el valor de disponibilidad era `"yes"`.

## Agregación de datos

Se utilizó `groupby()` junto con `agg()` para agrupar los datos por año y plataforma.

A partir de esto se calcularon dos variables:

- `avg_rating`: rating promedio de los K-dramas.
- `kdrama_count`: cantidad de dramas disponibles por plataforma y año.

El resultado fue almacenado en el DataFrame `ratings_year`, utilizado posteriormente para construir la visualización final.

---

## Construcción de la visualización

La visualización fue desarrollada con Altair utilizando un gráfico de líneas interactivo.

Se definieron codificaciones base para:

- eje X: año de estreno (`release_year`)
- eje Y: rating promedio (`avg_rating`)
- color: plataforma (`platform`)

Además, se incorporó un sistema de tooltips que muestra:

- año
- plataforma
- rating promedio
- cantidad de K-dramas

---

## Elementos interactivos

La visualización incorpora distintas herramientas de interacción para mejorar la exploración de datos:

- Hover interactivo mediante `selection_point()`
- Destacado de líneas al pasar el cursor
- Cambio de grosor y opacidad en la línea seleccionada
- Aparición de puntos destacados sobre la línea activa
- Zoom y desplazamiento mediante `.interactive()`

Estas decisiones permitieron mejorar la legibilidad del gráfico y facilitar la comparación entre plataformas.
