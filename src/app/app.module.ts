import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

import {registerLocaleData} from '@angular/common';
import localeF from '@angular/common/locales/fr';
import {AppRoutingModule} from "./app-routing.module";
import {CoreModule} from "./core/core.module";
import {ClientsModule} from "./clients/clients.module";
import {OrdersModule} from "./orders/orders.module";
import {ErrorsModule} from "./errors/errors.module";

registerLocaleData(localeF);


@NgModule({
  declarations: [ // Composant pipe directive
    AppComponent
  ],
  imports: [ // Module
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    CoreModule,
    ClientsModule,
    OrdersModule,
    ErrorsModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'fr-FR'}], //Service
  bootstrap: [AppComponent]
})
export class AppModule {
}
