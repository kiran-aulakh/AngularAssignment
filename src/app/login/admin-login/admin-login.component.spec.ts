import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Location } from "@angular/common";
import { AdminLoginComponent } from './admin-login.component';
import { FormBuilder, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('AdminLoginComponent', () => {
  let component: AdminLoginComponent;
  let fixture: ComponentFixture<AdminLoginComponent>;
  const formBuilder: FormBuilder = new FormBuilder();
  let location: Location;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule,
        FormsModule,RouterTestingModule],
      declarations: [ AdminLoginComponent ],
      providers: [
        { provide: FormBuilder, useValue: formBuilder }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLoginComponent);
    component = fixture.componentInstance;
    location = TestBed.get(Location); 
    component.adminLoginForm = formBuilder.group({
      username: null,
      password: null
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty', () => {
    expect(component.adminLoginForm.valid).toBeFalsy();
  });

  it('username field validity', () => {
    let username = component.adminLoginForm.controls['username']; 
    expect(username.valid).toBeFalsy();
  });

  it('username field validity', () => {
    let errors = {};
    let username = component.adminLoginForm.controls['username'];
    errors = username.errors || {};
    expect(errors['required']).toBeTruthy(); 
  });

  it('sumbitting ', () => {
    expect(component.adminLoginForm.valid).toBeFalsy();
    component.adminLoginForm.controls['username'].setValue("Rohit");
    component.adminLoginForm.controls['password'].setValue("123");
    expect(component.adminLoginForm.valid).toBeTruthy();
    component.onSubmit();
    location.go("/covid/dashboard");
    expect(location.path()).toBe('/covid/dashboard'); 
  });

});
