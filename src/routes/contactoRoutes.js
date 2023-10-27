const express = require('express');
const contactoController = require('../controllers/contactoController');

const router = express.Router();

router.post('/nuevo', contactoController.insertContacto);

module.exports = router;
