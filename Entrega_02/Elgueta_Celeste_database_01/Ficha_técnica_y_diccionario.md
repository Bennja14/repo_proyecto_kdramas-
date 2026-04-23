
## Ficha técnica y diccionario de datos 

### **Fuente de los datos**  
https://www.kaggle.com/datasets/jericbustos/2016-2025-kdramas-dataset  

MyDramaList, Asian Wiki, Netflix, Prime Video, Rakuten Viki, HBO Max y Apple TV.


### **Metodología de la construcción de la base**  

Para la construcción de esta base de datos se utilizó un archivo CSV previamente creado, el cual recopila información sobre K-Dramas estrenados entre 2016 y 2025.  

A partir de esta base, se realizó un proceso de limpieza de datos, corrigiendo manualmente errores detectados en distintas variables. Este trabajo se dividió entre los integrantes del equipo, quienes se encargaron de depurar información específica y complementar la base con nuevas variables relevantes para el análisis.  


### **Alcance de los datos**  

La base de datos abarca K-Dramas estrenados entre los años 2016 y 2025, permitiendo analizar tanto producciones tradicionales como aquellas vinculadas al auge de las plataformas de streaming.  

Las variables consideradas incluyen: título (`title`), año de estreno (`release_year`), número de episodios (`episodes`), rating (`ratings`), cadena de emisión original (`original_network`) y disponibilidad en plataformas de streaming como Netflix, Viki, Prime Video, Disney+, HBO Max y Apple TV.  

Además, se incorpora la variable de **disponibilidad en Chile**, lo que permite situar el análisis en un contexto local y evaluar el acceso real a estos contenidos por parte de la audiencia chilena.  

Este conjunto de variables permite estudiar la relación entre distribución en plataformas, características de producción y niveles de popularidad, en línea con la hipótesis del proyecto.


### **Características de los datos**  

Todos los datos utilizados corresponden a información de dominio público.  

La base de datos contiene los siguientes tipos de variables:  

- **Datos cualitativos:** títulos de los K-Dramas, nombre de las plataformas disponibles (Netflix, Viki, Prime Video, Disney+, HBO Max, Apple TV), cadena de emisión original.  
- **Datos cuantitativos:** año de estreno, número de episodios, calificaciones de usuarios.  


### **Otras observaciones sobre la base**  

Al abarcar un periodo amplio de tiempo, la base permite observar la evolución de la industria audiovisual coreana, especialmente en relación con la creciente participación de plataformas de streaming en la producción y distribución de contenidos.  

Se evidencia la incorporación progresiva de actores globales como Netflix, Disney+ y Prime Video, lo que marca una diferencia significativa respecto a la industria de hace una década.  

Esto refuerza la idea de que la expansión internacional de los K-Dramas está estrechamente vinculada a los cambios en los modelos de distribución y consumo audiovisual.

### **Diccionario de datos 
| Variable | Descripción | Tipo de Dato | Valores Posibles | Observaciones Editoriales |
| :--- | :--- | :--- | :--- | :--- |
| `title` | Nombre oficial del drama coreano. | Texto (String) | Nombre del título | - |
| `release_year` | Año en que la producción fue estrenada originalmente. | Entero (Integer) | 2016 - 2025 | - |
| `episodes` | Cantidad total de episodios que componen la obra. | Entero (Integer) | Números positivos | - |
| `ratings` | Calificación promedio otorgada por los usuarios en una escala de 1 a 10. | Decimal (Float) | 1.0 - 10.0 | Fuente: MyDramaList. |
| `original_network` | Cadena de televisión o plataforma donde se emitió originalmente en Corea. | Texto (String) | SBS, JTBC, tvN, MBC, KBS1, etc. | Rellenado con apoyo de IA y corroborado manualmente. |
| `netflix` | Indica la disponibilidad del título en el catálogo de Netflix. | Categórico | yes / no | - |
| `viki` | Indica la disponibilidad en la plataforma Rakuten Viki. | Categórico | yes / no | Reemplaza a "Viu" por tener mayor impacto en el mercado chileno. |
| `prime_video` | Indica la disponibilidad en Amazon Prime Video. | Categórico | yes / no | - |
| `disney_plus` | Indica la disponibilidad en Disney+. | Categórico | yes / no | - |
| `hbo_max` | Indica la disponibilidad en HBO Max. | Categórico | yes / no | Variable incorporada durante la limpieza para ampliar el alcance. |
| `apple_tv` | Indica la disponibilidad en Apple TV. | Categórico | yes / no | Variable incorporada durante la limpieza para ampliar el alcance. |
| `disponible_en_chile`| Determina si el contenido es accesible desde Chile sin herramientas adicionales (VPN). | Categórico | yes / no | Validado manualmente y mediante Gemini para el catálogo local. 
