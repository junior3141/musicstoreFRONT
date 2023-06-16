import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../modelos/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private baseURL = "http://localhost:8080/category/categorias";
  //private baseURL = "musicstore-production.up.railway.app/category/categorias";

  constructor(private httpClient: HttpClient) { }

  obtenerCategorias(): Observable <Category[]>{
    return this.httpClient.get<Category[]>(`${this.baseURL}`);
  }

  obtenerCategoriaId(id: number): Observable<Category>{
    return this.httpClient.get<Category>(`${this.baseURL}/${id}`);
  }

  guardarCategoria(category:Category): Observable<object>{
    return this.httpClient.post(`${this.baseURL}`,category);
  }

  actualizarCategoria(id: number, category: Category): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,category);
  }

  eliminarCategoria(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

}
