const express = require('express')
import config from "../src/config.js";
import morgan from "morgan";
const cors = require('cors')
// Routes
const contactoRoutes = require('./routes/contactoRoutes');
const cotizacionRoutes = require('./routes/cotizacionRoutes');
const adminRoutes = require('./routes/adminRoutes');
const clienteRoutes = require('./routes/clienteRoutes');
const getCotizacionRoutes = require('./routes/getCotizacionRoutes');
const usuarioRoutes = require('./routes/usuarioRoutes');
const regAdminRoutes = require('./routes/regAdminRoutes');
const regClienteRoutes = require('./routes/regClienteRoutes');


const app = express();

// Settings
app.set("port", 4000);

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

const corsOptions = {
    origin: 'http://localhost:4200', // Permitir solicitudes solo desde este origen
    methods: 'GET,PUT,POST,DELETE', // Métodos HTTP permitidos
};
app.use(cors(corsOptions));

// Routes
app.use('/contacto', contactoRoutes);
app.use('/cotizacion', cotizacionRoutes);
app.use('/admin', adminRoutes);
app.use('/cliente', clienteRoutes);
app.use('/cotizaciones', getCotizacionRoutes);
app.use('/usuarios', usuarioRoutes);
app.use('/admin', regAdminRoutes);
app.use('/cliente', regClienteRoutes);


export default app;