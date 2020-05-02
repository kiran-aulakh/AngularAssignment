import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPageComponent } from './dashboard-page.component';
import { DashboardService } from 'src/app/core/services/dashboard.service';
import {  of } from 'rxjs';
import { ICovidDetails } from 'src/app/shared/interfaces/ICovidDetails';
import { RouterTestingModule } from '@angular/router/testing';
import { SearchPipe } from './search.pipe';

class MockDashboardService{
  getCovidDetails(){
    const covidDetails: ICovidDetails ={
      "cases_time_series": [],
      "statewise":[],
      "tested": []
    }
    return of(covidDetails);
  }
  getStateDetails(){
    return of({});
  }
}

describe('DashboardPageComponent', () => {
  let component: DashboardPageComponent;
  let fixture: ComponentFixture<DashboardPageComponent>;
  let service: MockDashboardService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ DashboardPageComponent , SearchPipe],
      providers: [
        {provide: DashboardService, useClass: MockDashboardService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardPageComponent);
    component = fixture.componentInstance;
    service = new MockDashboardService();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get covid details', async() => {
    const covidDetails: ICovidDetails ={
      "cases_time_series": [],
      "statewise":[],
      "tested": []
    }
    expect(component.covidData).toEqual(covidDetails);
  });

});
