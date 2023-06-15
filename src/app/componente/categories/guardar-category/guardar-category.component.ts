import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/modelos/category';
import { CategoryService } from 'src/app/servicios/category.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-guardar-category',
  templateUrl: './guardar-category.component.html',
  styleUrls: ['./guardar-category.component.css']
})
export class GuardarCategoryComponent implements OnInit{
  categoria: Category = new Category();

  constructor(private categoryService: CategoryService,private router:Router){}

  ngOnInit(): void {

  }
  guardarCategoria(){
    this.categoryService.guardarCategoria(this.categoria).subscribe(dato => {
      swal(
        'Categoría creada.',
        'Categoría creada con éxito.',
        'success'
      )
    });
  }

  onSubmit(){
    this.guardarCategoria();
    this.router.navigate(['/categorias']);
  }
}
