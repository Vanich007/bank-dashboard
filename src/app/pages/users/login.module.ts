import { MaterialModule } from '../../shared/modules/material.module';
import { ReactiveFormsModule } from '@angular/forms';

import { UsersService } from './users.service';
import { UsersRoutingModule } from './login-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {} from 'angular-bootstrap-datetimepicker';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  exports: [RouterModule],
  providers: [UsersService],
})
export class UsersPageModule {}
