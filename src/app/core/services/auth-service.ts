import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IUser } from '../../shared/interfaces/IUsers';

@Injectable({ providedIn: 'root' })
export class AuthService {
    public currentUserSubject: BehaviorSubject<String>;
    private users : IUser[];
    public currentUser: Observable<String>;

    constructor() {
        this.currentUserSubject = new BehaviorSubject<String>(localStorage.getItem('currentUser'));
        this.getUsers();
        this.currentUser = this.currentUserSubject.asObservable();
    }

    getUsers(): IUser[] {
        this.users = [{
            "id": 1,
            "username": "Rohit",
            "password": "123"
          }, {
            "id": 2,
            "username": "Sana",
            "password": "234"
          }, , {
              "id": 3,
              "username": "Akshit",
              "password": "456"
            }];
        return this.users;
    }

    public get currentUserValue(): String {
        return this.currentUserSubject.value;
    }

    isValidUser = (username: string, password: string) => {
        const index  = this.users.findIndex(user => undefined != user && user.username.toLowerCase() === username.toLowerCase());
        if(index > -1 && (this.users[index].password === password)){
            return true;
        }
        return false;
    }

    login(username: string, password: string) {
        if(this.isValidUser(username,password)){
            localStorage.setItem('currentUser', username);
            this.currentUserSubject.next(username);
            return true;
        }
    }

    logout() {
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}