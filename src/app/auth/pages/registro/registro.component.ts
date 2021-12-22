import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  formRegistro:FormGroup;

  constructor(private fb: FormBuilder) {

    this.formRegistro = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required,]],
      password: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  registro(){
    console.log(this.formRegistro.value)
  }

}
