import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/modelos/category';
import { CategoryService } from 'src/app/servicios/category.service';

@Component({
  selector: 'app-mostrar-category',
  templateUrl: './mostrar-category.component.html',
  styleUrls: ['./mostrar-category.component.css']
})
export class MostrarCategoryComponent implements OnInit{
  categorias: Category[];

  constructor(private categoryService: CategoryService,private router:Router,private scroller: ViewportScroller) {}

  ngOnInit(): void {
    this.obtenerCategorias();
    this.toElement();
  }

  toElement() {
    this.scroller.scrollToAnchor("scrollElement");
  }

  private obtenerCategorias(){
    this.categoryService.obtenerCategorias().subscribe(dato => {
      this.categorias = dato;
      console.log("categorias: ", this.categorias);
    });
  }

  mandarProducto(id: number){
    this.router.navigate(['mostrar-categoria/product',id]);
  }
}
