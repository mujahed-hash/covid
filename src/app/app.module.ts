import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SummaryComponent } from './summary/summary.component';
import{HttpClientModule} from '@angular/common/http';
import { CountryComponent } from './country/country.component';
import { AllcountriesComponent } from './allcountries/allcountries.component';


@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    CountryComponent,
    AllcountriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
