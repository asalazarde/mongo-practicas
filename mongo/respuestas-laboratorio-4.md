# Laboratorio MongoDB 4: respuestas a las preguntas de cierre

1. **¿Cuándo aparece una base de datos nueva en Atlas?**
   Cuando tiene al menos un documento guardado. Con `use('videojuegos')` solo se elige la base; mientras esté vacía no se guarda ni aparece en Atlas ni en VS Code.

2. **¿Qué devuelve insertOne y qué es insertedId?**
   Devuelve `{ acknowledged: true, insertedId: ... }`. `acknowledged: true` indica que el servidor confirmó la escritura, e `insertedId` es el `_id` del documento nuevo: el que pusimos nosotros o el `ObjectId` que generó MongoDB.

3. **¿Por qué falla volver a ejecutar un insert con _id propio?**
   Porque el `_id` es único y no se puede repetir: el segundo insert choca con el documento que ya existe y da el error `E11000 duplicate key error`. El documento no se guarda.

4. **Con ordered: true, ¿qué pasa con los documentos después del error?**
   No se insertan. MongoDB inserta en orden hasta el primer error y ahí se detiene; los anteriores sí quedan guardados. Con `ordered: false` intenta todos y solo omite los que fallan.

5. **¿Por qué la fecha de lanzamiento se guarda con new Date()?**
   Para que quede como tipo fecha (Date) y se pueda comparar, filtrar por rangos y ordenar correctamente. Como texto se compararía letra por letra y no como fecha.
