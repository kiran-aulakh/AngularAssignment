import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError} from 'rxjs';
import { catchError  } from 'rxjs/operators';
import { INews } from 'src/app/shared/interfaces/INews';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class NewsDetailService {
  public apiURL = "api/newsDetails";

  constructor(private http: HttpClient) { }

  getNewsDetails(): Observable<INews[]>{
    return this.http.get<INews[]>(this.apiURL);
  }

  addNews(news: INews): Observable<INews>{
    return this.http.post<INews>(this.apiURL, news, httpOptions).pipe(
      catchError(this.handleError)
    )
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      //console.error(
        //`Backend returned code ${error.status}, ` +
        //`body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  };
}
