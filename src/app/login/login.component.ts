import { Component, ViewChild, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { ThemePalette } from '@angular/material/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { HttpService } from 'src/app/service/http.service';


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
  // @ViewChild('myInput') myInput!:ElementRef
  theme: ThemePalette = 'primary'

  email = ''
  constructor(private router: Router, private renderer: Renderer2, private http: HttpService) { }

  ngOnInit(): void {

  }
  input = {
    label: 'Email or phone',
    warning: 'Invalid email',
    error: {
      normal: 'Email is',
      strong: 'required'
    }


  }

  goToRegister() {

    this.router.navigate(['register']);
  }

  goToLogin2() {
    if (this.email != '') {
      this.http.findAccount(this.email).subscribe({
        next: (res: any) => {
          
          if(res.length>0){
            localStorage.setItem('id',res[0].email)
          this.router.navigate(['login2']);
          }else{
            const element = this.renderer.selectRootElement('.warning', true);
            this.renderer.setStyle(element, 'display', 'flex');
          }
          
        },
        error: (err: any) => {
          console.log("error is", err.status)
          if (err.status === 404) {
            const element = this.renderer.selectRootElement('.warning', true);
            this.renderer.setStyle(element, 'display', 'flex');
          }

        }
      })
    }



    
  }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  matcher = new MyErrorStateMatcher();
}
