import { InvoiceService } from './../pages/dashboard/invoice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private invoiceService: InvoiceService) {}

  ngOnInit(): void {}
  onSearch(value: string) {
    this.invoiceService.searchInvoices(value);
  }
}
