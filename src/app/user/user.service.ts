/**
 * Created by Radu on 3/25/2017.
 */
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import {User} from "./user";


@Injectable()
export class UserService {
  private userUrl = 'https://randomuser.me/api/?results=10';
  private users : User[];
  constructor(private _http: Http) {}

  //the Observable class gives the list of user Injected to many places
  // we can use the values it injects to the service
  getUsers(): Observable<User[]> {
    return this._http.get(this.userUrl)
      .map((response: Response) => <User[]> response.json()['results'])
      .do(data => this.users = data)
       .do(data => console.log(this.users))
      .catch(this.handleError);
  }
  // error handler every exception or error will be logged to the console
  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
  // find User by id that we initialized by the Users array , in a production
  // environment we will send a backend request with id and the backend will fetch it
  // from the database
  // getUser(id: number): User{
  //   return  this.users.find(User => User.id == id);
  // }
}
