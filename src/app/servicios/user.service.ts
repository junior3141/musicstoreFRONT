import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../modelos/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseURL = "http://localhost:8080/user/login";
  //private baseURL = "musicstore-production.up.railway.app/user/login";

  constructor(private httpClient: HttpClient) { }

  obtenerUsuarios(): Observable <User[]> {
    return this.httpClient.get<User[]>(`${this.baseURL}`);
  }

  obtenerUsuarioPorId(id: number): Observable <User> {
    return this.httpClient.get<User>(`${this.baseURL}/${id}`);
  }

  guardarUsuario(usuario: User): Observable<object>{
    return this.httpClient.post(`${this.baseURL}`,usuario);
  }

  actualizarUsuario(id: number, usuario: User): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,usuario);
  }

  eliminarUsuario(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
