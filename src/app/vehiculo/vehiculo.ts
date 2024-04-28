export class Vehiculo {

  id: number;
  type: string;
  marca: string;
  linea: string;
  referencia: string;
  modelo: number;
  kilometraje: number;
  color: string;
  imagen: string;

  constructor(id: number, type: string, marca: string, linea: string, referencia: string, modelo: number, kilometraje: number, color: string, imagen: string) {
    this.id = id;
    this.type = type;
    this.marca = marca;
    this.linea = linea;
    this.referencia = referencia;
    this.modelo = modelo;
    this.kilometraje = kilometraje;
    this.color = color;
    this.imagen = imagen;
  }
  
}
