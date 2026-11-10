// Laboratorio 1: primera prueba
use('prueba');

db.saludos.insertOne({ mensaje: 'Hola desde VS Code', fecha: new Date() });

db.saludos.find();
