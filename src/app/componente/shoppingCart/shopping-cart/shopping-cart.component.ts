import { ViewportScroller } from '@angular/common';
import { CONSTANTES } from './../../../constantes';
import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/modelos/product';
import { ShoppingCartService } from 'src/app/servicios/shopping-cart.service';
import swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit{
  productos: Product[];
  total: number = 0;
  usuario: any;
  user: any;

  constructor(private shoppingService: ShoppingCartService, private router:Router, private scroller: ViewportScroller) {}

  ngOnInit(): void {
    this.productos = CONSTANTES.CARRITO;
    for (const iterator of this.productos) {
      this.total=parseInt(iterator.price) + this.total;
    }
    this.toElement();
  }

  toElement() {
    this.scroller.scrollToAnchor("scrollElement");
  }

  estaLoggeado(): any {
    if (localStorage.getItem("logged") === "true") {
      return true;
    }
    return false;
  }

  crearPedido(){
    if (this.estaLoggeado()) {
      this.usuario = localStorage.getItem("usuario")?.toString();
      this.user = JSON.parse(this.usuario);
      this.shoppingService.guardarProducto(this.productos,this.user.id).subscribe(dato => {
        swal(
          'Pedido creado.',
          'Pedido creado con éxito.',
          'success'
        )
      });
      CONSTANTES.CARRITO.length = 0;
      CONSTANTES.numberCarrito = 0;
      this.router.navigate(['']);
    } else {
      swal(
        'Por favor inicie sesión.',
        'Para finalizar el pedido debe tener la sesión iniciada.'
      )
    }

  }

}
