import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrecautionsComponent } from './precautions.component';
import { PrecautionsDetailService } from 'src/app/core/services/precautions.detail.service';
import { IPrecautions } from 'src/app/shared/interfaces/IPrecautions';
import { of } from 'rxjs';

class MockPrecautionsDetailService{
  getPrecautionsDetails(){
    const precautions : IPrecautions[] = [{
      "precaution" : ""
    }]
    return of(precautions);
  }
}

describe('PrecautionsComponent', () => {
  let component: PrecautionsComponent;
  let fixture: ComponentFixture<PrecautionsComponent>;
  let service: MockPrecautionsDetailService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrecautionsComponent ],
      providers: [
        {provide: PrecautionsDetailService, useClass: MockPrecautionsDetailService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrecautionsComponent);
    component = fixture.componentInstance;
    service =  new MockPrecautionsDetailService();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get precautions', async() => {
    const precautions: IPrecautions[] = [{
     "precaution":""
    }]
    expect(component.precautions).toEqual(precautions);
  });

});
