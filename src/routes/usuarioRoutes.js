const express = require('express');
const usuarioController = require('../controllers/usuarioController');

const router = express.Router();

router.put('/actualizarContrasenia', usuarioController.actualizarContrasena);

module.exports = router;
