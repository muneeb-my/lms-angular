import { LeaveComponent } from './../../../leave/leave.component';


import { Component, Inject, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient, HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { delay } from 'rxjs/operators';
import { ApiService } from 'src/app/service/api.service';
import { LeaveModel } from 'src/app/model/LeaveModel';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'lms-edit-leave',
  templateUrl: './edit-leave.component.html',
  styleUrls: ['./edit-leave.component.scss']
})
export class EditLeaveComponent implements OnInit {

  InvalidForm = false;
  error: String;
  responseMessage = false;
  response: String;

 public editData: any;

  constructor(private _apiservice: ApiService, private router: Router, @Inject(MAT_DIALOG_DATA) public data: any) {

    this.editData = data.itemData;
  }

  ngOnInit(): void { }

  postUrl: string = "http://localhost:8084/api/v1/leave";

  onSubmit(FormDetails: NgForm) {



    if (FormDetails.status == "INVALID") {

      this.InvalidForm = true;
      return;
    }


    else {

      var data = new LeaveModel(FormDetails.value.userID, FormDetails.value.fromDate, FormDetails.value.toDate,
        FormDetails.value.typeOfLeave, FormDetails.value.reasonOfLeave
      );


      this._apiservice.UpdateLeaveApi(this.postUrl+"/"+FormDetails.value.leaveID, data).subscribe(

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
