import { Injectable } from '@angular/core';
import { DistrictData } from 'src/app/shared/interfaces/IStateData';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public storage: DistrictData;
  constructor() { }
}
