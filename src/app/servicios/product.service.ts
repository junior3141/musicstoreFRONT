import { Product } from './../modelos/product';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  //private baseURL = "http://localhost:8080/product/productos";
  private baseURL = "musicstore-production.up.railway.app/product/productos";

  constructor(private httpClient: HttpClient) { }

  obtenerProductos(): Observable <Product[]>{
    return this.httpClient.get<Product[]>(`${this.baseURL}`);
  }

  obtenerProductoId(id: number): Observable<Product>{
    return this.httpClient.get<Product>(`${this.baseURL}/${id}`);
  }

  guardarProducto(product:Product, idCategory:String): Observable<object>{
    return this.httpClient.post(`${this.baseURL}/${idCategory}`,product);
  }

  actualizarProducto(id: number, product: Product, idCategoria: number): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}/${idCategoria} `,product);
  }

  eliminarProducto(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

  obtenerProductoCategoria(id: number): Observable<Product[]>{
    return this.httpClient.get<Product[]>(`${this.baseURL}/${id}`);
  }

}
