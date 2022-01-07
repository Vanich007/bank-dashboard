import { BaseApi } from './../../core/base-api';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, Subject, tap } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserType } from '../../types';

@Injectable({
  providedIn: 'root',
})
export class UserService extends BaseApi {
  loginChange = new Subject<UserType[]>();

  usersUrl = 'users';

  fetchOptionsSubject: any;

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

  login(email: string, password: string): any {
    return this.get(`${this.usersUrl}?email=${email}`).pipe(
      map((users: UserType[]) => (users[0] ? users[0] : undefined))
    );
  }
  getUserByEmail(email: string): any {
    return this.get(`${this.usersUrl}?email=${email}`).pipe(
      map((users: UserType[]) => (users[0] ? users[0] : undefined))
    );
  }
}
