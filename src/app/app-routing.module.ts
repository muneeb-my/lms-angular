import { AuthGuard } from './gaurds/auth.guard';
import { LeaveComponent } from './leave/leave.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllLeavesComponent } from './all-leaves/all-leaves.component';

const routes: Routes = [
  {path : '', component:LoginComponent},
  {path : 'signup', component:SignUpComponent},
  {path : 'leave', component:LeaveComponent,canActivate:[AuthGuard]},
  {path : 'Allleave', component:AllLeavesComponent}
// ,canActivate:[AuthGuard]
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
