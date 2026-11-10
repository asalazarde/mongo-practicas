// Laboratorio 4, pasos 5 a 8: _id propio, insertMany y errores
use('videojuegos');

// Paso 5: un _id propio
db.desarrolladoras.insertOne({ _id: 1, nombre: 'Nintendo' });
// Resultado: { acknowledged: true, insertedId: 1 }

// Paso 6: insertMany
db.desarrolladoras.insertMany([
  { _id: 2, nombre: 'Ubisoft' },
  { _id: 3, nombre: 'CD Projekt Red' },
  { _id: 4, nombre: 'FromSoftware' }
]);
// Resultado: { acknowledged: true, insertedIds: { '0': 2, '1': 3, '2': 4 } }

// Los pasos 7 y 8 provocan errores a proposito. Van dentro de try/catch para que
// el Playground muestre el error y siga con el resto del archivo.
const errores = [];

// Paso 7: provocar el error E11000
try {
  db.desarrolladoras.insertOne({ _id: 1, nombre: 'Otra desarrolladora' });
} catch (e) {
  errores.push('Paso 7: ' + e.message);
  // E11000 duplicate key error collection: videojuegos.desarrolladoras index: _id_ dup key: { _id: 1 }
}

// Paso 8: insertMany con ordered: true (valor por defecto)
// Capcom (_id 5) se inserta; al fallar _id 1 se detiene y Square Enix (_id 6) no se inserta.
try {
  db.desarrolladoras.insertMany([
    { _id: 5, nombre: 'Capcom' },
    { _id: 1, nombre: 'Repetida' },     // ya existe: error
    { _id: 6, nombre: 'Square Enix' }
  ], { ordered: true });
} catch (e) {
  errores.push('Paso 8, ordered true: ' + e.message);
}

// Paso 8: el mismo bloque con ordered: false
// Fallan _id 5 (ya existe) y _id 1, pero Square Enix (_id 6) si se inserta.
try {
  db.desarrolladoras.insertMany([
    { _id: 5, nombre: 'Capcom' },
    { _id: 1, nombre: 'Repetida' },
    { _id: 6, nombre: 'Square Enix' }
  ], { ordered: false });
} catch (e) {
  errores.push('Paso 8, ordered false: ' + e.message);
}

({ errores, desarrolladoras: db.desarrolladoras.find().toArray() });
// desarrolladoras: _id 1 al 6
