import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { GoogleMapsModule } from '@angular/google-maps';

import { AppComponent } from './app.component';
import { GoogleMapsDemoModule } from './google-maps-demo/google-maps-demo.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    GoogleMapsModule,
    HttpClientModule,
    CommonModule,
    GoogleMapsDemoModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
