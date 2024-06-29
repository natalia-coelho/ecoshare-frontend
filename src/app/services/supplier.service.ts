import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Fornecedor } from '../models/Fornecedor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {
  private supplierUrl = `${environment.apiUrl}/fornecedores`;

  constructor(private http: HttpClient) { }

  getSuppliers(): Observable<Fornecedor[]> {
    return this.http.get<Fornecedor[]>(`${this.supplierUrl}`);
  }

  getSupplierById(id: number): Observable<Fornecedor> {
    return this.http.get<Fornecedor>(`${this.supplierUrl}/${id}`);
  }

  createSupplier(supplier: Fornecedor): Observable<Fornecedor> {
    return this.http.post<Fornecedor>(this.supplierUrl, supplier);
  }

  updateSupplier(id: number, supplier: Fornecedor): Observable<Fornecedor> {
    return this.http.put<Fornecedor>(`${this.supplierUrl}/${id}`, supplier);
  }

  deleteSupplier(id: number): Observable<void> {
    return this.http.delete<void>(`${this.supplierUrl}/${id}`);
  }
}
