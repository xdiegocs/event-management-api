const express = require('express');
const cotizacionController = require('../controllers/cotizacionController');

const router = express.Router();

router.post('/nueva', cotizacionController.insertCotizacion);

module.exports = router;
