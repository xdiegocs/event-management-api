class Cotizacion {
    constructor(descripcion, fechaInicio, fechaFin, lugar, cantidadPersonas, correo, evento) {
      this.descripcion = descripcion;
      this.fechaInicio = fechaInicio;
      this.fechaFin = fechaFin;
      this.lugar = lugar;
      this.cantidadPersonas = cantidadPersonas;
      this.correo = correo;
      this.evento = evento;  
    }
  }
  
  module.exports = Cotizacion;
  