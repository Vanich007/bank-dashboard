import { UserType } from './../../../types';
import { AuthService } from './../../services/auth.service';
import { UserService } from './../../../pages/users/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.scss'],
})
export class AuthLayoutComponent implements OnInit {
  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const user = window.localStorage.getItem('user');
    if (user) {
      const userObj = JSON.parse(user);
      this.userService.login(userObj.email).subscribe((user: UserType) => {
        this.authService.login();
        this.router.navigate(['/dashboard']);
      });
    }
  }
}
