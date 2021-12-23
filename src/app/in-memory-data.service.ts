import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import {
  TransactionType,
  invoicesStatisticsType,
  InvoiceType,
  InvoiceEnumType,
  InvoiceEnumPeriod,
} from './types';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const transactions = [
      {
        id: '#KLA-237-393-950',
        amount: 1030,
        date: new Date(),
        correspondent: 'Dr Nice',
      },
      {
        id: '#KLA-237-393-9097',
        amount: 71.5,
        date: new Date(),
        correspondent: 'Narco',
      },
      {
        id: '#KLA-237-393-800',
        amount: 0.2,
        date: new Date(),
        correspondent: 'Bombasto',
      },
      {
        id: '#KLA-237-393-088',
        amount: 10.2,
        date: new Date(),
        correspondent: 'Celeritas',
      },
      {
        id: '#KLA-237-393-950',
        amount: 0.9,
        date: new Date(),
        correspondent: 'Magneta',
      },
      {
        id: '#KLA-237-393-950',
        amount: 103,
        date: new Date(),
        correspondent: 'RubberMan',
      },
      {
        id: '#KLA-237-393-950',
        amount: 32,
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
    const invoicesStatistics: invoicesStatisticsType = {
      totalInvoices: 32568,
      paidInvoices: 12098,
      unpaidInvoices: 3456,
      totalInvoicesSent: 6321,
    };
    const invoices = [
      {
        id: 1,
        amount: 130,
        date: new Date(),
        name: 'Dr Nice payment',
        type: 1,
        period: InvoiceEnumPeriod.mounthly,
      },
      {
        id: 2,
        amount: 2000,
        date: new Date(),
        name: 'salary',
        type: 0,
        period: InvoiceEnumPeriod.mounthly,
      },
      {
        id: 3,
        amount: 350,
        date: new Date(),
        name: 'renting an apartment for rent',
        type: 0,
        period: InvoiceEnumPeriod.mounthly,
      },
      {
        id: 4,
        amount: 10,
        date: new Date(),
        name: 'utilities',
        type: 0,
        period: InvoiceEnumPeriod.weekly,
      },
      {
        id: 5,
        amount: 20,
        date: new Date(),
        name: 'freelance',
        type: 0,
        period: InvoiceEnumPeriod.dayly,
      },
    ] as Array<InvoiceType>;
    return { invoicesStatistics, transactions, invoices };
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
