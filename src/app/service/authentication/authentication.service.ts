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

  IsAuthenticated = localStorage.getItem('IsAuthenticated');
  responseCode: string;
  dataCode: string;

  authenticate(signInDatas: signInData) {

    this._apiservice.LoginUserApi(this.loginUrl, signInDatas).subscribe(res => {

      if (res.code == "SUCCESS") {

        localStorage.setItem('token', res.token);
        localStorage.setItem('userID', res.userID);
        localStorage.setItem('username', res.username);

        localStorage.setItem('IsAuthenticated', "true");

        console.log(res);
        setTimeout(()=>{ 
          this.router.navigate(['leave']);
          location.href  = "/leave" ;


         },     100
        );
     

      }


    },
      err => this.responseCode = err,

    )



  }


  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userID');
    localStorage.removeItem('username');
    localStorage.removeItem('IsAuthenticated');

    location.reload();
    this.router.navigate(['']);
  }
}
