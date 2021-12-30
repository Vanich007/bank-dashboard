import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, Subject, tap } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserType } from '../../types';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private isLoggedIn: boolean = false;
  loginChange = new Subject<UserType[]>();

  usersUrl = 'http://localhost:3000/users';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  fetchOptionsSubject: any;

  constructor(private http: HttpClient) {}

  register(
    email: string,
    password: string,
    name: string
  ): Observable<UserType> {
    return this.http.post<UserType>(
      this.usersUrl,
      { email, password, name },
      this.httpOptions
    );
  }

  login(email: string, password: string): any {
    return this.http
      .get<UserType[]>(`${this.usersUrl}?email=${email}`)
      .pipe(map((users: UserType[]) => (users[0] ? users[0] : undefined)));
  }
  getUserByEmail(email: string): any {
    return this.http
      .get<UserType[]>(`${this.usersUrl}?email=${email}`)
      .pipe(map((users: UserType[]) => (users[0] ? users[0] : undefined)));
  }
}
//,
//map((response: Response) => response.json())
