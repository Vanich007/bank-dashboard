import { UserService } from './../pages/users/user.service';
import { UsersPageModule } from './../pages/users/login.module';
import { AuthService } from './../shared/services/auth.service';
import { InvoiceService } from './../pages/dashboard/invoice.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() ChangeSearchWord = new EventEmitter();
  email: string = '';
  name: string = '';

  constructor(
    private invoiceService: InvoiceService,
    private authService: AuthService,
    private userService: UserService // private router: Router
  ) {}

  ngOnInit(): void {
    const user = window.localStorage.getItem('user');
    if (user) {
      const userObj = JSON.parse(user);
      this.userService.login(userObj.email);

      if (this.authService.isLoggedIn()) {
        if (user) {
          this.email = userObj.email ? userObj.email : '';
          this.name = userObj.name ? userObj.name : '';
        }
      }
    }
  }
  onSearch(value: string) {
    this.invoiceService.setSearchConditions(value);
    this.invoiceService.getInvoicesPart(0, 4);
    this.ChangeSearchWord.emit('');
  }
  logout() {
    this.authService.logout();
  }
}
