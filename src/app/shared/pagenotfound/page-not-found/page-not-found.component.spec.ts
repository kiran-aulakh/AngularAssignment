import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Location } from "@angular/common";
import { RouterTestingModule } from '@angular/router/testing';
import { PageNotFoundComponent } from './page-not-found.component';
import { DashboardPageComponent } from 'src/app/dashboard/dashboard-page/dashboard-page.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('PageNotFound', () => {
  let component: PageNotFoundComponent;
  let fixture: ComponentFixture<PageNotFoundComponent>;
  let location: Location;
  let de: DebugElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([
        { path: 'dashboard', component: DashboardPageComponent}
    ])],
      declarations: [ PageNotFoundComponent ],
      
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNotFoundComponent);
    component = fixture.componentInstance;
    location = TestBed.get(Location); 
    de = fixture.debugElement.query(By.css('h1'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('go back ', () => {
    component.goBack();
    location.go("/covid/dashboard");
    expect(location.path()).toBe('/covid/dashboard'); 
  });

  it('check heading' , () => {
    let title = 'Page not found :(';
    expect(de.nativeElement.textContent).toContain(title);
  });

});
