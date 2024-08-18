import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './Pages/register/register.component';

import { BaseComponetComponent } from './Component/base-componet/base-componet.component';
import { BasicinfoComponent } from './Pages/basicinfo/basicinfo.component';
import { PasswordComponent } from './Pages/password/password.component';
import { UsernameComponent } from './Pages/username/username.component';
import { Login2Component } from './Pages/login2/login2.component';
import { login2guardGuard } from './Auth/login2guard.guard';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';



const routes: Routes = [
  {
    path: '',
    component: BaseComponetComponent,
    children: [
      {path: 'register', component: RegisterComponent},
      { path: 'login', component: LoginComponent},
      { path: 'login2', component: Login2Component,canActivate:[login2guardGuard]},
      { path: 'basicinfo', component: BasicinfoComponent },
      { path: 'password', component: PasswordComponent},
      { path: 'username', component: UsernameComponent},
      { path: '', component: LoginComponent }
    ]
  },
  {
    path:'dashboard',
    component:DashboardComponent,
    canActivate:[login2guardGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
