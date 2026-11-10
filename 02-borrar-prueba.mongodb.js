// Laboratorio 1, paso 11: borrar la base de prueba
// Nota: en Atlas, el rol "Read and write to any database" no permite dropDatabase().
// Al borrar su unica coleccion, la base 'prueba' desaparece igual.
use('prueba');
db.saludos.drop();
