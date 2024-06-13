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
    /*
    const data = {
      idM: madeira.id,
      nomeMadeira: madeira.nome,
      descricaoMadeira: madeira.descricao,
      idMaterial: madeira.material.id,
      idTipoCorte: madeira.tipoCorte.id,
      idFornecedor: madeira.fornecedor.id,
      idAcabamento: madeira.acabamento.id
    }
    console.log(data);
    return this.httpClient.post<Madeira>(this.baseUrl, data); */

    const { id, ...data } = madeira;

    console.log(data);
    return this.httpClient.post<Madeira>(this.baseUrl, data);

  }

  update(madeira: Madeira): Observable<Madeira>{
    const data = {
      ...madeira,
      idMaterial: madeira.material.id,
      idTipoCorte: madeira.tipoCorte.id,
      idFornecedor: madeira.fornecedor.id,
      idAcabamento: madeira.acabamento.id
    }
    return this.httpClient.put<Madeira>(`${this.baseUrl}/${madeira.id}`, data);
  }

  delete(madeira: Madeira): Observable<any>{
    return this.httpClient.delete<Madeira>(`${this.baseUrl}/${madeira.id}`);
  }

  getUrlImagem(nomeImagem: string): string {
    return `${this.baseUrl}/image/download/${nomeImagem}`;
  }

  uploadImagem(id: number, nomeImagem: string, imagem: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('id', id.toString());
    formData.append('nomeImagem', imagem.name);
    formData.append('imagem', imagem, imagem.name);

    return this.httpClient.patch<Madeira>(`${this.baseUrl}/image/upload`, formData);
  }
}
