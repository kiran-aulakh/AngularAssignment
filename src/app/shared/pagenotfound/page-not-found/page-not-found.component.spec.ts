import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Location } from "@angular/common";
import { RouterTestingModule } from '@angular/router/testing';
import { PageNotFoundComponent } from './page-not-found.component';
import { DashboardPageComponent } from 'src/app/dashboard/dashboard-page/dashboard-page.component';

describe('AdminLoginComponent', () => {
  let component: PageNotFoundComponent;
  let fixture: ComponentFixture<PageNotFoundComponent>;
  let location: Location;
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

});
