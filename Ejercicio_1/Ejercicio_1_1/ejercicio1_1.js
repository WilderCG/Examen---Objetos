class Personaje{
  constructor(nombrePersonaje, apellidoPersonaje, grupoPersonaje, actorPersonaje, fechaDebutPersonaje) {
    this.nombre = nombrePersonaje;
    this.apellido = apellidoPersonaje;
    this.grupo = grupoPersonaje;
    this.actor = actorPersonaje;
    this.fechaDebut = fechaDebutPersonaje;
  }

  nombreCompleto(){
    return `El nombre completo del personaje es ${this.nombre} ${this.apellido}`
  }

  interprete(){
    return this.actor
  }

  tiempoActivo(){
    anioDebut = this.fechaDebut.split('/')
    anioActual = newDate().getFullYear()
  }


}

const nuevoPersonaje = new Personaje('Mike', 'Wheeler', 'The Party', 'Finn Wolfhard', '15/07/2016');
console.log(nuevoPersonaje.nombreCompleto());
console.log(nuevoPersonaje.interprete());
