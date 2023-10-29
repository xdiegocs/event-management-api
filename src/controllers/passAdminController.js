import { getPool } from "../connection/database";
const sql = require('mssql');
const Admin = require('../models/passAdmin');

exports.actualizarContrasena = async (req, res) => {
    const usuario = new Admin(
        req.body.Correo,
        req.body.ContrasenaActual,
        req.body.NuevaContrasena
      );

    try {
        const pool = await getPool();
        const result = await pool.request()
            .input('Correo', sql.NVarChar(50), usuario.Correo)
            .input('ContrasenaActual', sql.NVarChar(50), usuario.ContrasenaActual)
            .input('NuevaContrasena', sql.NVarChar(50), usuario.NuevaContrasena)
            .output('Resultado', sql.NVarChar(100))
            .execute('SP_RecuperacionContrasenaAdmin');

        const mensaje = result.output.Resultado;
        console.log(result);
        
        if (mensaje === 'Contraseña actualizada exitosamente.') {
            res.status(200).json({ success: true, message: mensaje });
        } else {
            res.status(400).json({ success: false, message: mensaje });
        }

    } catch (err) {
        res.status(500).json({ message: "Error al conectar con la base de datos o al actualizar la contraseña.", error: err });
    }
};
