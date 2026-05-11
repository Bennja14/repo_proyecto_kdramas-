# Ficha técnica de la base de datos

## Nombre de la base de datos

2016-2025_Kdramas_dataset.csv

## Descripción general

Base de datos sobre K-dramas estrenados entre 2016 y 2025. El dataset reúne información relacionada con ratings, años de estreno y disponibilidad en distintas plataformas de streaming, permitiendo analizar tendencias de distribución y evaluación de las producciones coreanas durante la última década.


## Características de los datos

- Formato original: CSV
- Cobertura temporal: 2016–2025
- Unidad de análisis: K-drama individual
- Tipo de datos:
  - Numéricos (ratings, año)
  - Categóricos (plataformas)
  - Texto (títulos y otros metadatos si corresponde)

La base fue procesada y limpiada previamente para eliminar valores nulos en las variables utilizadas para la visualización.

## Variables incorporadas

| Variable | Descripción |
|---|---|
| release_year | Año de estreno del K-drama |
| ratings | Rating promedio asociado al K-drama |
| netflix | Indica disponibilidad en Netflix (“yes” / “no”) |
| prime_video | Indica disponibilidad en Prime Video (“yes” / “no”) |
| disney_plus | Indica disponibilidad en Disney+ (“yes” / “no”) |
| viu | Indica disponibilidad en Viu (“yes” / “no”) |

## Variables generadas durante el procesamiento

| Variable | Descripción |
|---|---|
| platform | Plataforma de streaming asociada al K-drama luego de transformar la base a formato largo |
| avg_rating | Rating promedio calculado por año y plataforma |
| kdrama_count | Cantidad de K-dramas disponibles por plataforma y año |


## Observaciones sobre la base de datos

- La disponibilidad en plataformas se registra mediante valores binarios de texto (“yes” y “no”).
- Algunas plataformas poseen menos registros que otras, lo que puede afectar la comparación entre servicios.
- Para el análisis se eliminaron registros con valores nulos en las columnas `release_year` y `ratings`.
- La base fue transformada desde un formato ancho a formato largo para facilitar el análisis comparativo entre plataformas.
- Los ratings utilizados corresponden a promedios presentes en el dataset original y no fueron recalculados individualmente.