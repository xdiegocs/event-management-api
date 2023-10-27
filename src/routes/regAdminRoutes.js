const express = require('express');
const adminController = require('../controllers/regAdminController');

const router = express.Router();

router.post('/registrar', adminController.registrarUsuarioAdmin);

module.exports = router;
