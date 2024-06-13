import { Injectable } from '@angular/core';
import { Fornecedor } from '../models/fornecedor.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FornecedorService {

  private baseUrl = './assets/Fornecedor.json'

  constructor(private httpClient: HttpClient) { }

  findAll(): Observable<Fornecedor[]> {
    return this.httpClient.get<Fornecedor[]>(this.baseUrl);
  }

  findById(id: string): Observable<Fornecedor> {
    return this.httpClient.get<Fornecedor>(`${this.baseUrl}/${id}`);
  }

  insert(fornecedor: Fornecedor): Observable<Fornecedor> {
    console.log(fornecedor);
    return this.httpClient.post<Fornecedor>(this.baseUrl, fornecedor);
  }

  update(fornecedor: Fornecedor): Observable<Fornecedor> {
    console.log(fornecedor);
    return this.httpClient.put<Fornecedor>(`${this.baseUrl}/${fornecedor.id}`, fornecedor);
  }

  delete(fornecedor: Fornecedor): Observable<any> {
    return this.httpClient.delete<Fornecedor>(`${this.baseUrl}/${fornecedor.id}`);
  }
}
