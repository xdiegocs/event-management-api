import { getPool } from "../connection/database";
const sql = require('mssql');
const Admin = require('../models/admin');

exports.loginAdmin = async (req, res) => {
  const admin = new Admin(
    req.body.correo,
    req.body.contrasenia
  );

  try {
    const pool = await getPool();
    const result = await pool.request()
      .input('Correo', sql.NVarChar(50), admin.correo)
      .input('Contrasenia', sql.NVarChar(50), admin.contrasenia)
      .output('Resultado', sql.Int)
      .execute('SP_IniciarSesionAdmins');

    if (result.output.Resultado === 1) {
      res.status(200).json({ success: true, message: "Inicio de sesión exitoso." });
    } else {
      res.status(401).json({ success: false, message: "Correo electrónico o contraseña incorrectos." });
    }
  } catch (err) {
    console.log('ERRORRRRR: ', err);
    res.status(500).json({ message: "Error al conectar con la base de datos o al iniciar sesión.", error: err });
  }
};
