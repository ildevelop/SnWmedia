import {Component, OnInit} from '@angular/core';
import {User} from "./user";
import {UserService} from "./user.service";
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.less']
})
export class UserComponent implements OnInit {


  errorMessage: string;
  // user:User;
  users: User[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers()
      .subscribe(users => this.users = users,
        error => this.errorMessage = <any>error);

  }



}
