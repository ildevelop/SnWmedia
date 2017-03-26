import {Component, OnInit} from '@angular/core';
import {User} from "./user";
import {UserService} from "./user.service";
import {isNullOrUndefined} from "util";
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.less']
})
export class UserComponent implements OnInit {


  errorMessage: string;
  // user:User;
  users: User[];
  infoclick:string= "user";

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers()
      .subscribe(users => this.users = users,
        error => this.errorMessage = <any>error);

  }

  opn_info(id:string){
    if(id==='user' ){
      console.log("user");
      this.infoclick='user';
    }
    else if(id==='sms'){
      this.infoclick='sms';
    }
    else if(id==='calendar'){
      this.infoclick='calendar';
    }
    else if(id==='map'){
      this.infoclick='map';
    }
    else if(id==='phone'){
      this.infoclick='phone';
    }
    else if(id==='lock'){
      this.infoclick='lock';
    }
    else {
      this.infoclick='user';
    }

  }

}
