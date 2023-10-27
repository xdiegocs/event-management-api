import { getPool } from "../connection/database";
const sql = require('mssql');
const regAdmin = require('../models/regAdmin');

exports.registrarUsuarioAdmin = async (req, res) => {
    const admin = new regAdmin ( 
        req.body.nombres, 
        req.body.apellidos, 
        req.body.fechaNacimiento, 
        req.body.DPI, 
        req.body.telefono, 
        req.body.direccion, 
        req.body.correo, 
        req.body.contrasena 
        );

    try {
        const pool = await getPool();
        await pool.request()
            .input('Nombres', sql.NVarChar(50), admin.nombres)
            .input('Apellidos', sql.NVarChar(50), admin.apellidos)
            .input('FechaNacimiento', sql.NVarChar(20), admin.fechaNacimiento)
            .input('DPI', sql.NVarChar(15), admin.DPI)
            .input('Telefono', sql.NVarChar(15), admin.telefono)
            .input('Direccion', sql.NVarChar(50), admin.direccion)
            .input('Correo', sql.NVarChar(50), admin.correo)
            .input('Contrasenia', sql.NVarChar(50), admin.contrasena)
            .execute('SP_RegistrarUsuarioAdmin');

        res.status(200).json({ success: true, message: "Usuario administrador registrado exitosamente." });

    } catch (err) {
        res.status(500).json({ message: "Error al conectar con la base de datos o al registrar el usuario.", error: err });
    }
};
