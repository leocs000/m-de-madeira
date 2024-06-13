import { Injectable } from '@angular/core';
import { Acabamento } from '../models/acabamento.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AcabamentoService {

  private baseUrl = './assets/Acabamentos.json'

  constructor(private httpClient: HttpClient) { }

  findAll(): Observable<Acabamento[]> {
    return this.httpClient.get<Acabamento[]>(this.baseUrl);
  }

  findById(id: string): Observable<Acabamento> {
    return this.httpClient.get<Acabamento>(`${this.baseUrl}/${id}`);
  }

  insert(acabamento: Acabamento): Observable<Acabamento> {
    console.log(acabamento);
    return this.httpClient.post<Acabamento>(this.baseUrl, acabamento);
  }

  update(acabamento: Acabamento): Observable<Acabamento> {
    console.log(acabamento);
    return this.httpClient.put<Acabamento>(`${this.baseUrl}/${acabamento.id}`, acabamento);
  }

  delete(acabamento: Acabamento): Observable<any> {
    return this.httpClient.delete<Acabamento>(`${this.baseUrl}/${acabamento.id}`);
  }
}
