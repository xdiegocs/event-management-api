import config from "../config";
import sql from "mssql";

const dbconfig = {
    user: config.user,
    password: config.password,
    server: config.host,
    database: config.database,
    options: {
        encrypt: true, 
        trustServerCertificate: true
    }
};

async function getPool() {
    try {
        const pool = await sql.connect(dbconfig);
        return pool;
    } catch (err) {
        console.error('Error al conectar a la base de datos:', err);
        throw err;
    }
}

module.exports = {
    getPool
};