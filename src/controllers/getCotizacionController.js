import { getPool } from "../connection/database";

exports.obtenerCotizaciones = async (req, res) => {

  try {
    const pool = await getPool();
    const result = await pool.request()
      .execute('SP_ObtenerCotizaciones');
    console.log('PRUEBAAA', result);
    res.status(200).json({ success: true, data: result.recordsets });
  } catch (err) {
    console.log('ERROOOOOR', err);
    res.status(500).json({ message: "Error al conectar con la base de datos o al obtener las cotizaciones.", error: err });
  }
};
