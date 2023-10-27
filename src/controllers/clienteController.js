import { getPool } from "../connection/database";
const sql = require('mssql');
const Cliente = require('../models/cliente');

exports.loginCliente = async (req, res) => {
  const cliente = new Cliente(
    req.body.correo,
    req.body.contrasenia
  );

  try {
    const pool = await getPool();
    const result = await pool.request()
      .input('Correo', sql.NVarChar(50), cliente.correo)
      .input('Contrasenia', sql.NVarChar(50), cliente.contrasenia)
      .output('Resultado', sql.Int)
      .execute('SP_IniciarSesionUsuarios');
    
    if (result.output.Resultado === 1) {
      res.status(200).json({ success: true, message: "Inicio de sesión exitoso." });
    } else {
      res.status(401).json({ success: false, message: "Correo electrónico o contraseña incorrectos." });
    }
  } catch (err) {
    res.status(500).json({ message: "Error al conectar con la base de datos o al iniciar sesión.", error: err });
  }
};
