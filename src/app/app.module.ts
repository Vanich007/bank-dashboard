import { MaterialModule } from './shared/modules/material.module';
import { DashboardPageModule } from './pages/dashboard/dashboard.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AuthLayoutComponent } from './shared/layouts/auth-layout/auth-layout.component';
import { SiteLayoutComponent } from './shared/layouts/site-layout/site-layout.component';
import { AsideComponent } from './pages/aside/aside.component';

import { HeaderComponent } from './header/header.component';

import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { UsersPageModule } from './pages/users/login.module';

@NgModule({
  declarations: [
    AppComponent,
    AuthLayoutComponent,
    SiteLayoutComponent,
    AsideComponent,

    HeaderComponent,

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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
