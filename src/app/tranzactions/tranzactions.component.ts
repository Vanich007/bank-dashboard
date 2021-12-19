import { TransactionsService } from './../transactions.service';
import { TransactionType } from '../types';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tranzactions',
  templateUrl: './tranzactions.component.html',
  styleUrls: ['./tranzactions.component.scss'],
})
export class TranzactionsComponent implements OnInit {
  transactions?: TransactionType[];
  constructor(private transactionsService: TransactionsService) {}
  getTransactions() {
    this.transactionsService.getTransactions().subscribe((t) => {
      this.transactions = t;
      console.log(t);
    });
  }
  ngOnInit(): void {
    this.getTransactions();
  }
}
