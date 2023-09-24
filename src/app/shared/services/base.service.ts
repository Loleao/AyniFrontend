import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, pipe, retry, throwError} from "rxjs";
import {environment} from "../../../environments/environment";

export class BaseService<T> {
  basePath:string=`${environment.serverBasePath}`;
  resourceEndpoint:string='/resources';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  }

  constructor(private http:HttpClient) {

  }

  handleError(error:HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.error(`An error occurred: ${error.error.message}`);
    }else{
      console.error(
        `Backend returned code ${error.status}, body was: ${error.error}`);
    }
    return throwError(() =>
      new Error('Something happened with request, please try again later.'));
  }

  create(item:any):Observable<T>{
    return this.http.post<T>(this.resourcePath(), JSON.stringify(item), this.httpOptions)
    .pipe(retry(2),catchError(this.handleError));
  }

  delete(id: any) {
    return this.http.delete(`${this.resourcePath()}/${id}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  update(id: any, item: any): Observable<T> {
    return this.http.put<T>(`${this.resourcePath()}/${id}`, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  getAll(): Observable<T> {
    return this.http.get<T>(this.resourcePath(), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  private resourcePath():string{
    return `${this.basePath}${this.resourceEndpoint}`;
  }

}