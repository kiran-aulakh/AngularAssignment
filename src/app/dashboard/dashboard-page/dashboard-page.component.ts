import { Component, OnInit } from '@angular/core';
import { ICovidDetails } from 'src/app/shared/interfaces/ICovidDetails';
import { DashboardService } from 'src/app/core/services/dashboard.service';
import { Router } from '@angular/router';
import { CountryData, DistrictData } from 'src/app/shared/interfaces/IStateData';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit {
  covidData : ICovidDetails;
  stateDetails: CountryData;
  stateData: DistrictData;
  map = new Map();
  public search:any = '';
  constructor(private dashBoardService: DashboardService,private router: Router,private data: DataService) { }

  ngOnInit(): void {
    this.getCovidData();
    this.getStateDetails();
  }

  getCovidData(){
    this.dashBoardService.getCovidDetails().subscribe(data => {
      this.covidData = data;
    });
   }

   getStateDetails(){
     this.dashBoardService.getStateDetails().subscribe(data => {
      this.stateDetails = data;
      const array =  this.stateDetails;
    for(var key in array){
      if (array.hasOwnProperty(key)) {
          this.stateData = array[key].districtData;
          this.map.set(array[key].statecode,array[key].districtData);
        }
    }
     });
     
    }

   getStateDetail(code:  String){
    this.stateData = this.map.get(code);
    this.data.storage = this.stateData;
    this.router.navigate(['covid/view']);
   }
}
