import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { signInData } from '../model/signInData';
import { catchError } from 'rxjs/operators';
import { LeaveModel } from '../model/LeaveModel';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpclient: HttpClient ) { }
   config = { headers: new HttpHeaders().set('Content-Type', 'application/json') };

  postUserApi(url:string, data:signInData): Observable<any>{
    return this.httpclient.post(url,data, this.config).pipe(catchError(this.handleError))
  }
  postLeaveApi(url:string, data:LeaveModel): Observable<any>{
    return this.httpclient.post(url,data, this.config).pipe(catchError(this.handleError))
  }
  getLeaveApi(url:string): Observable<any>{
    return this.httpclient.get(url,this.config).pipe(catchError(this.handleError))
  }

  deleteLeaveApi(url:string): Observable<any>{
    console.log("Api Called " + url)
    return this.httpclient.delete(url,this.config).pipe(catchError(this.handleError))
  }

  handleError(error){
   return  throwError(error.message || "Server Error");
  }
}
