class regCliente {
    constructor(nombres, apellidos, fechaNacimiento, DPI, telefono, direccion, correo, contrasena) {
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.fechaNacimiento = fechaNacimiento;
        this.DPI = DPI;
        this.telefono = telefono;
        this.direccion = direccion;
        this.correo = correo;
        this.contrasena = contrasena;
    }
}

module.exports = regCliente;