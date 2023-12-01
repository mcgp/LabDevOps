// Definición de la clase Producto
class Producto {
    constructor(nombre, precio) {
      this.nombre = nombre;
      this.precio = precio;
    }
  
    // Método para calcular un descuento del 10%
    calcularDescuento() {
      const descuento = this.precio * 0.1;
      const precioConDescuento = this.precio - descuento;
      return `Precio con descuento: $${precioConDescuento}`;
    }
  }
  
  // Creación de objetos tipo Producto
  const producto1 = new Producto('Camiseta', 25);
  const producto2 = new Producto('Pantalón', 40);
  
  // Mostrar el precio con descuentode los productos
  console.log(producto1.calcularDescuento()); // Salida: Precio con descuento: $22.5
  console.log(producto2.calcularDescuento()); // Salida: Precio con descuento: $36
  