import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private route: Router) {}

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isLogged() {
    return this.getToken() !== null;
  }

  login(userInfo: { email: string; password: string }): Observable<string | boolean> {
    if (userInfo.email === 'artem@gmile.com' && userInfo.password === 'artem123456') {
      this.setToken('eqwewrdfsdfrtfdgqe12312');
      return of(true);
    } else {
      return throwError(() => new Error('Failed login'));
    }
  }
}
