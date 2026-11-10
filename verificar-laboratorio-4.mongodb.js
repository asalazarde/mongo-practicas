// Comprobacion de solo lectura del laboratorio 4.
use('videojuegos');
const esperadas = ['desarrolladoras', 'generos', 'juegos', 'plataformas', 'ventas'];
const conteos = Object.fromEntries(esperadas.map(nombre => [nombre, db.getCollection(nombre).countDocuments({})]));
const tipos = db.juegos.aggregate([
  { $project: { _id: 1, lanzamiento: { $type: '$lanzamiento' }, desarrolladora: { $type: '$desarrolladora' }, plataformas: { $type: '$plataformas' }, generos: { $type: '$generos' } } },
  { $sort: { _id: 1 } }
]).toArray();
const juegos = db.juegos.find({}, { _id: 1, titulo: 1, copias: 1, disponible: 1 }).sort({ _id: 1 }).toArray();
const generosInactivos = db.generos.find({ estado: false }).toArray();
({
  base: db.getName(),
  colecciones: db.getCollectionNames().sort(),
  conteos,
  juegos,
  generosInactivos,
  tipos,
  correcto: conteos.plataformas === 2 && conteos.desarrolladoras === 6 && conteos.juegos === 4 && conteos.generos === 5 && conteos.ventas === 0 && generosInactivos.length === 1 && tipos.length === 4 && tipos.every(j => j.lanzamiento === 'date' && j.desarrolladora === 'object' && j.plataformas === 'array' && j.generos === 'array') && juegos.every(j => j.disponible === (j.copias > 0))
});
