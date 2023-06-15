import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/modelos/category';
import { Product } from 'src/app/modelos/product';
import { CategoryService } from 'src/app/servicios/category.service';
import { ProductService } from 'src/app/servicios/product.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-guardar-product',
  templateUrl: './guardar-product.component.html',
  styleUrls: ['./guardar-product.component.css']
})
export class GuardarProductComponent implements OnInit{
  producto: Product = new Product();
  categorias: Category[];
  idCategoria: String;

  constructor(private productService: ProductService,private router:Router,private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.obtenerCategorias();
  }

  guardarProducto(){
    this.productService.guardarProducto(this.producto,this.idCategoria).subscribe(dato => {
      swal(
        'Producto creado.',
        'Producto creado con éxito.',
        'success'
      )
    });
  }

  private obtenerCategorias(){
    this.categoryService.obtenerCategorias().subscribe(dato => {
      this.categorias = dato;
    });
  }

  onSubmit(){
    this.guardarProducto();
    this.router.navigate(['/productos']);
  }

}
