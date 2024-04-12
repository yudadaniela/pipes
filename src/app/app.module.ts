import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from './shared/shared.module';

import localEsCo from'@angular/common/locales/es-CO'
import localFrCA from "@angular/common/locales/fr-CA";
import { registerLocaleData } from "@angular/common";

registerLocaleData(localEsCo)
registerLocaleData(localFrCA)

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide:LOCALE_ID, useValue:'es-CO'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
