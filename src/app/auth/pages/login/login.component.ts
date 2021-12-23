import { AuthResponse } from './../interfaces/usuario';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;

  constructor(private fb: FormBuilder, private _router: Router, private _auth: AuthService) {
    this.formLogin = this.fb.group({
      email: ['tes1@test1.com', [Validators.required]],
      password: ['La**1234', [Validators.required]],
    });
  }

  ngOnInit(): void {}


  // login
  login() {

    const { email, password }= this.formLogin.value;

    this._auth.login(email,password).subscribe(ok => {
      if(ok === true){
        Swal.fire('success',`El usuario ${email} ingresó de manera exitosa!`, 'success')
        this._router.navigateByUrl('/dashboard')
      }else{
        Swal.fire('Error',ok,'error')//Ésta linea de código nos da el mesaje de error.
        this._router.navigateByUrl('/auth/login')
      }
    });
  }

}
