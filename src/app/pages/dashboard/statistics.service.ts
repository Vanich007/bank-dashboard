import { invoicesStatisticsType } from '../../types';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StatisticsService {
  statisticUrl = 'api/invoicesStatistics';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  getStatistics(): Observable<invoicesStatisticsType> {
    return this.http.get<invoicesStatisticsType>(this.statisticUrl).pipe(
      // tap(_ => this.log('fetched heroes')),
      catchError(this.handleError<invoicesStatisticsType>('getStatistics'))
    );
  }
  constructor(private http: HttpClient) {}
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
