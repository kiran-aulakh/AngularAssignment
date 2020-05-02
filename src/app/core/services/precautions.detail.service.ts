import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IPrecautions } from 'src/app/shared/interfaces/IPrecautions';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PrecautionsDetailService {

  public apiURL = "api/precautionDetails";

  constructor(private http: HttpClient) { }

  getPrecautionsDetails(): Observable<IPrecautions[]>{
    return this.http.get<IPrecautions[]>(this.apiURL);
  }

  addPrecaution(news: IPrecautions): Observable<IPrecautions>{
    return this.http.post<IPrecautions>(this.apiURL, news, httpOptions).pipe(
      catchError(this.handleError)
    )
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
