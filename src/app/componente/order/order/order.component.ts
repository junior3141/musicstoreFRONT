import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShoppingCart } from 'src/app/modelos/shopping-cart';
import { ShoppingCartService } from 'src/app/servicios/shopping-cart.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit{
  carrito: ShoppingCart[];

  constructor(private ShoppingCartService: ShoppingCartService,private router:Router, private scroller: ViewportScroller) {}

  ngOnInit(): void{
    this.obtenerCarrito();
    this.toElement();
  }

  toElement() {
    this.scroller.scrollToAnchor("scrollElement");
  }

  obtenerCarrito(){
    this.ShoppingCartService.obtenerPedidos().subscribe(dato => {
      this.carrito = dato;
    });
  }

  detallePedido(id: String) {
    this.router.navigate(['pedidos/detalle',id]);
  }

}
