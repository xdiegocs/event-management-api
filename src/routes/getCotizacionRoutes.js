const express = require('express');
const cotizacionController = require('../controllers/getCotizacionController');

const router = express.Router();

router.get('/obtener', cotizacionController.obtenerCotizaciones);

module.exports = router;
