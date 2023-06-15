import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/modelos/category';
import { CategoryService } from 'src/app/servicios/category.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit{
  categorias: Category[];

  constructor(private categoryService: CategoryService,private router:Router,private scroller: ViewportScroller){}

  ngOnInit(): void{
    this.obtenerCategorias();
    this.toElement();
  }

  toElement() {
    this.scroller.scrollToAnchor("scrollElement");
  }

  private obtenerCategorias(){
    this.categoryService.obtenerCategorias().subscribe(dato => {
      this.categorias = dato;
    });
  }

  actualizarCategoria(id: number){
    this.router.navigate(['categorias/editar-categoria',id]);
  }

  eliminarCategoria(id: number){
    swal({
      title:'¿Estás seguro?',
      text:'Confirmar que quieres eliminar la categoría',
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
        this.categoryService.eliminarCategoria(id).subscribe(dato => {
          this.obtenerCategorias();
          swal(
            'Categoría eliminada.',
            'Categoría eliminado con éxito.',
            'success'
          )
        });
      }
    });
  }
}
