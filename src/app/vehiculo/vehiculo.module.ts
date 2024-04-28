import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiculoListComponent } from './vehiclo-list/vehiclo-list.component';

@NgModule({
  imports: [CommonModule],
  exports: [VehiculoListComponent],
  declarations: [VehiculoListComponent],
})
export class VehiculoModule {}
