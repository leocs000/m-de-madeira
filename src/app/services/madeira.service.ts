import { Injectable } from '@angular/core';
import { Madeira } from '../models/madeira.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MadeiraService {
  private baseUrl = './assets/Madeiras.json'

  constructor(private httpClient: HttpClient) { }

  findAll(): Observable<Madeira[]>{
    return this.httpClient.get<Madeira[]>(this.baseUrl);
  }

  findById(id: string): Observable<Madeira>{
    return this.httpClient.get<Madeira>(`${this.baseUrl}/${id}`);
  }

  insert(madeira: Madeira): Observable<Madeira>{
    return this.httpClient.post<Madeira>(this.baseUrl, madeira);
  }

  update(madeira: Madeira): Observable<Madeira>{
    return this.httpClient.put<Madeira>(`${this.baseUrl}/${madeira.id}`, madeira);
  }

  delete(madeira: Madeira): Observable<any>{
    return this.httpClient.delete<Madeira>(`${this.baseUrl}/${madeira.id}`);
  }
}
