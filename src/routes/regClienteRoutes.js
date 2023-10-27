const express = require('express');
const clienteController = require('../controllers/regClienteController');

const router = express.Router();

router.post('/registrar', clienteController.registrarUsuarioCliente);

module.exports = router;
