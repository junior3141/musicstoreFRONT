import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShoppingCart } from 'src/app/modelos/shopping-cart';
import { ShoppingCartService } from 'src/app/servicios/shopping-cart.service';

@Component({
  selector: 'app-order-detalle',
  templateUrl: './order-detalle.component.html',
  styleUrls: ['./order-detalle.component.css']
})
export class OrderDetalleComponent implements OnInit{
  id:number;
  carrito: ShoppingCart;
  total: number = 0;

  constructor(private ShoppingCartService: ShoppingCartService,private router:Router,private route:ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.ShoppingCartService.obtenerPedidoPorId(this.id).subscribe(dato => {
      this.carrito = dato;
      for (const iterator of this.carrito.productos) {
        this.total=parseInt(iterator.price) + this.total;
      }
    });
  }
}
