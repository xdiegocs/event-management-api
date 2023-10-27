import { getPool } from "../connection/database";
const sql = require('mssql');
const Contacto = require("../models/contacto");

exports.insertContacto = async (req, res) => {
  const contacto = new Contacto(
    req.body.Nombre,
    req.body.Apellidos,
    req.body.Direccion,
    req.body.Correo,
    req.body.Mensaje
  );

  try {
    const pool = await getPool();
    await pool
      .request()
      .input("NombreContacto", sql.NVarChar(50), contacto.nombre)
      .input("ApellidosContacto", sql.NVarChar(50), contacto.apellidos)
      .input("DireccionContacto", sql.NVarChar(30), contacto.direccion)
      .input("CorreoContacto", sql.NVarChar(20), contacto.correo)
      .input("Mensaje", sql.NVarChar(100), contacto.mensaje)
      .execute("SP_InsertarContacto");

    res.status(201).json({ message: "Contacto insertado con éxito." });
  } catch (err) {
    res
      .status(500)
      .json({
        message:
          "Error al conectar con la base de datos o al insertar el contacto.",
        error: err,
      });
  }
};
