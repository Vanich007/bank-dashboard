import { AuthGuard } from './shared/guards/auth.guard';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AuthLayoutComponent } from './shared/layouts/auth-layout/auth-layout.component';
import { SiteLayoutComponent } from './shared/layouts/site-layout/site-layout.component';
import { AsideComponent } from './pages/aside/aside.component';

import { HeaderComponent } from './header/header.component';

import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { UsersPageModule } from './pages/users/login.module';
import { AuthService } from './shared/services/auth.service';
import { UserService } from './pages/users/user.service';
import { RegisterComponent } from './pages/users/register/register.component';
import { MaterialModule } from './shared/modules/material.module';
import { DashboardPageModule } from './pages/dashboard/dashboard.module';

@NgModule({
  declarations: [
    AppComponent,
    AuthLayoutComponent,
    SiteLayoutComponent,
    AsideComponent,

    HeaderComponent,
    RegisterComponent,

    // DatePickerInputComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    DashboardPageModule,
    MaterialModule,
    UsersPageModule,
    RouterModule,
  ],
  providers: [UserService, AuthService, AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
