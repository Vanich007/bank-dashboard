import { InvoiceType } from '../../types';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InvoiceService {
  invoiceUrl = 'api/invoices';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  /** GET invoicees from the server */
  getInvoices(): Observable<InvoiceType[]> {
    return this.http.get<InvoiceType[]>(this.invoiceUrl).pipe(
      // tap(_ => this.log('fetched invoicees')),
      catchError(this.handleError<InvoiceType[]>('getinvoicees', []))
    );
  }

  /** GET invoice by id. Return `undefined` when id not found */
  getInvoiceNo404<Data>(id: number): Observable<InvoiceType> {
    const url = `${this.invoiceUrl}/?id=${id}`;
    return this.http.get<InvoiceType[]>(url).pipe(
      map((invoicees) => invoicees[0]), // returns a {0|1} element array
      tap((h) => {
        const outcome = h ? `fetched` : `did not find`;
        // this.log(`${outcome} invoice id=${id}`);
      }),
      catchError(this.handleError<InvoiceType>(`getinvoice id=${id}`))
    );
  }

  /** GET invoice by id. Will 404 if id not found */
  getInvoice(id: number): Observable<InvoiceType> {
    const url = `${this.invoiceUrl}/${id}`;
    return this.http.get<InvoiceType>(url).pipe(
      // tap(_ => this.log(`fetched invoice id=${id}`)),
      catchError(this.handleError<InvoiceType>(`getinvoice id=${id}`))
    );
  }

  /* GET invoicees whose name contains search term */
  searchInvoices(term: string): Observable<InvoiceType[]> {
    if (!term.trim()) {
      // if not search term, return empty invoice array.
      return of([]);
    }
    return this.http
      .get<InvoiceType[]>(`${this.invoiceUrl}/?name=${term}`)
      .pipe(
        // tap(x => x.length ?
        //  this.log(`found invoicees matching "${term}"`) :
        //  this.log(`no invoicees matching "${term}"`)),
        catchError(this.handleError<InvoiceType[]>('searchinvoicees', []))
      );
  }

  //////// Save methods //////////

  /** POST: add a new invoice to the server */
  addInvoice(invoice: InvoiceType): Observable<InvoiceType> {
    return this.http
      .post<InvoiceType>(this.invoiceUrl, invoice, this.httpOptions)
      .pipe(
        // tap((newinvoice: InvoiceType) => this.log(`added invoice w/ id=${newinvoice.id}`)),
        catchError(this.handleError<InvoiceType>('addinvoice'))
      );
  }

  /** DELETE: delete the invoice from the server */
  deleteInvoice(id: number): Observable<InvoiceType> {
    const url = `${this.invoiceUrl}/${id}`;

    return this.http.delete<InvoiceType>(url, this.httpOptions).pipe(
      // tap(_ => this.log(`deleted invoice id=${id}`)),
      catchError(this.handleError<InvoiceType>('deleteinvoice'))
    );
  }

  /** PUT: update the invoice on the server */
  updateInvoice(invoice: InvoiceType): Observable<any> {
    return this.http.put(this.invoiceUrl, invoice, this.httpOptions).pipe(
      // tap(_ => this.log(`updated invoice id=${invoice.id}`)),
      catchError(this.handleError<any>('updateinvoice'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
