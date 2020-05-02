import { Component, OnInit } from '@angular/core';
import { DistrictData, DitrictWiseData } from 'src/app/shared/interfaces/IStateData';
import { DataService } from 'src/app/core/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-state-details',
  templateUrl: './state-details.component.html',
  styleUrls: ['./state-details.component.css']
})
export class StateDetailsComponent implements OnInit {
  districtData: DistrictData;
  ditrictWiseData =  new Map<String,DitrictWiseData>();

  constructor(private data: DataService,private router: Router) {
    this.districtData = data.storage;
   }

  ngOnInit(): void {
    this.getDistrictData();
  }

  getDistrictData(){
    const array =  this.districtData;
    for(var key in array){
      if (array.hasOwnProperty(key)) {
          this.ditrictWiseData.set(key,array[key]);
        }
    }
  }
  
  goBack(){
    this.router.navigate(['/covid/dashboard']);
  }

}
