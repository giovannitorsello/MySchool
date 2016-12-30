import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';



export class User {
  username: string;
  password: string;
  email: string;
  
  constructor(username: string, password: string, email: string) {
    this.username = username;
    this.password = password;
    this.email = email;
  }
}

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AuthProvider {

  currentUser: User;
  
  constructor(public http: Http) {
    console.log('Hello AuthProvider Provider');
  }

 public login(credentials) {
      console.log("Begin validation.");
      console.log(credentials);
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      return Observable.create(observer => {
        
          //Place db  connection.
          // At this point make a request to your backend to make a real check!
        let access = (credentials.username === "torsello" && credentials.password === "essequel");
        
        if(access) console.log("Ok. Valid credentials.");
        
        this.currentUser = new User('torsello', 'essequel', 'giovanni.torsello@gmail.com');
        observer.next(access);
        observer.complete();
      });
    }
  }
  
  public register(credentials) {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      // At this point store the credentials to your backend!
      return Observable.create(observer => {
        observer.next(true);
        observer.complete();
      });
    }
  }
 
  public getUserInfo() : User {
    return this.currentUser;
  }
 
  public logout() {
    return Observable.create(observer => {
      this.currentUser = null;
      observer.next(true);
      observer.complete();
    });
  }
  
  


}
