const Favorito = require('../../database/favorito.model');

//Obtener todos los favoritos
exports.obtenerFavoritos = async (req, res) => {
  try {
    const favoritos = await Favorito.find();
    res.json(favoritos);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener favoritos', error });
  }
};

//Guardar un favorito
exports.agregarFavorito = async (req, res) => {
  try {
    const nuevoFavorito = new Favorito(req.body);
    await nuevoFavorito.save();
    res.status(201).json({ mensaje: 'Guardado en MongoDB', personaje: nuevoFavorito });
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al guardar o ya existe', error });
  }
};

//Eliminar un favorito por ID
exports.eliminarFavorito = async (req, res) => {
  try {
    await Favorito.findOneAndDelete({ id: req.params.id });
    res.json({ mensaje: 'Eliminado de MongoDB' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar', error });
  }
};
