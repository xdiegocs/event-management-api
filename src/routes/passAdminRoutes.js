const express = require('express');
const adminController = require('../controllers/passAdminController');

const router = express.Router();

router.put('/actualizarAContrasenia', adminController.actualizarContrasena);

module.exports = router;
