import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DataTablesModule} from 'angular-datatables';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HttpClientModule } from '@angular/common/http';
import { LeaveComponent } from './leave/leave.component';
import { AllLeavesComponent } from './all-leaves/all-leaves.component';
import {MatDialogModule} from '@angular/material/dialog';
import { EditLeaveComponent } from './popup/editLeave/edit-leave/edit-leave.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
@NgModule({
  entryComponents: [EditLeaveComponent],

  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    LeaveComponent,
    AllLeavesComponent,
    EditLeaveComponent,
    EditProfileComponent
    
  ],
  imports: [
    BrowserAnimationsModule,

    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DataTablesModule,
    HttpClientModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
