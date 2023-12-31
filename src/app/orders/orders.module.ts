import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PageAddOrderComponent} from "./pages/page-add-order/page-add-order.component";
import {PageEditOrderComponent} from "./pages/page-edit-order/page-edit-order.component";
import {PageListOrdersComponent} from "./pages/page-list-orders/page-list-orders.component";



@NgModule({
  declarations: [
    PageAddOrderComponent,
    PageEditOrderComponent,
    PageListOrdersComponent
  ],
  imports: []
})
export class OrdersModule { }
