class Cotizacion {
    constructor(descripcion, fechaInicio, fechaFin, lugar, cantidadPersonas, evento, cliente) {
      this.descripcion = descripcion;
      this.fechaInicio = fechaInicio;
      this.fechaFin = fechaFin;
      this.lugar = lugar;
      this.cantidadPersonas = cantidadPersonas;
      this.evento = evento;
      this.cliente = cliente;
    }
  }
  
  module.exports = Cotizacion;
  