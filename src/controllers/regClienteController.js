import { getPool } from "../connection/database";
const sql = require('mssql');
const regCliente = require('../models/regCliente');

exports.registrarUsuarioCliente = async (req, res) => {
    const cliente = new regCliente ( 
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
            .input('Nombres', sql.NVarChar(50), cliente.nombres)
            .input('Apellidos', sql.NVarChar(50), cliente.apellidos)
            .input('FechaNacimiento', sql.NVarChar(20), cliente.fechaNacimiento)
            .input('DPI', sql.NVarChar(15), cliente.DPI)
            .input('Telefono', sql.NVarChar(15), cliente.telefono)
            .input('Direccion', sql.NVarChar(50), cliente.direccion)
            .input('Correo', sql.NVarChar(50), cliente.correo)
            .input('Contrasenia', sql.NVarChar(50), cliente.contrasena)
            .execute('SP_RegistrarUsuarioCliente');

        res.status(200).json({ success: true, message: "Usuario cliente registrado exitosamente." });

    } catch (err) {
        res.status(500).json({ message: "Error al conectar con la base de datos o al registrar el usuario.", error: err });
    }
};
