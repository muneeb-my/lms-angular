import { ApiService } from 'src/app/service/api.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserModel } from '../model/UserModel';

@Component({
  selector: 'lms-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {


  InvalidForm = false;
  public loading = true;

  error: String;
  responseMessage = false;
  response: String;
  userData: any;
  userID = localStorage.getItem('userID');
  UserURL: string = "http://localhost:8084/api/v1/user/" + this.userID;

  constructor(private _apiService: ApiService) {

   


  }

  ngOnInit(): void {
    this._apiService.getApi(this.UserURL).subscribe(data => {

      this.userData = data;
      this.loading = false;

    });
  }

  onSubmit(profileForm: NgForm) {

    if (profileForm.status == "INVALID") {

      this.InvalidForm = true;
      return;
    }
    else {



      var data = new UserModel(profileForm.value.userAddress,
        profileForm.value.userDateOfBirth
      );



      this._apiService.UpdateUserApi(this.UserURL, data).subscribe(

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


