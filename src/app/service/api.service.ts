import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { signInData } from '../model/signInData';
import { catchError } from 'rxjs/operators';
import { LeaveModel } from '../model/LeaveModel';
import { UserModel } from '../model/UserModel';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  token = localStorage.getItem('token');

  constructor(private httpclient: HttpClient ) { }
   config = { headers: new HttpHeaders().set('Content-Type', 'application/json').append('Authorization', 'Bearer ' + this.token) };

  postUserApi(url:string, data:signInData): Observable<any>{
    return this.httpclient.post(url,data).pipe(catchError(this.handleError))
  }

  LoginUserApi(url:string, data:signInData): Observable<any>{
    return this.httpclient.post(url,data).pipe(catchError(this.handleError))
  }

  postLeaveApi(url:string, data:LeaveModel): Observable<any>{
    return this.httpclient.post(url,data, this.config).pipe(catchError(this.handleError))
  }
  getApi(url:string): Observable<any>{
    return this.httpclient.get(url,this.config).pipe(catchError(this.handleError))
  }

  deleteLeaveApi(url:string): Observable<any>{
    return this.httpclient.delete(url,this.config).pipe(catchError(this.handleError))
  }

  UpdateLeaveApi(url:string, data:LeaveModel): Observable<any>{
    return this.httpclient.put(url,data,this.config).pipe(catchError(this.handleError))
  }

  UpdateUserApi(url:string, data:UserModel): Observable<any>{
    return this.httpclient.put(url,data,this.config).pipe(catchError(this.handleError))
  }


  handleError(error){
   return  throwError(error.message || "Server Error");
  }
}
