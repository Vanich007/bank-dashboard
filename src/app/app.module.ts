import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AuthLayoutComponent } from './shared/layouts/auth-layout/auth-layout.component';
import { SiteLayoutComponent } from './shared/layouts/site-layout/site-layout.component';
import { AsideComponent } from './pages/aside/aside.component';
import { TranzactionsComponent } from './invoices/invoices.component';
import { InvoiceBlocksComponent } from './invoice-blocks/invoice-blocks.component';
import { HeaderComponent } from './header/header.component';
import { InvoiceDetailComponent } from './invoice-detail/invoice-detail.component';
import { FormsModule } from '@angular/forms';
import { SummaryComponent } from './summary/summary.component';
@NgModule({
  declarations: [
    AppComponent,
    AuthLayoutComponent,
    SiteLayoutComponent,
    AsideComponent,
    TranzactionsComponent,
    InvoiceBlocksComponent,
    HeaderComponent,
    InvoiceDetailComponent,
    SummaryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
