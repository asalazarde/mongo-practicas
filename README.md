# Prácticas de MongoDB

## Laboratorio 4 Tienda de videojuegos

Los cinco Playground están en `mongo/`. Conecta VS Code a MongoDB Atlas y ejecuta `01-plataformas.mongodb.js`, `02-desarrolladoras.mongodb.js`, `03-juegos.mongodb.js` y `04-generos.mongodb.js` en ese orden.

`00-reiniciar.mongodb.js` elimina las colecciones de la base `videojuegos`. Se conserva como ejercicio de reinicio; úsalo únicamente si quieres borrar los datos de esta práctica. No hace falta ejecutarlo para consultar los resultados.

El script de desarrolladoras captura los errores E11000 intencionales y demuestra la diferencia entre `ordered: true` y `ordered: false`. Volver a ejecutar los scripts de inserción puede producir duplicados o errores de llave duplicada.

## Entrega y comprobación

- `mongo/`: los cinco Playground y las respuestas de cierre.
- `captura-colecciones-mongodb-4.png`: captura de VS Code con las cinco colecciones.
- `verificacion-laboratorio-4.txt`: salida real de la comprobación en Atlas.
- `verificar-laboratorio-4.mongodb.js`: consultas de solo lectura para repetir la comprobación.

Resultado verificado: 2 plataformas, 6 desarrolladoras, 4 juegos, 5 géneros y la colección `ventas` vacía. Arcade es el único género inactivo. Far Cry 6 tiene cero copias y `disponible: false`. Los cuatro juegos tienen fecha BSON Date, una desarrolladora embebida y arreglos de plataformas y géneros.

Los archivos no contienen la cadena de conexión. La conexión se configura por separado en la extensión de MongoDB de VS Code.

Los archivos `01-prueba.mongodb.js` y `02-borrar-prueba.mongodb.js` de la raíz pertenecen a la práctica anterior.
