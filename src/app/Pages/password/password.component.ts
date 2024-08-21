
import { Component, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent {
  constructor(private http: HttpService, private router: Router, private renderer: Renderer2) { }
  showPassword = false;
  password = '';
  confirmPassword = '';
  data={}

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }


  handleSubmit() {
    if (this.password != this.confirmPassword) {
      const element = this.renderer.selectRootElement('.warning', true);
      this.renderer.setStyle(element, 'display', 'flex');
    }else{
      const storedData = localStorage.getItem('data');
    this.data = storedData ? JSON.parse(storedData) : {};
    this.data={...this.data,"password":this.password,"service":"advance"}
    this.http.registerUser(this.data).subscribe({
      next:(res:any)=>{
        this.router.navigate(['login'])
      },
      error:(err:any)=>{
        alert('something went wrong')
      }
    })
    }
  }

}
