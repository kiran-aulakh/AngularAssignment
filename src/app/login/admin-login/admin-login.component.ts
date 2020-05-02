import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators,FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth-service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  adminLoginForm: FormGroup;
  submitted = false;  
  invalidInput = null;
  constructor(private fb: FormBuilder, private authService: AuthService,private router: Router) { }

  ngOnInit(){
    this.adminLoginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });
  }

  onSubmit(){
    this.submitted = true;
    if (this.adminLoginForm.invalid) {
      return;
  }
  if(this.authService.login(this.f.username.value, this.f.password.value)){
    this.router.navigate(['/covid/dashboard']);
  }
  else{
    this.invalidInput = " Wrong Credentials !!!";
  }
  }

  get f() { return this.adminLoginForm.controls; }

  goBack(){
    this.router.navigate(['/covid/dashboard']);
  }
}
