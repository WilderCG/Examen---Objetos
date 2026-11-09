class Coche {
    constructor(marcaCoche, modeloCoche) {
        this.marca = marcaCoche;
        this.modelo = modeloCoche;
    }

    detallesDelCoche(){
      return "El coche es un " + this.marca + " " + this.modelo;
    }

  }
  
  const miCoche = new Coche("Seat", "Ibiza");
  console.log(miCoche.detallesDelCoche());

  let fechaTexto = "15/07/2016"
  let partes = fechaTexto.split('/')
  let hoy = Date()
  let anioActual = hoy.getFullYear()
  