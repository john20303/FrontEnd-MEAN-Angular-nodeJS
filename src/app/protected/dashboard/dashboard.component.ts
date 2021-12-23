import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {

  get usuario(){
    return this._auth.usuario;
  }
  constructor(private _router: Router, private _auth: AuthService) {}

  logoutSession() {

    this._auth.logout();
    this._router.navigate(['/auth/login']);
  }
}
