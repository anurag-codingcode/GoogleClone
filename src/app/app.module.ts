import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule
import {MatCheckboxModule} from '@angular/material/checkbox';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { LoginComponent } from './login/login.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { RegisterComponent } from './Pages/register/register.component';



// import { BasicinfoComponent } from './basicinfo/basicinfo.component';
import { ButtonComponent } from './Component/button/button.component';
import { InputComponent } from './Component/input/input.component';
import { TextElementComponent } from './Component/text-element/text-element.component';
import { BaseComponetComponent } from './Component/base-componet/base-componet.component';
import { BasicinfoComponent } from './Pages/basicinfo/basicinfo.component';
import { PasswordComponent } from './Pages/password/password.component';
import { UsernameComponent } from './Pages/username/username.component';
import { Login2Component } from './Pages/login2/login2.component';
import { HttpService } from './service/http.service';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NotesCardComponent } from './Component/notes-card/notes-card.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ButtonComponent,
    InputComponent,
    TextElementComponent,
    BaseComponetComponent,
    BasicinfoComponent,
    PasswordComponent,
    UsernameComponent,
    Login2Component,
    DashboardComponent,
    NotesCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    FormsModule,
    NgFor,
    RouterModule,
    ReactiveFormsModule, // Add ReactiveFormsModule here
    MatCheckboxModule,
    HttpClientModule,
    MatToolbarModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
