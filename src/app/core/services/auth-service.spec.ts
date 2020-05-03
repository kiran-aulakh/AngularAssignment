import { TestBed,inject } from '@angular/core/testing';
import { Location } from "@angular/common";
import { NewsDetailService } from './news.detail.service';
import { AuthService } from './auth-service';

describe('AuthService', () => {
  let service: AuthService;
  let location: Location;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewsDetailService]
    });
     service = TestBed.inject(AuthService);
  });

  beforeEach(() => {
    location = TestBed.get(Location); 
  });

 
  it('should be created', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service).toBeTruthy();
  });

  it('log out ', () => {
    let  users: String = null;
    service.logout();
    expect(service.currentUserValue).toEqual(users);
  });

  it('check get users', () => {
   service.users = [];
   let u =  service.getUsers();
   expect(u.length).toBe(4);
    
  });

});
