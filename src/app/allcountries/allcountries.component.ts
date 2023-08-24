import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-allcountries',
  templateUrl: './allcountries.component.html',
  styleUrls: ['./allcountries.component.css']
})
export class AllcountriesComponent implements OnChanges {
  image:string="https://indiainfodesk.in/wp-content/uploads/2017/11/Latest-India-facebook-cover-photo-with-indian-flag-theme.jpg";
 @Input()   allCountriesData: any;

  constructor() { }

  ngOnChanges(){
    this.allCountriesData.sort((a,b)=>{
          return b.TotalConfirmed - a.TotalConfirmed;
    });
  }

}
