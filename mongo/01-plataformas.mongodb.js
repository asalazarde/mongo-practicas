// Laboratorio 4, pasos 2 a 4: base de datos, insertOne y colecciones
use('videojuegos');   // en mongosh: use videojuegos
db.getName();         // 'videojuegos'

// Paso 3: insertOne, el primer documento
db.plataformas.insertOne({ nombre: 'Nintendo Switch' });
// Resultado: { acknowledged: true, insertedId: ObjectId('...') }

// Paso 4: crear colecciones
// Implicita: al insertar (lo normal)
db.plataformas.insertOne({ nombre: 'PlayStation 5' });

// Explicita
db.createCollection('ventas');
db.getCollectionNames();   // [ 'plataformas', 'ventas' ]
