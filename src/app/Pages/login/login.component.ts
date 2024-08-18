import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThemePalette } from '@angular/material/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('myInput') myInput!:ElementRef
  theme:ThemePalette='primary'

  constructor(private router: Router) {}

  ngOnInit(): void {
    
  }
  input={
    label:'Email or phone',
    warning:'Invalid email',
    error:{
      normal:'Email is',
      strong:'required'
    }
    

  }

  goToRegister() {
    this.router.navigate(['register']);
  }
  
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  matcher = new MyErrorStateMatcher();
}
