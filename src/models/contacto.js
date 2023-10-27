class Contacto {
    constructor(Nombre, Apellidos, Direccion, Correo, Mensaje) {
        this.nombre = Nombre;
        this.apellidos = Apellidos;
        this.direccion = Direccion || null;
        this.correo = Correo;
        this.mensaje = Mensaje;
    }
}

module.exports = Contacto;
