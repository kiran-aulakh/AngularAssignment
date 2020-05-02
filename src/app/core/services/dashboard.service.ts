import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ICovidDetails } from 'src/app/shared/interfaces/ICovidDetails';
import { Observable, throwError } from 'rxjs';
import { CountryData } from 'src/app/shared/interfaces/IStateData';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  public apiURL = "https://api.covid19india.org/data.json";
  public dataByStateURL ="https://api.covid19india.org/state_district_wise.json";

  constructor(private http: HttpClient) { }

  getCovidDetails(): Observable<ICovidDetails>{
    return this.http.get<ICovidDetails>(this.apiURL).pipe(
      catchError(this.handleError)
    );
  }

  getStateDetails(): Observable<CountryData>{
    return this.http.get<CountryData>(this.dataByStateURL).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
    }
    return throwError(
      'Something bad happened; please try again later.');
  };
  
}
