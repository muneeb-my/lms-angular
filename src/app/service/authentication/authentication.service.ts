import { Router } from '@angular/router';
import { ApiService } from './../api.service';
import { signInData } from './../../model/signInData';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  loginUrl: string = "http://localhost:8084/api/v1/login";

  constructor(private _apiservice: ApiService, private router: Router) { }

  IsAuthenticated = false;
  responseCode: string;
  dataCode: string;

  authenticate(signInDatas: signInData) {

    if (this.checkCredentials(signInDatas) == "SUCCESS" ) {

      this.IsAuthenticated = true;
      this.router.navigate(['leave']);
      
    }

  }

  private checkCredentials(signInDatas: signInData) {

    let promise = new Promise((resolve, reject)=>{


  
    this._apiservice.postUserApi(this.loginUrl, signInDatas)
      .toPromise() .then (res => {this.responseCode = res.code;
      console.log(res);
      },
        err => this.responseCode = err,

      )

    console.log(this.responseCode);
    

    })

    return this.responseCode;
  }

  logout(){
    this.IsAuthenticated = false;
    this.router.navigate(['']);
  }
}
