## Fuente de los datos

Todos los datos fueron recopilados por la base: 2016-2025 Kdramas Dataset, donde se basaron en los datos entregados por MyDramaList y Asian Wiki.
https://www.kaggle.com/datasets/jericbustos/2016-2025-kdramas-dataset


## Metodología de la construcción de la base

Para la construcción de esta base de datos se utilizó un archivo CSV ya creado, el cual recopila datos de los K-Dramas estrenados desde el 2016 hasta el 2025. 

Trabajamos sobre la base ya existente, y nos dedicamos a limpiar los datos de todas las variables. Este proceso implicó buscar título por título la disponibilidad de cada K-drama en la plataforma dentro del contexto de Chile y se corrigieron los datos que se encontraban incorrectos de forma manual. Nos dividimos las variables, de forma que cada integrante de nuestro equipo limpió al menos una variable. Por ejemplo, por mi parte limpié y verifiqué la variable de disponibilidad en Amazon Prime Video, y parte de la disponibilidad en Disney+ .

## Alcance de los datos.

El alcance de la base de datos abarca 10 años, desde el 2016 hasta 2025. Este periodo de lanzamientos de K-Dramas permite responder a nuestras preguntas, ya que se evidencia un desarrollo creciente en su expansión en las plataformas de streaming globales.

## Característica de los datos.

Todos los datos utilizados de la base corresponden a información de dominio público.
La base de datos contiene los siguientes tipos de variables:
Datos cualitativos: Títulos de los K-Dramas, nombre de las plataformas disponibles (Netflix, Viki, Prime Video, Disney+)
Datos cuantitativos: Año de estreno, número de episodios, calificaciones de usuarios

## Otras observaciones que tengan sobre la base.

En mi caso, observé que la mayoría de K-Dramas de la base de datos no está disponible en Amazon Prime Video, siendo solo 7 K-Dramas de la base disponibles en la plataforma. 
Por otro lado, la base no incorpora variables de producción como el director o guionista. Quizás esto le aporte mayor datos a nuestro trabajo, pero como objetivo central tenemos lo necesario para construir. 

## Diccionario de datos

| Variable      | Descripción |
| ------------- |:-------------:|
| Título        | Nombre del K-drama, cualitativo     |
| Año           | Año de estreno, cuantitativo    |
| Episodios     | Cantidad de episodios, cuantitativo     |
| Rating        | Calificación de usuarios, cuantitativo     |
| Netflix           | Disponibilidad en Netflix, cualitativo     |
| Viki     | Disponibilidad en Viki, cualitativo     |
| Prime Video        | Disponibilidad en PrimeVideo, cualitativo     |
| Disney Plus           | Disponibilidad en DisneyPlus, cualitativo     |