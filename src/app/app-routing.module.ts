import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Pages/login/login.component';
import { RegisterComponent } from './Pages/register/register.component';

import { BaseComponetComponent } from './Component/base-componet/base-componet.component';
import { BasicinfoComponent } from './Pages/basicinfo/basicinfo.component';
import { PasswordComponent } from './Pages/password/password.component';
import { UsernameComponent } from './Pages/username/username.component';


const routes: Routes = [
  {
    path: '',
    component: BaseComponetComponent,
    children: [
      {path: 'register', component: RegisterComponent},
      { path: 'login', component: LoginComponent },
      { path: 'basicinfo', component: BasicinfoComponent },
      { path: 'password', component: PasswordComponent},
      { path: 'username', component: UsernameComponent},
      { path: '', component: LoginComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
