import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from './../../../servicios/user.service';
import { User } from 'src/app/modelos/user';
import swal from 'sweetalert2';

@Component({
  selector: 'app-editar-user',
  templateUrl: './editar-user.component.html',
  styleUrls: ['./editar-user.component.css']
})
export class EditarUserComponent implements OnInit{
  id: number;
  usuario: User = new User();

  constructor(private UserService: UserService,private router:Router,private route:ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.UserService.obtenerUsuarioPorId(this.id).subscribe(dato => {
      this.usuario = dato;
    });
  }

  onSubmit(){
    this.UserService.actualizarUsuario(this.id, this.usuario).subscribe(dato => {
      swal(
        'Usuario editado.',
        'Usuario editado con éxito.',
        'success'
      )
    });
    this.router.navigate(['/usuarios']);
  }
}
