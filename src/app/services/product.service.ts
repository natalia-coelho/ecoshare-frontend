import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsModule } from '../pages/products/products.module';
import { Produto } from '../models/Produto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productUrl = `${environment.apiUrl}/produtos`;

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Produto[]> {
    return this.http.get<Produto[]>(`${this.productUrl}`);
  }

  getProductById(id: number): Observable<Produto> {
    var url = this.http.get<Produto>(`${this.productUrl}/${id}`);
    return url;
  }

  createProduct(product: Produto): Observable<Produto> {
    return this.http.post<Produto>(this.productUrl, product);
  }

  updateProduct(id: number, product: Produto): Observable<Produto> {
    return this.http.put<Produto>(`${this.productUrl}/${id}`, product);
  }

  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${this.productUrl}/${id}`);
  }
}
