import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MainComponentComponent } from './main-component/main-component.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },{
    path:'',
    component:LoginComponent
  },{
    path:'main-component',
    component:MainComponentComponent
  },{
    path:'layout',
    component:LayoutComponent
  },
  {
    path:'register',
    component:RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
