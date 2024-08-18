import { Component, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.scss']
})
export class Login2Component {
  constructor(private http:HttpService,private router:Router,private renderer:Renderer2){}
  showPassword = false;
  password = '';

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
  handleSubmit(){
    const id=localStorage.getItem('id')
    if(id){
      this.http.getUser(id).subscribe({
        next: (res: any) => {
          console.log(res.password)
          if(this.password==res.password){
            console.log('some shit')
            localStorage.setItem('token',res.password)
            this.router.navigate(['/dashboard'])
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

}
