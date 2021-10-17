import { ApiService } from './../service/api.service';
import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { EditLeaveComponent } from '../popup/editLeave/edit-leave/edit-leave.component';

@Component({
  selector: 'lms-all-leaves',
  templateUrl: './all-leaves.component.html',
  styleUrls: ['./all-leaves.component.scss']
})
export class AllLeavesComponent implements OnInit {

  getLeaveURL = 'http://localhost:8084/api/v1/leave';
  delId: any;
  constructor(private _apiService: ApiService, public dialog: MatDialog) {  }
  
  openLeaveDialog(itemData: any) {

    this.dialog.open(EditLeaveComponent, {
      width: '40%',
      height: '100%',
      data: {
        itemData
      }
    });

  }

  //Date Format
  formatter = 'yyyy-MM-dd';
  locale = 'en-US';

  public data = [];
  public datasize = -1;
  dtOptions: any = {};

  ngOnInit() {

    this.callApi();

    setTimeout(() => {
      this.dtOptions = {
        pagingType: 'full_numbers',
        pageLength: 5,
        lengthMenu: [5, 10, 25],
        processing: true
      };
    }, 300);


  }


  callApi() {
    this._apiService.getApi(this.getLeaveURL).subscribe(data => {

      this.data = data;
      this.datasize = data.length;

    });
  }

  format(myDate) {
    if (myDate != undefined) {
      return formatDate(myDate, this.formatter, this.locale);
    } else {
      return "";
    }
  }


  onDeleteId(id: string) {

    if (confirm("Do you want to delete this leave?")) {

      let delURL = "http://localhost:8084/api/v1/leave/" + id;
      
      this._apiService.deleteLeaveApi(delURL).subscribe(data => {
        this.callApi();
        location.reload();
      });

    }

  }


}
