import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';

import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {

  public users: User[];

  constructor(private _userService: UserService) {
    this.users = [];
   }

  ngOnInit(): void {
    this.users = this._userService.getAllUsers(1);
  }



}
