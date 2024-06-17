import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Endereco } from '../models/endereco.model';


@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  private baseUrl = './assets/Cidades.json'

  constructor(private httpClient: HttpClient) { }

  findAll(): Observable<Endereco[]>{
    return this.httpClient.get<Endereco[]>(this.baseUrl);
  }

  findById(id: string): Observable<Endereco>{
    return this.httpClient.get<Endereco>(`${this.baseUrl}/${id}`);
  }

  insert(endereco: Endereco): Observable<Endereco>{
    const data = {
      logradouro: endereco.logradouro,
      numero: endereco.numero,
      bairro: endereco.bairro,
      cep: endereco.cep,
      complemento: endereco.complemento,
      idCidade: endereco.cidade.id
    };
    return this.httpClient.post<Endereco>(this.baseUrl, data);
  }

  update(endereco: Endereco): Observable<Endereco>{
    const data = {
      logradouro: endereco.logradouro,
      numero: endereco.numero,
      bairro: endereco.bairro,
      cep: endereco.cep,
      complemento: endereco.complemento,
      idCidade: endereco.cidade.id
    };
    return this.httpClient.put<Endereco>(`${this.baseUrl}/${endereco.id}`, data);
  }

  delete(endereco: Endereco): Observable<any>{
    return this.httpClient.delete<Endereco>(`${this.baseUrl}/${endereco.id}`);
  }
}
