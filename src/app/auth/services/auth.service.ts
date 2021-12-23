import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthResponse, Usuario } from '../pages/interfaces/usuario';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url: string = environment.baseUrl;
  private _usuario!: Usuario;

  constructor(private _http: HttpClient) {}



  // Aquí lo que hacemos es llenar con datos nuestra variable _usuario
  get usuario() {
    return { ...this._usuario };
  }





  // Ésta es la función del login
  login(email: string, password: string) {
    const body = {
      email,
      password,
    };
    return this._http.post<AuthResponse>(`${this.url}/auth`, body)
    .pipe(
      tap((res) => {
        if (res.ok) {
          localStorage.setItem('token', res.token!);
        }
      }),
      map((res) => res.ok),
      catchError((err) => of(err.error.msg))
    );
  }






  // Ésta es la función del registrar
  registrar(name: string,email: string,password:string) {
    const body = {
      name,
      email,
      password,
    };
    return this._http.post<AuthResponse>(`${this.url}/auth/register`, body)
    .pipe(
      tap((res) => {
        if (res.ok) {
          localStorage.setItem('token', res.token!);
        }
      }),
      map((res) => res.ok),
      catchError((err) => of(err.error.msg))
    );
  }





  // Función para válidar token
  validarToken(): Observable<boolean> {
    const headers = new HttpHeaders()
    .set('x-token',localStorage.getItem('token') || '');

    return this._http.get<AuthResponse>(`${this.url}/auth/renew`, { headers })
      .pipe(
        map((res) => {
          if (res.ok) {
            localStorage.setItem('token', res.token!);
            this._usuario = {
              name: res.name!,
              uid: res.uid!,
              email: res.email!,
            };
          }
          return res.ok;
        }),
        catchError((err) => of(err))
      );
  }





  logout() {
    localStorage.removeItem('token');
  }
}
