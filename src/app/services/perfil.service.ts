import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pessoa } from '../models/Pessoa';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {
  private baseUrl = `${environment.apiUrl}/perfil`;

  constructor(private http: HttpClient) { }

  getPerfil(): Observable<Pessoa> {
    return this.http.get<Pessoa>(this.baseUrl);
  }

  updatePerfil(pessoa: Pessoa): Observable<void> {
    return this.http.put<void>(this.baseUrl, pessoa);
  }
}
