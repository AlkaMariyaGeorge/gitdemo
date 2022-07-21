import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }
 public getData(){
    return this.http.get("https://digi-ticket-java.herokuapp.com/digi-ticket/user");
  }
}
