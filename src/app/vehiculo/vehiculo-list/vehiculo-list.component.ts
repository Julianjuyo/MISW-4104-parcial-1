import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../vehiculo';
import { VehiculoService } from '../vehiculo.service';

@Component({
  selector: 'app-vehiculo-list',
  templateUrl: './vehiculo-list.component.html',
  styleUrls: ['./vehiculo-list.component.css'],
})
export class VehiculoListComponent implements OnInit {
  vehiculos: Array<Vehiculo> = [];

  totalCarsText: string = 'hola';

  constructor(private vehiculoService: VehiculoService) {}

  getVehiculos(): void {
    this.vehiculoService.getVehiculos().subscribe((vehiculos) => {
      this.vehiculos = vehiculos;
      this.totalCarsText = this.getTotalCarsByMarca(this.vehiculos); // Update text here
    });
  }

  getTotalCarsByMarca(vehiculos: Vehiculo[]): string {
    const marcaMap = new Map<string, number>();

    vehiculos.forEach((vehiculo) => {
      const marca = `${vehiculo.marca}`;
      if (marcaMap.has(marca)) {
        marcaMap.set(marca, marcaMap.get(marca)! + 1);
      } else {
        marcaMap.set(marca, 1);
      }
    });

    // Generar texto
    let text = '';
    marcaMap.forEach((count, marca) => {
      text += ` Total ${marca}: ${count}<br>`;
    });

    return text;
  }

  ngOnInit(): void {
    this.getVehiculos();
  }
}
