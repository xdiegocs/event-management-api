import { getPool } from "../connection/database";
const sql = require('mssql');
const Cotizacion = require('../models/cotizacion');

exports.insertCotizacion = async (req, res) => {
  const cotizacion = new Cotizacion(
    req.body.descripcion,
    req.body.fechaInicio,
    req.body.fechaFin,
    req.body.lugar,
    req.body.cantidadPersonas,
    req.body.cliente,
    req.body.evento
  );

  try {
    const pool = await getPool();
    await pool.request()
      .input('Descripcion', sql.NVarChar(100), cotizacion.descripcion)
      .input('FechaInicio', sql.NVarChar(20), cotizacion.fechaInicio)
      .input('FechaFin', sql.NVarChar(20), cotizacion.fechaFin)
      .input('Lugar', sql.NVarChar(25), cotizacion.lugar)
      .input('CantidadPersonas', sql.NVarChar(20), cotizacion.cantidadPersonas)
      .input('Cliente', sql.Int, cotizacion.cliente)
      .input('Evento', sql.Int, cotizacion.evento)
      .execute('SP_IngresarCotizacion');
    
    res.status(201).json({ message: "Cotización insertada con éxito." });
  } catch (err) {
    res.status(500).json({ message: "Error al conectar con la base de datos o al insertar la cotización.", error: err });
  }
};
