import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemperatureModule } from './temperature/temperature.module';
import { HttpClientModule } from '@angular/common/http';
import { UnitConverterService } from './temperature/services/unit-converter.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TemperatureModule
  ],
  providers: [
    UnitConverterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
