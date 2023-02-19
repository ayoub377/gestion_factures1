import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsComponent} from "./products/products.component";
import {CustomersComponent} from "./customers/customers.component";
import {FacturesComponent} from "./factures/factures.component";
import {OrdersDetailsComponent} from "./orders-details/orders-details.component";

const routes: Routes = [
  {
    path: 'products', component: ProductsComponent
  },
  {
    path: 'customers', component: CustomersComponent
  },
  {
    path: 'factures/:customerId' , component: FacturesComponent
  },
  {
    path: 'factures-details/:facturesId' , component: OrdersDetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

