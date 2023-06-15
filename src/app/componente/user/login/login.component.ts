import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './../../../servicios/user.service';
import { User, UserSimple } from 'src/app/modelos/user';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  usuario: UserSimple = new UserSimple();
  usuarios:User[];
  encontrado: User[];

  constructor(private UserService: UserService,private router:Router,private scroller: ViewportScroller) {}

  ngOnInit(): void {
    this.obtenerUsuarios();
    this.toElement();
  }

  toElement() {
    this.scroller.scrollToAnchor("scrollElement");
  }

  obtenerUsuarios(){
    this.UserService.obtenerUsuarios().subscribe(dato => {
      this.usuarios = dato;
      console.log("usuarios: ", this.usuarios);
    });
  }

  onSubmit(){
    this.router.navigate(['']);
    this.comprobarUsuario();

    if (this.encontrado.length > 0) {
      localStorage.setItem("usuario", JSON.stringify(this.encontrado[0]));
      localStorage.setItem("logged", "true");
      localStorage.setItem("admin", JSON.stringify(this.encontrado[0].admin));
      localStorage.setItem("UserName", JSON.stringify(this.encontrado[0].userName));
    }
  }

  comprobarUsuario(){
    this.encontrado = this.usuarios.filter(dato => dato.userName === this.usuario.userName && dato.password === this.usuario.password);
  }

}
