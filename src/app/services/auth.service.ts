import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly JWT_TOKEN = 'ADMIN_JWT_TOKEN';

  constructor(private http: HttpClient, private router: Router) { }
  public login(data) {
    return this.http.post('https://digi-ticket-java.herokuapp.com/digi-ticket/login', data);
  }
  setToken(token) {
    if (token) {
      localStorage.setItem(this.JWT_TOKEN, token);
    }
    else {
      localStorage.removeItem(this.JWT_TOKEN);
    }
  }
  getToken() {
    return localStorage.getItem(this.JWT_TOKEN);
  }
  logOut() {
    this.setToken(null);
    this.router.navigate(['login']);
  }
}
