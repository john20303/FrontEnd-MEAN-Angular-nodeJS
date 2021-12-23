import Swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Usuario } from '../interfaces/usuario';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {
  formRegistro: FormGroup;

  constructor(
    private fb: FormBuilder,
    private _router: Router,
    private _auth: AuthService
  ) {
    this.formRegistro = this.fb.group({
      name: ['test3', [Validators.required]],
      email: ['test3@test3.com', [Validators.required]],
      password: ['La**1234', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  registro() {
    const { name, email, password } = this.formRegistro.value;
    this._auth.registrar(name, email, password).subscribe((ok) => {
      if(ok === true){
        Swal.fire('success',`El usuario ${name} se registro de manera exitosa!`, 'success')
        this._router.navigateByUrl('/dashboard')
      }else{
        Swal.fire('Error',ok,'error')//Ésta linea de código nos da el mesaje de error.
        // this._router.navigateByUrl('/auth/login')
      }
    });
  }
}
// Swal.fire('success',`El usuario ${res.name} ha sido creado con exito.`, 'success')
