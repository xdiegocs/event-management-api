import express from "express";
import morgan from "morgan";
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