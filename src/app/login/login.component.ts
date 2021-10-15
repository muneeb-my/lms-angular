import { signInData } from './../model/signInData';
import { AuthenticationService } from './../service/authentication/authentication.service';

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'lms-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  InvalidCredientials = false;
  InvalidForm = false;

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(signInFormDetails: NgForm) {

    this.InvalidForm = false;
    this.InvalidCredientials = false;

    if (signInFormDetails.status == "INVALID") {

      this.InvalidForm = true;
      this.InvalidCredientials = false;
      return;
    }

    var signInDatas = new signInData(signInFormDetails.value.username, signInFormDetails.value.password);
    (this.authenticationService.authenticate(signInDatas))
     
     setTimeout(()=>{  

      if(this.authenticationService.IsAuthenticated){
        this.InvalidCredientials = false;
        this.InvalidForm = false;
        return;
  
      } else {
  
        this.InvalidCredientials = true;
        this.InvalidForm = false;
        return;
  
      }

    },     100
    );
    





  }

  signUp() {

    this.router.navigate(['signup']);

  }

}
