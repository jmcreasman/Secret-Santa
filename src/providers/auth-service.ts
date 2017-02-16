import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

export class User {
  name: string;
  password: string;
  email: string;

  constructor(name: string, password: string, email: string) {
    this.name = name;
    this.password = password;
    this.email = email;
  }
}

export class Account {
  userId: string;
  password: string;
  email: string;

  constructor(userId: string, password: string, email: string) {
    this.userId = userId;
    this.password = password;
    this.email = email;
  }

}

@Injectable()
export class AuthService {
  currentUser: User;
  accounts: Array<Account> = [];

  public login(credentials) {
    // Check for missing info
    if (credentials.username === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    }

    // Check to see if an account exists.
    let account = this.getAccount(credentials.username);
    if (!account) {
      return Observable.throw("User name not found");
    }

    // Check to see if they have used the correct password.
    if (account.password !== credentials.password) {
      return Observable.throw("Invalid user name or password");
    }

    return Observable.create(observer => {
      // At this point make a request to your backend to make a real check!
      let access = (account.userId === credentials.username && account.password === credentials.password);
      if (access) {
        this.currentUser = new User(account.userId, account.password, account.email);
      }
      observer.next(access);
      observer.complete();
    });
  }

  public register(credentials) {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      // At this point store the credentials to your backend!
      let existingAccount = this.getAccount(credentials.username);
      if (existingAccount) {
        return Observable.throw("Account already exists");
      }

      this.accounts.push(new Account(credentials.username, credentials.password, credentials.email));

      return Observable.create(observer => {
        observer.next(true);
        observer.complete();
      });
    }
  }

  public getUserInfo(): User {
    return this.currentUser;
  }

  public logout() {
    return Observable.create(observer => {
      this.currentUser = null;
      observer.next(true);
      observer.complete();
    });
  }

  getAccount(username) {
    for (var account of this.accounts) {
      if (account.userId === username) {
        return account;
      }
    }
    return null;
  }
}