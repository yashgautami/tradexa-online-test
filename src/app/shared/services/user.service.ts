import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http: HttpClient) { }

  getUserList() {
      return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

}
