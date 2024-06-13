import { Injectable } from '@angular/core';
import { TipoCorte } from '../models/tipo-corte.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipoCorteService {

  private baseUrl = './assets/TiposCorte.json'

  constructor(private httpClient: HttpClient) { }

  findAll(): Observable<TipoCorte[]> {
    return this.httpClient.get<TipoCorte[]>(this.baseUrl);
  }

  findById(id: string): Observable<TipoCorte> {
    return this.httpClient.get<TipoCorte>(`${this.baseUrl}/${id}`);
  }

  insert(tipoCorte: TipoCorte): Observable<TipoCorte> {
    console.log(tipoCorte);
    return this.httpClient.post<TipoCorte>(this.baseUrl, tipoCorte);
  }

  update(tipoCorte: TipoCorte): Observable<TipoCorte> {
    console.log(tipoCorte);
    return this.httpClient.put<TipoCorte>(`${this.baseUrl}/${tipoCorte.id}`, tipoCorte);
  }

  delete(tipoCorte: TipoCorte): Observable<any> {
    return this.httpClient.delete<TipoCorte>(`${this.baseUrl}/${tipoCorte.id}`);
  }
}
