import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Material } from '../models/material.model';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {
  private baseUrl = './assets/Materiais.json'

  constructor(private httpClient: HttpClient) { }

  findAll(): Observable<Material[]> {
    return this.httpClient.get<Material[]>(this.baseUrl);
  }

  findById(id: string): Observable<Material> {
    return this.httpClient.get<Material>(`${this.baseUrl}/${id}`);
  }

  insert(material: Material): Observable<Material> {
    console.log(material);
    return this.httpClient.post<Material>(this.baseUrl, material);
  }

  update(material: Material): Observable<Material> {
    console.log(material);
    return this.httpClient.put<Material>(`${this.baseUrl}/${material.id}`, material);
  }

  delete(material: Material): Observable<any> {
    return this.httpClient.delete<Material>(`${this.baseUrl}/${material.id}`);
  }

}
