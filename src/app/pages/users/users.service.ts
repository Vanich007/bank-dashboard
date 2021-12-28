import { InvoiceType } from '../../types';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private isLoggedIn: boolean = false;
  loginChange = new Subject<InvoiceType[]>();

  usersUrl = 'http://localhost:3000/users';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  fetchOptionsSubject: any;

  constructor(private http: HttpClient) {}

  //////// Save methods //////////

  /** POST: add a new invoice to the server */
  addInvoice(invoice: InvoiceType): Observable<InvoiceType> {
    console.log('addInvoice', invoice);
    return this.http.post<InvoiceType>(
      this.usersUrl,
      invoice,
      this.httpOptions
    );
  }

  /** DELETE: delete the invoice from the server */
}
