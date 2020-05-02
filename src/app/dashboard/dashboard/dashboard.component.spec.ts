import { async, ComponentFixture, TestBed,fakeAsync, tick } from '@angular/core/testing';
import { Location } from "@angular/common";
import { DashboardComponent } from './dashboard.component';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from 'src/app/core/services/auth-service';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

class MockAuthService {
  public currentUser = of("Rohit");
}

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let authService: MockAuthService;
  let location: Location;
  let router: Router;
  let de: DebugElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      imports: [RouterTestingModule],
      providers: [
        {provide: AuthService, useClass: MockAuthService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    router = TestBed.get(Router); 
    location = TestBed.get(Location); 
    authService = new MockAuthService();
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.debugElement.componentInstance;
    de = fixture.debugElement.query(By.css('h1'));
    router.initialNavigation(); 
    fixture.detectChanges();
  });

  it('Dashboard created', () => {
    expect(component).toBeTruthy();
  });

  it('should load current user', () => {
    let testUser =  "Rohit";
    fixture.detectChanges();
    expect(component.currentUser).toEqual(testUser);
  });

  it('Dashboard page title', () => {
    let title =  "COVID INFORMATION PORTAL";
    expect(component.pageTitle).toEqual(title);
  });

  it('Checking page title', fakeAsync(() => { 
    const title = "COVID INFORMATION PORTAL";
    const element = fixture.debugElement.query(By.css(".page-title"));
    expect(element.nativeElement.textContent).toContain(title); 
  }));

});
