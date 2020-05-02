import { TestBed,inject } from '@angular/core/testing';

import { NewsDetailService } from './news.detail.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { INews } from 'src/app/shared/interfaces/INews';

describe('News.DetailService', () => {
  let service: NewsDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [NewsDetailService]
    });
  });

  it('should be created', () => {
    const service: NewsDetailService = TestBed.get(NewsDetailService);
    expect(service).toBeTruthy();
  });

  it('should have getNewsDetails function', () => {
    const service: NewsDetailService = TestBed.get(NewsDetailService);
    expect(service.getNewsDetails).toBeTruthy();
   });

   it('expects service to fetch data ',
   inject([HttpTestingController, NewsDetailService],
     (httpMock: HttpTestingController, service: NewsDetailService) => {
       const dummyNews: INews[] = [
        {
          "title":"A",
          "description":"B",
          "summary":"C",
          "news":"D",
        }
       ];
       service.getNewsDetails().subscribe(posts => {
         expect(posts.length).toBe(1);
         expect(posts).toEqual(dummyNews);
       });
       const req = httpMock.expectOne(service.apiURL);
       expect(req.request.method).toEqual('GET');
       req.flush(dummyNews);
       httpMock.verify();
     })
 );

});
