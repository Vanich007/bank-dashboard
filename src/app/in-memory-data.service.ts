import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { TransactionType } from './transactionTypes';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const transactions = [
      {
        id: '#KLA-237-393-950',
        amount: 100,
        date: new Date(),
        correspondent: 'Dr Nice',
      },
      {
        id: '#KLA-237-393-9097',
        amount: 100,
        date: new Date(),
        correspondent: 'Narco',
      },
      {
        id: '#KLA-237-393-800',
        amount: 100,
        date: new Date(),
        correspondent: 'Bombasto',
      },
      {
        id: '#KLA-237-393-088',
        amount: 100,
        date: new Date(),
        correspondent: 'Celeritas',
      },
      {
        id: '#KLA-237-393-950',
        amount: 100,
        date: new Date(),
        correspondent: 'Magneta',
      },
      {
        id: '#KLA-237-393-950',
        amount: 100,
        date: new Date(),
        correspondent: 'RubberMan',
      },
      {
        id: '#KLA-237-393-950',
        amount: 100,
        date: new Date(),
        correspondent: 'Dynama',
      },
      {
        id: '#KLA-237-393-950',
        amount: 100,
        date: new Date(),
        correspondent: 'Dr IQ',
      },
      {
        id: '#KLA-237-393-950',
        amount: 100,
        date: new Date(),
        correspondent: 'Magma',
      },
      {
        id: '#KLA-237-393-950',
        amount: 100,
        date: new Date(),
        correspondent: 'Tornado',
      },
    ] as Array<TransactionType>;
    return { transactions };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(transactions: TransactionType[]): string {
    return 'xxx-xxx-xxx';
    // return transactions.length > 0
    //   ? Math.max(...transactions.map((transaction) => transaction.id)) + 1
    //   : 11;
  }
}
