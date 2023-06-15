import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/modelos/category';
import { Product } from 'src/app/modelos/product';
import { CategoryService } from 'src/app/servicios/category.service';
import { ProductService } from 'src/app/servicios/product.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-editar-product',
  templateUrl: './editar-product.component.html',
  styleUrls: ['./editar-product.component.css']
})
export class EditarProductComponent implements OnInit{
  id: number;
  producto: Product = new Product();
  categorias: Category[];
  idCategoria: number;

  constructor(private productService: ProductService,private router:Router,private route:ActivatedRoute,private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.productService.obtenerProductoId(this.id).subscribe(dato => {
      this.producto = dato;
    this.idCategoria = this.producto.category.id;
    });
    this.obtenerCategorias();
  }

  private obtenerCategorias(){
    this.categoryService.obtenerCategorias().subscribe(dato => {
      this.categorias = dato;
    });
  }

  onSubmit(){
    this.productService.actualizarProducto(this.id, this.producto, this.idCategoria).subscribe(dato => {
      swal(
        'Producto editado.',
        'Producto editado con éxito.',
        'success'
      )
    });
    this.router.navigate(['/productos']);
  }
}
