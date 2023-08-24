import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'covidApp';
  globalData: any;
  countryData: any= {};
  INData: any={};
  allCountriesData: any=[0];
  constructor(public http: HttpClient) {
    this.http.get('https://api.covid19api.com/summary')
    .subscribe((value:any)=>{
      console.log(value.Global);
      this.globalData = value.Global;

      this.allCountriesData = value.Countries;
      this.allCountriesData.forEach((CountryList) => {
        if(CountryList.CountryCode=="IN"){
           this.INData = CountryList;
      }
    

      });

    });
}
}
