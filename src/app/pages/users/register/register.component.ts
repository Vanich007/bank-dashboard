import { Router } from '@angular/router';
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { AuthService } from './../../../shared/services/auth.service';
import { UserType } from './../../../types';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  message = '';
  form: FormGroup = new FormGroup({
    name: new FormControl(''),
  });

  constructor(
    private router: Router,
    private authService: AuthService,
    private userService: UserService,
    private _snackBar: MatSnackBar
  ) {}

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5 * 1000,
    });
  }

  onSubmit() {
    this.userService
      .register(
        this.form.value.email,
        this.form.value.password,
        this.form.value.name
      )
      .subscribe((user: UserType) => {
        if (user) {
          if (user.password === this.form.value.password) {
            this.authService.login();
            window.localStorage.setItem('user', JSON.stringify(user));
            this.router.navigate(['/dashboard']);
          } else {
            this.openSnackBar('Неверный пароль', 'Попробовать еще');
          }
        } else this.openSnackBar('Пользователь не зарегистрирован', 'OK');
      });
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl(
        '',
        [Validators.required, Validators.email],
        this.forbiddenEmail.bind(this)
      ),

      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }
  forbiddenEmail(control: AbstractControl): Promise<any> {
    return new Promise((resolve, reject) => {
      this.userService
        .getUserByEmail(control.value)
        .subscribe((u: UserType) => {
          if (u) {
            resolve({ forbiddenEmail: true });
          } else {
            resolve(null);
          }
        });
    });
  }
}
