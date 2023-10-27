const express = require('express');
const clienteController = require('../controllers/clienteController');

const router = express.Router();

router.post('/login', clienteController.loginCliente);

module.exports = router;
