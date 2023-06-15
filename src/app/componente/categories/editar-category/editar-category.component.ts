import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/modelos/category';
import { CategoryService } from 'src/app/servicios/category.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-editar-category',
  templateUrl: './editar-category.component.html',
  styleUrls: ['./editar-category.component.css']
})
export class EditarCategoryComponent implements OnInit{
  id:number;
  categoria: Category = new Category();

  constructor(private categoryService: CategoryService,private router:Router,private route:ActivatedRoute){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.categoryService.obtenerCategoriaId(this.id).subscribe(dato => {
      this.categoria = dato;
    });
  }

  onSubmit(){
    this.categoryService.actualizarCategoria(this.id, this.categoria).subscribe(dato => {
      swal(
        'Categoría creada.',
        'Categoría creada con éxito.',
        'success'
      )
    });
    this.router.navigate(['/categorias']);
  }
}
