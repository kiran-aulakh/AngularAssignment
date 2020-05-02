import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateDetailsComponent } from './state-details.component';
import { DataService } from 'src/app/core/services/data.service';
import { DistrictData } from 'src/app/shared/interfaces/IStateData';
import { RouterTestingModule } from '@angular/router/testing';

class MockDataService{
  public storage: DistrictData;
}

describe('StateDetailsComponent', () => {
  let component: StateDetailsComponent;
  let fixture: ComponentFixture<StateDetailsComponent>;
  let service: MockDataService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ StateDetailsComponent ],
      providers: [
        {provide: DataService, useClass: MockDataService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateDetailsComponent);
    component = fixture.componentInstance;
    service = new MockDataService();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get district data', async() => {
    let districtData: DistrictData;
    expect(component.districtData).toEqual(districtData);
  });

});
