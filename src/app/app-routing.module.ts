import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

import {PageNotFoundComponent} from "./errors/pages/page-not-found/page-not-found.component";
import {PageListOrdersComponent} from "./orders/pages/page-list-orders/page-list-orders.component";
import {PageAddOrderComponent} from "./orders/pages/page-add-order/page-add-order.component";
import {PageEditOrderComponent} from "./orders/pages/page-edit-order/page-edit-order.component";

const routes: Routes = [
  {path: '', redirectTo: '/clients', pathMatch: 'full'},
  {path: 'edit/order', component: PageEditOrderComponent},
  {path: 'clients', loadChildren: () => import('./clients/clients.module').then(m => m.ClientsModule)},
  {path: 'orders', component: PageListOrdersComponent},
  {path: 'add', component: PageAddOrderComponent},
  {path: '**', component: PageNotFoundComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
