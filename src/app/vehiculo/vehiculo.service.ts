import { Injectable } from '@angular/core';
import { Vehiculo } from './vehiculo';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class VehiculoService {

  private apiUrl: string = environment.baseUrl + '202212_MISW4104_Grupo1.json';

  constructor(private http: HttpClient) {}

  getVehiculos(): Observable<Vehiculo[]> {
    console.log(this.apiUrl);
    console.log(this.http.get<Vehiculo[]>(this.apiUrl));

    return this.http.get<Vehiculo[]>(this.apiUrl);
  }

  
}
