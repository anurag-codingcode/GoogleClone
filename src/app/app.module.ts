import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { LoginComponent } from './Pages/login/login.component';
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
