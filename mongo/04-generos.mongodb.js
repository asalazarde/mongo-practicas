// Laboratorio 4, ejercicio A: la coleccion generos
// Cinco generos con _id del 1 al 5; estado es true si esta activo. Arcade esta inactivo.
use('videojuegos');

db.generos.insertMany([
  { _id: 1, nombre: 'Aventura', estado: true },
  { _id: 2, nombre: 'RPG', estado: true },
  { _id: 3, nombre: 'Acción', estado: true },
  { _id: 4, nombre: 'Mundo abierto', estado: true },
  { _id: 5, nombre: 'Arcade', estado: false }
]);
// Resultado: { acknowledged: true, insertedIds: { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5 } }

db.generos.find();
