import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CONSTANTES } from 'src/app/constantes';
import { Product } from 'src/app/modelos/product';
import { ProductService } from 'src/app/servicios/product.service';

@Component({
  selector: 'app-mostrar-category-products',
  templateUrl: './mostrar-category-products.component.html',
  styleUrls: ['./mostrar-category-products.component.css']
})
export class MostrarCategoryProductsComponent implements OnInit{
  id: number;
  productos: Product[];
  productsCart: Product[];
  numero: number = 0;

  constructor(private productService: ProductService,private router:Router,private route:ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log("id ha llegado: ", this.id);
    /*this.productService.obtenerProductoCategoria(this.id).subscribe(dato => {
      this.productos = dato;
      console.log("Filtro: ", dato);
      console.log("Filtro: ", this.productos);
    });*/
    this.obtenerProductos();
  }

  obtenerProductos(){
    this.productService.obtenerProductos().subscribe(dato => {
      this.productos = dato.filter(element => element.category.id == this.id);
    });
  }

  anadirAlCarrito(id: number){
    this.productsCart = this.productos.filter(element => element.id == id);
    CONSTANTES.CARRITO.push(this.productsCart[0]);
    CONSTANTES.numberCarrito = CONSTANTES.CARRITO.length;
    this.numero = CONSTANTES.CARRITO.length;
  }
}
