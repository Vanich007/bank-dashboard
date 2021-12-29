import { AuthService } from './../shared/services/auth.service';
import { InvoiceService } from './../pages/dashboard/invoice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  email: string = '';
  name: string = '';

  constructor(
    private invoiceService: InvoiceService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    if (this.authService.isLoggedIn()) {
      const user = window.localStorage.getItem('user');

      if (user) {
        const userObj = JSON.parse(user);
        this.email = userObj.email ? userObj.email : '';
        this.name = userObj.name ? userObj.name : '';
      }
    }
  }
  onSearch(value: string) {
    this.invoiceService.searchInvoices(value);
  }
}
