import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/service/http.service';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { notFoundValidator } from 'src/app/Validators/custom-validator';
import { NotFoundError } from 'rxjs';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.scss']
})
export class UsernameComponent implements OnInit {
  constructor(private http: HttpService, private renderer: Renderer2, private router: Router) {}
  emailFormControl = new FormControl('', [Validators.required, Validators.email, notFoundValidator]);
  email = '';
  data: any = {};

  ngOnInit(): void {
    const storedData = localStorage.getItem('data');
    this.data = storedData ? JSON.parse(storedData) : {};
  }

  submit() {
    if (this.email !== '') {
      this.http.findAccount(this.email).subscribe({
        next: (res: any) => {
          if (res.length === 0) {
            this.data.email = this.email;
            localStorage.setItem('data', JSON.stringify(this.data));
            this.router.navigate(['password']);
          } else {
            // const element = this.renderer.selectRootElement('.warning', true);
            // this.renderer.setStyle(element, 'display', 'flex');
            this.emailFormControl.setErrors({ notfound: true });
            
          }
        },
        error: (err: any) => {
          console.log("error is", err.status);
          if (err.status === 404) {
            // const element = this.renderer.selectRootElement('.warning', true);
            // this.renderer.setStyle(element, 'display', 'flex');
            this.emailFormControl.setErrors({ notfound: true });
            setTimeout(()=>{
              this.emailFormControl.setErrors({notfound:null})
            },3000)
          }
        }
      });
    }
  }
 

  matcher = new MyErrorStateMatcher();
}
