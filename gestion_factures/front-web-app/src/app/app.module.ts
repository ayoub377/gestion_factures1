import {APP_INITIALIZER, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import {HttpClientModule} from "@angular/common/http";
import { CustomersComponent } from './customers/customers.component';
import { FacturesComponent } from './factures/factures.component';
import { OrdersDetailsComponent } from './orders-details/orders-details.component';
import {KeycloakSecurityService} from "./services/keycloak-security.service";
import {KeycloakAngularModule} from "keycloak-angular";


export function kcFactory(KcSecurity:KeycloakSecurityService) {
  return () => KcSecurity.init();
}

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CustomersComponent,
    FacturesComponent,
    OrdersDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    KeycloakAngularModule,
  ],
  providers: [
    {provide:APP_INITIALIZER,deps:[KeycloakSecurityService],useFactory:kcFactory,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
