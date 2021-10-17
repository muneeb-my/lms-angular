import { AuthGuard } from './gaurds/auth.guard';
import { LeaveComponent } from './leave/leave.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllLeavesComponent } from './all-leaves/all-leaves.component';
import { EditLeaveComponent } from './popup/editLeave/edit-leave/edit-leave.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

const routes: Routes = [
  {path : '', component:LoginComponent},
  {path : 'signup', component:SignUpComponent},
  {path : 'leave', component:LeaveComponent,canActivate:[AuthGuard]},
  {path : 'Allleave', component:AllLeavesComponent,canActivate:[AuthGuard]},
  {path : 'editProfile', component:EditProfileComponent,canActivate:[AuthGuard]}
  // ,canActivate:[AuthGuard]
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
