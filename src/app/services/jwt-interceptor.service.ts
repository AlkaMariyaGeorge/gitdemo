import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { request } from 'http';


@Injectable({
  providedIn: 'root'
})
export class JwtInterceptorService  implements HttpInterceptor{

  constructor(private authService :AuthService) { }
  intercept(request:HttpRequest<any>,next:HttpHandler): Observable<HttpEvent<any>>{
    if(!request.url.includes('login')){
    request= request.clone(
      {
        setHeaders:{
          'Authorization' : `Bearer ${this.authService.getToken()}`},
        }
      
    );

  }
  return next.handle(request);
}}
