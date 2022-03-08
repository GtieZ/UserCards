import { Injectable } from '@angular/core';
import { RestService } from './rest.service';

import { general } from './general';
import { User } from '../models/user';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: User[];
  private url: string;

  constructor(private _restService: RestService) {
    this.users = [];
    this.url = general.url;
  }

  getAllUsers(pageNumber: number): User[] {
    let endpoint: string = this.url + 'users?page=' + pageNumber.toString();
    this._restService.get(endpoint)
      .subscribe({
        next: response => {
          response.data.forEach((user: User) => this.users.push(user));
          if (response.page < response.total_pages) {
            this.getAllUsers(response.page + 1);
          }
        },
        error: err => {
          console.log(err)
        }
      });
    return this.users;    
  }


}
