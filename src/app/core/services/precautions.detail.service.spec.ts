import { TestBed ,fakeAsync, inject} from '@angular/core/testing';
import { PrecautionsDetailService } from './precautions.detail.service';
import { IPrecautions } from 'src/app/shared/interfaces/IPrecautions';
import {HttpTestingController, HttpClientTestingModule} from '@angular/common/http/testing';

describe('PrecautionsDetailService', () => {
  let service: PrecautionsDetailService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PrecautionsDetailService]
    });
  });

  it('should be created', () => {
    const service: PrecautionsDetailService = TestBed.get(PrecautionsDetailService);
    expect(service).toBeTruthy();
  });

  
  it('should have getPrecautionsDetails function', () => {
    const service: PrecautionsDetailService = TestBed.get(PrecautionsDetailService);
    expect(service.getPrecautionsDetails).toBeTruthy();
   });

  it('expects service to fetch data',
  inject([HttpTestingController, PrecautionsDetailService],
    (httpMock: HttpTestingController, service: PrecautionsDetailService) => {
      const dummyPrecaution: IPrecautions[] = [{"precaution": "A"},{"precaution": "B"}];
      service.getPrecautionsDetails().subscribe(posts => {
        expect(posts.length).toBe(2);
        expect(posts).toEqual(dummyPrecaution);
      });
      const req = httpMock.expectOne(service.apiURL);
      expect(req.request.method).toEqual('GET');
      req.flush(dummyPrecaution);
      httpMock.verify();
    })
);

});
