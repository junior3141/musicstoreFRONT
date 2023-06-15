import { ViewportScroller } from '@angular/common';
import { UserService } from './../../../servicios/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/modelos/user';
import swal from 'sweetalert2';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})
export class RegistrarUsuarioComponent implements OnInit{
  usuario: User = new User();

  constructor(private UserService: UserService,private router:Router,private scroller: ViewportScroller) {}

  ngOnInit(): void {
    this.toElement();
  }

  toElement() {
    this.scroller.scrollToAnchor("scrollElement");
  }

  guardarProducto(){
    this.UserService.guardarUsuario(this.usuario).subscribe(dato => {
      swal(
        'Usuario creado.',
        'Usuario creado con éxito.',
        'success'
      )
    });
  }

  onSubmit(){
    this.guardarProducto();
    this.router.navigate(['']);
  }

}
