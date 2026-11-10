// Laboratorio 4, paso 10: reiniciar la base videojuegos
// Nota: en Atlas, el rol "Read and write to any database" no permite dropDatabase().
// Se borra cada coleccion; al quedar sin colecciones, la base desaparece igual.
use('videojuegos');

db.getCollectionNames().forEach(nombre => db.getCollection(nombre).drop());

db.getCollectionNames();   // []
