import { UserType } from './../../types';
import { BaseApi } from './../../core/base-api';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService extends BaseApi {
  loginChange = new Subject<UserType[]>();

  usersUrl = 'users';

  constructor(public override http: HttpClient) {
    super(http);
  }

  register(
    email: string,
    password: string,
    name: string
  ): Observable<UserType> {
    return this.post(this.usersUrl, { email, password, name });
  }

  login(email: string): Observable<UserType> {
    return this.get(`${this.usersUrl}?email=${email}`).pipe(
      map((users: UserType[]) => {
        return users[0] || { email: '', password: '', name: '' };
      })
    );
  }
  getUserByEmail(email: string): Observable<UserType> {
    return this.get(`${this.usersUrl}?email=${email}`).pipe(
      map((users: UserType[]) => {
        return users[0] || { email: '', password: '', name: '' };
      })
    );
  }
}
