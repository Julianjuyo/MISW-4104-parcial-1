import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehiculoListComponent } from './vehiculo/vehiculo-list/vehiculo-list.component';


const routes: Routes = [
  { path: '', component: VehiculoListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
