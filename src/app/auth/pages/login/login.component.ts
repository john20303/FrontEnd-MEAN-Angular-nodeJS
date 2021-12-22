import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formLogin = this.fb.group({
      email: ['tes1@test1.com', [Validators.required]],
      password: ['La**1234', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  login() {
    console.log(this.formLogin.value);
    console.log(this.formLogin.valid);
    // this.formLogin.reset();
  }
}
