import { ShoppingCartService } from 'src/app/servicios/shopping-cart.service';
import { CONSTANTES } from './constantes';
import { Component, OnInit } from '@angular/core';
import { ProductService } from './servicios/product.service';
import { Product } from './modelos/product';
import { ShoppingCart } from './modelos/shopping-cart';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'musicstore';
  productos: Product[];
  productsCart: Product[];
  numero: number = 0;
  constante = CONSTANTES;
  carrito: ShoppingCart[];
  usuario: any;

  constructor(private productService: ProductService, private ShoppingCartService: ShoppingCartService, private router:Router) {}

  ngOnInit(): void {
    this.obtenerProductos();
    this.esAdmin();
    this.estaLoggeado();
    this.router.navigate(['#']);
  }

  obtenerProductos(){
    this.productService.obtenerProductos().subscribe(dato => {
      this.productos = dato;
    });
  }

  obtenerCarrito(){
    this.ShoppingCartService.obtenerPedidos().subscribe(dato => {
      this.carrito = dato;
    });
  }

  anadirAlCarrito(id: number){
    this.productsCart = this.productos.filter(element => element.id == id);
    CONSTANTES.CARRITO.push(this.productsCart[0]);
    CONSTANTES.numberCarrito = CONSTANTES.CARRITO.length;
    //this.numero = CONSTANTES.CARRITO.length;
    this.numero = CONSTANTES.numberCarrito;
  }

  esAdmin(): any {
    if (localStorage.getItem("admin") === "true") {
      return true;
    }
    return false;
  }

  estaLoggeado(): any {
    if (localStorage.getItem("logged") === "true") {
      return true;
    }
    return false;
  }

  usernameGuardado(): any{
    this.usuario = localStorage.getItem("UserName");
    return JSON.parse(this.usuario);
  }

  cerrarSesion() {
    localStorage.clear();
    this.router.navigate(['']);
  }

}
