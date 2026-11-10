// Laboratorio 4, paso 9 y ejercicio B: juegos con varios tipos de datos
use('videojuegos');

// Paso 9: un juego completo
db.juegos.insertOne({
  _id: 'SW-001',                                   // texto (codigo del juego)
  titulo: 'The Legend of Zelda: Breath of the Wild',
  anio: 2017,                                      // numero entero
  precio: 59.99,                                   // numero decimal
  copias: 4,                                       // numero
  disponible: true,                                // booleano
  lanzamiento: new Date('2017-03-03'),             // fecha
  desarrolladora: { _id: 1, nombre: 'Nintendo' },  // documento
  plataformas: ['Nintendo Switch', 'Wii U'],       // arreglo
  generos: ['Aventura', 'Mundo abierto']           // arreglo
});
// Resultado: { acknowledged: true, insertedId: 'SW-001' }

// Ejercicio B: mas juegos para el catalogo
// disponible es false cuando no hay copias.
db.juegos.insertMany([
  {
    _id: 'PC-001',
    titulo: 'The Witcher 3: Wild Hunt',
    anio: 2015,
    precio: 39.99,
    copias: 2,
    disponible: true,
    lanzamiento: new Date('2015-05-19'),
    desarrolladora: { _id: 3, nombre: 'CD Projekt Red' },
    plataformas: ['PC', 'PlayStation 4', 'Xbox One', 'Nintendo Switch'],
    generos: ['RPG', 'Mundo abierto', 'Aventura']
  },
  {
    _id: 'PS-001',
    titulo: 'Elden Ring',
    anio: 2022,
    precio: 59.99,
    copias: 5,
    disponible: true,
    lanzamiento: new Date('2022-02-25'),
    desarrolladora: { _id: 4, nombre: 'FromSoftware' },
    plataformas: ['PlayStation 5', 'PlayStation 4', 'PC', 'Xbox Series X'],
    generos: ['RPG', 'Acción']
  },
  {
    _id: 'PS-002',
    titulo: 'Far Cry 6',
    anio: 2021,
    precio: 49.99,
    copias: 0,
    disponible: false,
    lanzamiento: new Date('2021-10-07'),
    desarrolladora: { _id: 2, nombre: 'Ubisoft' },
    plataformas: ['PlayStation 5', 'Xbox Series X', 'PC'],
    generos: ['Acción', 'Shooter', 'Mundo abierto']
  }
]);
// Resultado: { acknowledged: true, insertedIds: { '0': 'PC-001', '1': 'PS-001', '2': 'PS-002' } }

db.juegos.find();
