// Definición de la clase Persona
class Persona {
    constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
    }
  
    // Método para obtener información de la persona
    obtenerInformacion() {
      return `Nombre: ${this.nombre}, Edad: ${this.edad}`;
    }
  }
  
  // Creación de objetos tipo Persona
  const persona1 = new Persona('Juan', 25);
  const persona2 = new Persona('María', 30);
  
  // Uso de métodos para obtener información
  console.log(persona1.obtenerInformacion()); // Salida: Nombre: Juan, Edad: 25
  console.log(persona2.obtenerInformacion()); // Salida: Nombre: María, Edad: 30
  