import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { Vehiculo } from './vehiculo';

@Injectable({
  providedIn: 'root',
})
export class VehiculoService {

  private apiUrl: string = environment.baseUrl;

  // private apiUrl: string = environment.baseUrl + '202212_MISW4104_Grupo1.json';


  constructor(private http: HttpClient) {}

  getVehiculos(): Observable<Vehiculo[]> {
    console.log(this.apiUrl);
    console.log(this.http.get<Vehiculo[]>(this.apiUrl));

    return this.http.get<Vehiculo[]>(this.apiUrl);
  }
}
