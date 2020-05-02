import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth-service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  pageTitle = "COVID INFORMATION PORTAL";
  loggedIn = false;
  currentUser: String;
  user: String;
  constructor(private authService: AuthService,private router: Router) {
    this.authService.currentUser.subscribe(user => this.currentUser = user);
   
   }
   
   login(){
     if(!this.user && null === localStorage.getItem('currentUser')){
      this.router.navigate(['/login']);
     }  else{
      this.currentUser =localStorage.getItem('currentUser');
     }
   }

   logout(){
     this.authService.logout();
     this.currentUser = null;
     this.router.navigate(['/covid/dashboard']);
   }
  ngOnInit(): void {
  }

}
