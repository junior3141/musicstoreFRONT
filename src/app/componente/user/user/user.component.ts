import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './../../../servicios/user.service';
import { User } from 'src/app/modelos/user';
import swal from 'sweetalert2';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{
  usuario:User[];

  constructor(private UserService: UserService,private router:Router,private scroller: ViewportScroller) {}

  ngOnInit(): void{
    this.obtenerUsuarios();
    this.toElement();
  }

  toElement() {
    this.scroller.scrollToAnchor("scrollElement");
  }

  obtenerUsuarios(){
    this.UserService.obtenerUsuarios().subscribe(dato => {
      this.usuario = dato;
      console.log("usuarios: ", this.usuario);
    });
  }

  actualizarUsuario(id: number){
    this.router.navigate(['usuarios/editar-usuario',id]);
  }

  eliminarUsuario(id: number){
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
        this.UserService.eliminarUsuario(id).subscribe(dato => {
          this.obtenerUsuarios();
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
