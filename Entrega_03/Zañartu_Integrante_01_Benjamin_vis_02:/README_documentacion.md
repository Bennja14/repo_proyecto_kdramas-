# Documentación 
Mi intención, con esta visualización, es mostrar qué plataforma distribuye los "mejores" kdramas, para ello, lo que hice fue tomar la base de datos y hacer el corte en los 100 kdramas mejor evaluados en base a la calificación promedio en *MyDramaList*

En ese sentido, mi hipótesis era mostrar que los mejores kdramas, o al menos los más valorados, se encontraban en Netflix, basando esta hipótesis en el alcance global y popularidad de esta plataforma sobre las tres restantes. 

Para hacer la visualización, se usó la misma base de datos presentada en la entrega anterior, ya que contenía el dato del **rating**, o sea, de la calificación de los usuarios para cada *kdrama*, lo que me parecía de vital importancia porque es una forma cuantitativa de poder medir el éxito de una serie en función del afán del público.

En ese sentido, se tomó la misma base de datos, ya limpia, sin modificaciones, ya que, además, estaba ya ordenada de mayor a menor en función del **rating**,lo que permitía, de forma mucho más sencilla, hacer el corte en el top 100 de los kdramas mejor evalauados por la audiencia dentro del sitio *MyDramaList* 

Luego, comencé a editar el código en Google Colab, asegurándome de poder llegar al gráfico final, el cual tenía pensado para poder hacer esta visualización, tal de que se muestre de forma clara, concisa e inequívoca, cual plataforma tenía los kdramas mejor valorados en su catálogo. 

Tras trabajar con el código, se llegó al resultado deseado, mostrándose claramente que Netflix posee la mitad de los kdramas dentro del top 100 mejor valorado. Cabe recalcar que la suma final de los datos da 103 y no 100, porque hay varios kdramas están en más de una plataforma, decidí dejarlo de esa forma ya que el resultado sería mucho más fidedigno que decidir arbitrariamente quedarme con una sola plataforma de streaming. 

Finalmente, en cuanto a las preguntas que se pueden responder con la visualización es: 
- ¿Cúantos kdramas, del top 100 mejor evaluado, distribuye **Netflix**? 
- ¿Cúantos kdramas, del top 100 mejor evaluado, distribuye **Viki**? 
- ¿Cúantos kdramas, del top 100 mejor evaluado, distribuye **Amazon Prime Video**? 
- ¿Cúantos kdramas, del top 100 mejor evaluado, distribuye **Disney+**?  
