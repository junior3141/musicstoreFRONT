import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ShoppingCart } from '../modelos/shopping-cart';
import { Observable } from 'rxjs';
import { Product } from '../modelos/product';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  private baseURL = "http://localhost:8080/order/order";
  //private baseURL = "musicstore-production.up.railway.app/order/order";

  constructor(private httpClient: HttpClient) { }

  obtenerPedidos(): Observable <ShoppingCart[]>{
    return this.httpClient.get<ShoppingCart[]>(`${this.baseURL}`);
  }

  guardarProducto(carrito:Product[],id:String): Observable<object>{
    return this.httpClient.post(`${this.baseURL}/${id}`,carrito);
  }

  obtenerPedidoPorId(id: number): Observable<ShoppingCart>{
    return this.httpClient.get<ShoppingCart>(`${this.baseURL}/${id}`);
  }
}
