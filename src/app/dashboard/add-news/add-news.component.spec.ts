import { async, ComponentFixture, TestBed,fakeAsync, tick } from '@angular/core/testing';
import { Location } from "@angular/common";
import { AddNewsComponent } from './add-news.component';
import { ReactiveFormsModule, FormsModule, FormBuilder } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Router } from '@angular/router';
import { DebugElement } from '@angular/core';
import { INews } from 'src/app/shared/interfaces/INews';
import { of } from 'rxjs';
import { NewsDetailService } from 'src/app/core/services/news.detail.service';

class MockNewsDetailsService {
  news: INews = {
    "title":"A",
    "description":"B",
    "summary":"C",
    "news":"D",
  }
  addNews(newsData: INews){
    return of(this.news);
  }
}

describe('AddNewsComponent', () => {
  let component: AddNewsComponent;
  let fixture: ComponentFixture<AddNewsComponent>;
  let authService: MockNewsDetailsService;
  let location: Location;
  let router: Router;
  let de: DebugElement;
  const formBuilder: FormBuilder = new FormBuilder();
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule,
        FormsModule,
      RouterTestingModule,
      HttpClientTestingModule],
      declarations: [ AddNewsComponent ],
      providers: [
        {provide: NewsDetailService, useClass: MockNewsDetailsService },
        { provide: FormBuilder, useValue: formBuilder }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    router = TestBed.get(Router); 
    location = TestBed.get(Location); 
    authService = new MockNewsDetailsService();
    fixture = TestBed.createComponent(AddNewsComponent);
    component = fixture.debugElement.componentInstance;
    component.addNewsForm = formBuilder.group({
      title: null,
      description: null,
      summary: null,
      news: null
    });

    router.initialNavigation(); 
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty', () => {
    expect(component.addNewsForm.valid).toBeFalsy();
  });

  it('title field validity', () => {
    let title = component.addNewsForm.controls['title']; 
    expect(title.valid).toBeFalsy();
  });

  it('decription field validity', () => {
    let errors = {};
    let description = component.addNewsForm.controls['description'];
    errors = description.errors || {};
    expect(errors['required']).toBeTruthy(); 
  });

});
