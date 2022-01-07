import { catchError, Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
export class BaseApi {
  constructor(public http: HttpClient) {}
  url = 'http://localhost:3000/';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  getUrl(url: string) {
    return this.url + url;
  }
  get(url: string): Observable<any> {
    return this.http
      .get(this.getUrl(url))
      .pipe(catchError(this.handleError<any>(`url`)));
  }

  post(url: string, data: any): Observable<any> {
    return this.http
      .post(this.getUrl(url), data, this.httpOptions)
      .pipe(catchError(this.handleError<any>(`url`)));
  }

  patch(url: string, data: any): Observable<any> {
    return this.http
      .patch(this.getUrl(url), data, this.httpOptions)
      .pipe(catchError(this.handleError<any>(`url`)));
  }

  delete(url: string): Observable<any> {
    return this.http
      .delete(this.getUrl(url), this.httpOptions)
      .pipe(catchError(this.handleError<any>(`url`)));
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
