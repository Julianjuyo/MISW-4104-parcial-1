import { Component, OnInit } from '@angular/core';
import { VehiculoService } from '../vehiculo.service';
import { Vehiculo } from '../vehiculo';

@Component({
  selector: 'app-vehiculo-list',
  templateUrl: './vehiclo-list.component.html',
  styleUrls: ['./vehiclo-list.component.css'],
})
export class VehiculoListComponent implements OnInit {

  constructor() {}

  // constructor(private vehiculoService: VehiculoService) {}

  // vehiculos: Array<Vehiculo> = [];

  // getVehiculos(): void {
  //   console.log('getVehiculos');

  //   this.vehiculoService.getVehiculos().subscribe((vehiculos) => {
  //     this.vehiculos = vehiculos;
  //   });
  // }

  ngOnInit() {
    // this.getVehiculos();
  }
}
