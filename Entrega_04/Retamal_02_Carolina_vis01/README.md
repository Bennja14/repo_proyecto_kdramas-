# Explicación y base de datos CSV

Para la visualización, utilicé la base de datos de la entrega pasada, compuesta por una lista de K-Dramas producidos entre 20216 y 2025, además de su disponibilidad en plataformas de streaming en Chile.

El proceso lo comencé con una selección de las variables para responder a mi incógnita relacionada al crecimiento de la disponibilidad en el streaming en Chile y averiguar si hay una diferencia pre-pandemia y post-pandemia. Eliminé todas las columnas que estuvieran fuera de lo que son las plataformas, inclusive los nombres de los K-Dramas. Dejé solo el año de lanzamiento, netflix, viki, prime video y disney+.

Inicialmente quería hacer (e hice) un gráfico que respondiera a la cantidad de K-Dramas lanzados cada año, pero fue en ese momento en que me dí cuenta que había un alza en su distribución después de la pandemia, por lo que quería saber si realmente existía o no una relación, y tenía oportunidad de saberlo por su disponibilidad en el streaming, ya que estos servicios se consumieron aún más por la pandemia.

Como ya había hecho el proceso en el gráfico que hice de la cantidad de K-Dramas por año, ya no se me hizo tan difícil entender ciertas instrucciones, pero aún así hubieron cosas que me costó arreglar.

Procesé la base de datos con PANDAS, importé altair para después usar el gráfico y también importé el archivo. Después quería hacer correr el archivo CSV pero me tiraba a error. Según Gemini, me decía que era porque el archivo estaba delimitado por punto y coma y no por coma, y según lo que yo recordaba sí estaba por coma. Estuve varios minutos tratando de descifrar el error, hasta que fui a la configuración del archivo, y efectivamente estaba delimitado por punto y coma, así que lo arreglé con lo que me sugería Gemini: sep=’;’. Lo ejecuté y me funcionó.

Después hice otra casilla para hacer la limpieza de datos. En otra casilla empecé a configurar el código con la sugerencia de Gemini al usar ‘melt’, transformando mis columnas en nuevas filas. Con ayuda de Gemini logré hacer este paso: con is_vars se le pide que no se transforme la columna de años, pero cada plataforma ahora tendrá su propia fila, convirtiendo con value_vars netflix, viki, prime video y disney+. Esta nueva columna que incluye lo anterior se nombra “plataforma”. Además, se crea una nueva columna que tenga los valores que estaban antes en su disponibilidad.

El código que sigue es porque quiero que solo cuente aquellas columnas que diga “yes”/sí, para que se muestren los K-Dramas disponibles en cada plataforma.

Aquí también le pedí ayuda a Gemini, para que me agrupe estos datos en una nueva columna llamada plataformas_por_ano. De tal manera, me dio el número de K-Dramas disponibles en cada plataforma por cada año.

Hice una casilla para cambiar los nombres, pensaba que era para que se vea mejor. Busqué en Altair un stacked bar chart, porque me servía para comparar las variables y dividirlas por colores. Seguí trabajando en el código del gráfico que me daba Altair, pero al correrlo, no se procesaban los datos en el gráfico y, además, me tiró a error la celda anterior, en la del cambio de nombres. Otra vez recurrí a Gemini porque no entendía en qué me había equivocado. Resultó que fue porque la columna tenía nombres en minúsculas y el gráfico me pide que sea la inicial en mayúscula. 

Tenía miedo de que no funcionara otra vez, así que necesitaba verificar que todo estuviera correcto, y recurrí a la opción de df.head() para revisar si los datos estaban bien.

Y lo estaba, así que seguí trabajando en el gráfico con la base de altair. alt.Chart es para usar el dataset, pero esta vez le indico que use el gráfico de los datos de ‘plataformas’, y el mark_bar para el gráfico de barra. El eje X es de la variable ‘release_year’ para los años, y se le cambia el nombre a ‘Año’. Lo mismo para el eje Y, es la variable de ‘count’ para la cantidad de K-Dramas de forma cuantitativa, y se cambia el nombre a ‘Cantidad de K-Dramas’. Para el color, busqué colores representativos de cada plataforma. Quería probar con los códigos de los colores, por lo que Netflix lo dejé como ‘red’ y los demás busqué los códigos. Para el de Prime Video ocupé morado, porque el color de la plataforma es del tono celeste y azul, y ya Viki y Disney+ ocupan aquellos tonos derivados. Ocupé la página Color Hex. Por otro lado, en el gráfico anterior también intenté agregar una herramienta interactiva y sí me funcionó, así que acá quería hacer lo mismo. Agregué en Tooltip información que aparece si uno pasa el cursor sobre la barra: mostrando el año, la plataforma y la cantidad de K-Dramas de esa barra. Además, le añadí propiedades para establecer el título del gráfico, el ancho y alto de las barras del gráfico.

Por último, le pedí que me exportara la visualización en HTML. Lo intenté con JPG pero no me funcionó, así que guardé la imagen en PNG y la convertí.

# Preguntas posibles

* ¿Existe un aumento de disponibilidad de K-dramas después de la pandemia del COVID-19?
* ¿Qué años concentran una mayor cantidad de K-dramas disponibles en Chile?
* ¿Cómo evolucionó la disponibilidad de K-dramas en plataformas de streaming entre 2016 y 2025?