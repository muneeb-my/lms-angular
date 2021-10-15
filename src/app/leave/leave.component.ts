import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient, HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

  import { Router } from '@angular/router';
  import { LeaveModel } from './../model/LeaveModel';
  import { ApiService } from './../service/api.service';
  import { NgForm } from '@angular/forms';
  import { delay } from 'rxjs/operators';
  
  @Component({
    selector: 'lms-leave',
    templateUrl: './leave.component.html',
    styleUrls: ['./leave.component.scss']
  })
  
  export class LeaveComponent implements OnInit {

    InvalidForm = false;
    error: String;
    responseMessage = false;
    response: String;
  
    constructor(private _apiservice: ApiService, private router : Router) { }
  
    ngOnInit(): void {
    }
  
    postUrl: string = "http://localhost:8084/api/v1/leave";
  
    onSubmit(FormDetails: NgForm) {
  
  
  
      if (FormDetails.status == "INVALID") {
  
        this.InvalidForm = true;
        return;
      }
  
  
      else {
  
        var data = new LeaveModel("123123",FormDetails.value.fromDate,FormDetails.value.toDate,
          FormDetails.value.typeOfLeave,FormDetails.value.reasonOfLeave
          );
  
          console.log(data);

        this._apiservice.postLeaveApi(this.postUrl, data).subscribe(
  
           data => {
  
  
            this.responseMessage = true;
  
            this.response = data.message;
          
            alert(data.message);
  
          }, (error) => {
  
            this.responseMessage = true;
  
            
              this.response = error;
            
  
  
          }
  
        )
  
      }
  
    }
  
  }
  