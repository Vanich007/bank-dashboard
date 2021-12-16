import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { TransactionType } from './transactionTypes';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const transactions = [
      { id: 11, amount: 100, date: new Date(), correspondent: 'Dr Nice' },
      { id: 12, amount: 100, date: new Date(), correspondent: 'Narco' },
      { id: 13, amount: 100, date: new Date(), correspondent: 'Bombasto' },
      { id: 14, amount: 100, date: new Date(), correspondent: 'Celeritas' },
      { id: 15, amount: 100, date: new Date(), correspondent: 'Magneta' },
      { id: 16, amount: 100, date: new Date(), correspondent: 'RubberMan' },
      { id: 17, amount: 100, date: new Date(), correspondent: 'Dynama' },
      { id: 18, amount: 100, date: new Date(), correspondent: 'Dr IQ' },
      { id: 19, amount: 100, date: new Date(), correspondent: 'Magma' },
      { id: 20, amount: 100, date: new Date(), correspondent: 'Tornado' },
    ] as Array<TransactionType>;
    return { transactions };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(transactions: TransactionType[]): number {
    return transactions.length > 0
      ? Math.max(...transactions.map((transaction) => transaction.id)) + 1
      : 11;
  }
}
