import { Component, OnInit } from '@angular/core';
import { IPrecautions } from 'src/app/shared/interfaces/IPrecautions';
import { PrecautionsDetailService } from 'src/app/core/services/precautions.detail.service';

@Component({
  selector: 'app-precautions',
  templateUrl: './precautions.component.html',
  styleUrls: ['./precautions.component.css']
})
export class PrecautionsComponent implements OnInit {

  precautions: IPrecautions[];

  constructor(private precautionService: PrecautionsDetailService) { }

  ngOnInit(): void {
    this.listAllPrecautions();
  }

  listAllPrecautions(){
    this.precautionService.getPrecautionsDetails().subscribe(precaution => {
      this.precautions = precaution;
    })
  }
}
