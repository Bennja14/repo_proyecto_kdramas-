# Ficha técnica 

### Fuente de los datos

La base de datos fue publicada en el sitio Kaggle, por Jeric Bustos, actualizada hace 2 meses. Esta se puede encontrar en su formato original en el siguiente link: https://www.kaggle.com/datasets/jericbustos/2016-2025-kdramas-dataset?resource=download


### Metodología de construcción de la base 

La nueva base de datos se realizó en base a la base original. Los únicos cambios fueron la eliminación de una variable (original network) y el reordenamiento de la base en función del rating de los kdramas. Además, se arreglaron problemas de datos duplicados en la base. 

### Alcance de los datos

Los kdramas disponibles en la base nos muestran: 
* El año de emisión
* Plataformas de streaming donde se distribuyen
* Calificación en base a respuestas de usuarios 

### Características de los datos
Según su obtención: Datos de investigación de campo
Según su estado: Procesados 
Según su fuente: Abierta
Según su categoría: Estructurados
Según su naturaleza: Cuantitativos 

### Observación de la base
La única observación que realizo es que el corte se realiza en el período 2016-2025, por lo que se excluye todos los años anteriores y los kdramas estrenados en 2026.

## Diccionario de datos
Las variables incorporadas son: 

| Variable  | Descripción |
| ------------- |:-------------:|
| tittle     | Nombre del Kdrama. Tipo: Cualitativo nominal. Valores: texto libre     |
|    release year   | Año de lanzamiento del K-drama. Tipo: cuantitativo discreto. Valores: años (ej: 2019, 2023, 2025).
| episodes    | Cantidad de episodios. Tipo: cuantitativo discreto. Valores: números enteros positivos.
ratings   | Calificación promedio del K-drama. Tipo: cuantitativo continuo. Valores: escala numérica (ej: 0.0–10.0).
 netlifx | Disponibilidad en Netflix. Tipo: cualitativo nominal (dicotómico). Valores: yes / no.
viki | Disponibilidad en Viki. Tipo: cualitativo nominal (dicotómico). Valores: yes / no.
prime video | Disponibilidad en Prime Video. Tipo: cualitativo nominal (dicotómico). Valores: yes / no.
disney plus | Disponibilidad en Disney+. Tipo: cualitativo nominal (dicotómico). Valores: yes / no.


