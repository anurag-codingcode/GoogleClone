import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.scss']
})
export class Login2Component {
  constructor(private http: HttpService, private router: Router, private renderer: Renderer2) { }
  showPassword = false;
  password = '';

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }


  handleSubmit() {
    const email = localStorage.getItem('id')
    if (email) {
      this.http.login(email, this.password).subscribe({
        next: (res: any) => {
          // console.log(res.password)
          localStorage.setItem('token', res.id)
          this.router.navigate(['/dashboard'])
        },
        error: (err: any) => {
          console.log("error is", err)
          const element = this.renderer.selectRootElement('.warning', true);
          this.renderer.setStyle(element, 'display', 'flex');
        }
      })

    }

  }

}
