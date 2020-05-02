import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsDetailComponent } from './news-detail.component';
import { NewsDetailService } from 'src/app/core/services/news.detail.service';
import { INews } from 'src/app/shared/interfaces/INews';
import { of } from 'rxjs';

class MockNewsDetailService{
  getNewsDetails(){
    let news: INews[] =[{
      "title": "",
      "description": "",
      "summary": "",
      "news": "",
    }]
    return of(news);
  }
}

describe('NewsDetailComponent', () => {
  let component: NewsDetailComponent;
  let fixture: ComponentFixture<NewsDetailComponent>;
  let service: MockNewsDetailService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsDetailComponent ],
      providers: [
        {provide: NewsDetailService, useClass: MockNewsDetailService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsDetailComponent);
    component = fixture.componentInstance;
    service =  new MockNewsDetailService();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get news details', async() => {
    const newsDetail: INews[] = [{
      "title": "",
      "description": "",
      "summary": "",
      "news": "",
    }]
    expect(component.news).toEqual(newsDetail);
  });

  it('' , () => {
    const newsDetail: INews[] = [{
      "title": "",
      "description": "",
      "summary": "",
      "news": "",
    }]
    component.listAllNews();
    expect(component.news).toEqual(newsDetail);
  });
});
