const { Router } = require('express');
const router = Router();
const favoritosController = require('../Controllers/favoritos');

router.get('/', favoritosController.obtenerFavoritos);
router.post('/', favoritosController.agregarFavorito);
router.delete('/:id', favoritosController.eliminarFavorito);

module.exports = router;
