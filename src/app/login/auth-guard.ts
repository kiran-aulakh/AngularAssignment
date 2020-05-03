import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from '../core/services/auth-service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate{

    constructor(private router: Router,private authService: AuthService){}

    canActivate() {
        const currentUser = this.authService.currentUserValue;
        if (null != localStorage.getItem('currentUser')) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }
}
