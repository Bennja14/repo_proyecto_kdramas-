# Documentación 

## Historial de decisiones 

Primero, se carga base de datos original y se crea una copia donde se trabajará la limpieza. La base de datos original será adjuntada en la entrega. 

### Proceso de limpieza
1. Se visualiza las columnas existentes dentro de la base. Considerando la existencia de: Título, año de estreno, episodios, rating. Disponibilidad en Netflix, Viki, Prime Video y Disney Plus; y canal original de emisión. 
2.  Se elimina columna "original_network", ya que se enfocará en las cuatro plataformas de streaming apuntadas en la base. Esto se hace directamente en la base.
3. Se cambia el orden de los Kdramas en función del rating, de mayor a menor. Esto con el propósito de valorar el impacto de las series en base a su calificación y no ordenarlas por año.
4. Se elimina casilla repetida del kdrama "Love ft. Marriage & Divorce Season 2". Para evitar confusiones y errores con dos datos iguales. Además, el segundo dato (el erróneo) contenía información errada del kdrama en cuestión.
5.  Se verifica la real existencia de cada kdrama en su respectiva plataforma, tal de no contar con datos en falso. Esto se hace manualmente, verificando la existencia de cada kdrama en las páginas de las plataformas, y luego anotando si existe o no, cambiando en cada casilla de las cuatros plataformas mencionadas en la base.
6. Se mantienen los nombres de los kdramas en inglés, respetando el nombre comercial y más distribuido de la serie. 
7. Se mantiene el paréntesis "Korean Drama" en ciertos títulos que pueden prestarse a confusión con otras series o películas internacionales del mismo nombre.
7. Finalmente, se verifica el correcto orden de columnas y datos dentro de la base, para verificar que los pasos anteriores se hicieron correctamente.
8. Se transforma el formato de la base de datos. Se pasa del formato Excel a formato .csv, tal de cumplir con el formato requerido. 

Para la limpieza y orden de los datos, se usó la herramienta de inteligencia artificial Claude, específicamente en el paso 2, para garantizar la correcta consecución del paso, y en el paso 7, para realizar una correcta transformación del archivo.

En cuanto a los demás pasos, todos se realizaron dentro de la misma base de datos en su formato Excel, antes de ser transformado. 


### Fuentes de datos utilizadsos

Los datos de la base fueron recopilados de dos páginas: AsianWiki y MyDramaList, realizando el corte en los años 2016-2025 y recolectando los datos del rating de cada kdrama, basado en las calificaciones de los usuarios. Cabe aclarar que la fuente explicita que se recopilaron en total 285 kdramas, analizando los últimos 10 años de la industria en el corte 2016-2025, abarcando desde el rating 5.9 hasta el 9.3

### Preguntas que se pueden responder con la base de datos
1. ¿En qué plataformas se distribuyen los kdramas que superan las 9 estrellas?
2. ¿Cúantos Kdramas son distribuidos por cada plataforma?
3. ¿Cúantos kdramas del top 50 son distribuidos por Netflix? 
4. ¿Cúantos kdramas integran la lista sin ser distribuidos por ninguna plataforma mencionada en la base de datos? 
5. ¿Qué plataforma posee más kdramas en el top 50? 