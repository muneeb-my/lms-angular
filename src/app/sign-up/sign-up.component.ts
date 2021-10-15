import { Router } from '@angular/router';
import { signInData } from './../model/signInData';
import { ApiService } from './../service/api.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'lms-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  InvalidCredientials = false;
  InvalidForm = false;
  passwordNotMatch = false;
  error: String;
  responseMessage = false;
  response: String;

  constructor(private _apiservice: ApiService, private router : Router) { }

  ngOnInit(): void {
  }

  postUrl: string = "http://localhost:8084/api/v1/signup";

  onSubmit(signInFormDetails: NgForm) {



    if (signInFormDetails.status == "INVALID") {

      this.InvalidForm = true;
      this.passwordNotMatch = false;
      this.InvalidCredientials = false;
      return;
    }


    else if (signInFormDetails.value.password != signInFormDetails.value.confirmPassword) {

      this.passwordNotMatch = true;
      this.InvalidForm = false;
      this.InvalidCredientials = false;
      return;
    }
    else {

      var data = new signInData(signInFormDetails.value.username, signInFormDetails.value.password);

      this._apiservice.postUserApi(this.postUrl, data).subscribe(

         data => {


          this.responseMessage = true;

          this.response = data.message;
        if(this.response == "SUCCESS"){
          this.router.navigate(['']);
        }
        }, (error) => {

          this.responseMessage = true;

          
            this.response = error;
          


        }

      )

    }

  }

}
