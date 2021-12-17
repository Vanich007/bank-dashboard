import { TransactionType } from './transactionTypes';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TransactionsService {
  transactionUrl = 'api/transactions';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  /** GET heroes from the server */
  getTransactions(): Observable<TransactionType[]> {
    return this.http.get<TransactionType[]>(this.transactionUrl).pipe(
      // tap(_ => this.log('fetched heroes')),
      catchError(this.handleError<TransactionType[]>('getHeroes', []))
    );
  }

  /** GET hero by id. Return `undefined` when id not found */
  getTransactionNo404<Data>(id: number): Observable<TransactionType> {
    const url = `${this.transactionUrl}/?id=${id}`;
    return this.http.get<TransactionType[]>(url).pipe(
      map((heroes) => heroes[0]), // returns a {0|1} element array
      tap((h) => {
        const outcome = h ? `fetched` : `did not find`;
        // this.log(`${outcome} hero id=${id}`);
      }),
      catchError(this.handleError<TransactionType>(`getHero id=${id}`))
    );
  }

  /** GET hero by id. Will 404 if id not found */
  getTransaction(id: number): Observable<TransactionType> {
    const url = `${this.transactionUrl}/${id}`;
    return this.http.get<TransactionType>(url).pipe(
      // tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<TransactionType>(`getHero id=${id}`))
    );
  }

  /* GET heroes whose name contains search term */
  searchTransactions(term: string): Observable<TransactionType[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http
      .get<TransactionType[]>(`${this.transactionUrl}/?name=${term}`)
      .pipe(
        // tap(x => x.length ?
        //  this.log(`found heroes matching "${term}"`) :
        //  this.log(`no heroes matching "${term}"`)),
        catchError(this.handleError<TransactionType[]>('searchHeroes', []))
      );
  }

  //////// Save methods //////////

  /** POST: add a new hero to the server */
  addTransaction(hero: TransactionType): Observable<TransactionType> {
    return this.http
      .post<TransactionType>(this.transactionUrl, hero, this.httpOptions)
      .pipe(
        // tap((newHero: TransactionType) => this.log(`added hero w/ id=${newHero.id}`)),
        catchError(this.handleError<TransactionType>('addHero'))
      );
  }

  /** DELETE: delete the hero from the server */
  // deleteHero(id: number): Observable<TransactionType> {
  //   const url = `${this.transactionUrl}/${id}`;

  //   return this.http.delete<TransactionType>(url, this.httpOptions).pipe(
  //     // tap(_ => this.log(`deleted hero id=${id}`)),
  //     catchError(this.handleError<TransactionType>('deleteHero'))
  //   );
  // }

  /** PUT: update the hero on the server */
  updateTransaction(hero: TransactionType): Observable<any> {
    return this.http.put(this.transactionUrl, hero, this.httpOptions).pipe(
      // tap(_ => this.log(`updated hero id=${hero.id}`)),
      catchError(this.handleError<any>('updateHero'))
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
