import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { AuthService } from './../../../shared/services/auth.service';
import { UserType } from './../../../types';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  message = '';
  form: FormGroup = new FormGroup({
    name: new FormControl(''),
  });

  constructor(
    private router: Router,
    private authService: AuthService,
    private UserService: UserService,
    private _snackBar: MatSnackBar
  ) {}

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5 * 1000,
    });
  }

  onSubmit() {
    this.UserService.login(this.form.value.email).subscribe(
      (user: UserType) => {
        if (user) {
          if (user.password === this.form.value.password) {
            this.authService.login();
            window.localStorage.setItem('user', JSON.stringify(user));
            this.router.navigate(['/dashboard']);
          } else {
            this.openSnackBar('Неверный пароль', 'Попробовать еще');
          }
        } else this.openSnackBar('Пользователь не зарегистрирован', 'OK');
      }
    );
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),

      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }
}
