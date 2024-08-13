import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsModule } from '../pages/products/products.module';
import { Produto } from '../models/Produto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = `${environment.apiUrl}/produtos`;

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Produto[]> {
    return this.http.get<Produto[]>(`${this.baseUrl}`);
  }

  getProductById(id: number): Observable<Produto> {
    var url = this.http.get<Produto>(`${this.baseUrl}/${id}`);
    return url;
  }

  createProduct(product: Produto): Observable<Produto> {
    return this.http.post<Produto>(this.baseUrl, product);
  }

  updateProduct(id: number, product: Produto): Observable<Produto> {
    return this.http.put<Produto>(`${this.baseUrl}/${id}`, product);
  }

  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  getProductsBySypplierId(fornecedorId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/Fornecedor/${fornecedorId}`);
  }

  uploadProductImage(productId: number, formData: FormData): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}/${productId}/upload`, formData);
  }

  searchProducts(nome?: string, fornecedor?: string, descricao?: string): Observable<Produto[]> {
    let params = new HttpParams();
    if (nome)
      params = params.append('nome', nome);

    if (fornecedor)
      params = params.append('fornecedor', fornecedor);

    if (descricao)
      params = params.append('descricao', descricao);

    return this.http.get<Produto[]>(`${this.baseUrl}/search`, { params });
  }
}