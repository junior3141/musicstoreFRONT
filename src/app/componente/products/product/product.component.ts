import { ViewportScroller } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/modelos/product';
import { ProductService } from 'src/app/servicios/product.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
  productos:Product[];

  constructor(private productService: ProductService,private router:Router,private scroller: ViewportScroller){}

  ngOnInit(): void{
    this.obtenerProductos();
    this.toElement();
  }

  toElement() {
    this.scroller.scrollToAnchor("scrollElement");
  }

  obtenerProductos(){
    this.productService.obtenerProductos().subscribe(dato => {
      this.productos = dato;
      console.log("productos: ", this.productos);
    });
  }

  actualizarProducto(id: number){
    this.router.navigate(['productos/editar-producto',id]);
  }

  eliminarProducto(id: number){
    swal({
      title:'¿Estás seguro?',
      text:'Confirmar que quieres eliminar el producto',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: true
    }).then((result) => {
      if (result.value){
        this.productService.eliminarProducto(id).subscribe(dato => {
          this.obtenerProductos();
          swal(
            'Producto eliminado.',
            'Producto eliminado con éxito.',
            'success'
          )
        });
      }
    });
  }
}
