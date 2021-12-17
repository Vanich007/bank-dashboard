import { Component, OnInit } from '@angular/core';
type menuItemType = { id: number; src: string; class: string; text: string };
@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss'],
})
export class AsideComponent implements OnInit {
  menuItems: menuItemType[] = [
    { id: 1, src: '/mywallet', class: 'wallet', text: 'My Wallet' },
    { id: 2, src: '/payment', class: 'payment', text: 'Payment' },
    { id: 3, src: '/payment', class: 'invoice', text: 'Invoice' },
    { id: 4, src: '/payment', class: 'settings', text: 'Settings' },
    { id: 5, src: '/payment', class: 'transactions', text: 'Transactions' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
