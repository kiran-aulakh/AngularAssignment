import { TestBed,inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { INews } from 'src/app/shared/interfaces/INews';
import { DashboardService } from './dashboard.service';
import { ICovidDetails } from 'src/app/shared/interfaces/ICovidDetails';
import { CountryData, StateData, DitrictWiseData, Delta, DistrictData } from 'src/app/shared/interfaces/IStateData';

describe('DashboardService', () => {
  let service: DashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DashboardService]
    });
  });

  it('should be created', () => {
    const service: DashboardService = TestBed.get(DashboardService);
    expect(service).toBeTruthy();
  });

  it('should have getCovidDetails function', () => {
    const service: DashboardService = TestBed.get(DashboardService);
    expect(service.getCovidDetails).toBeTruthy();
   });

   it('should have getStateDetails function', () => {
    const service: DashboardService = TestBed.get(DashboardService);
    expect(service.getStateDetails).toBeTruthy();
   });

   it('expects service to fetch covid data ',
   inject([HttpTestingController, DashboardService],
     (httpMock: HttpTestingController, service: DashboardService) => {
       const details: ICovidDetails = {
        "cases_time_series": [],
        "statewise": [],
        "tested": []
       };
       service.getCovidDetails().subscribe(posts => {
         expect(posts.cases_time_series).toBeTruthy();
         expect(posts).toEqual(details);
       });
       const req = httpMock.expectOne(service.apiURL);
       expect(req.request.method).toEqual('GET');
       req.flush(details);
       httpMock.verify();
     })
 );
});
