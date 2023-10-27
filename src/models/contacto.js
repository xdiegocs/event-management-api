class Contacto {
    constructor(nombre, apellidos, direccion, correo, mensaje) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.direccion = direccion || null;
        this.correo = correo;
        this.mensaje = mensaje;
    }
}

module.exports = Contacto;
