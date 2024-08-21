import { Component, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  data={
    firstName:'',
    lastName:''
  }
  constructor(private router:Router,private renderer:Renderer2){

  }
  submit(){
    const firstName = this.renderer.selectRootElement('.firstName', true);
    const lastName = this.renderer.selectRootElement('.lastName', true);
    this.renderer.setStyle(firstName, 'display', 'none');
    this.renderer.setStyle(lastName, 'display', 'none');

    if(this.data.firstName==''){
      
          this.renderer.setStyle(firstName, 'display', 'flex');
          return
      
    }
    if(this.data.lastName==''){
      
          this.renderer.setStyle(lastName, 'display', 'flex');
      return
    }
   
      localStorage.setItem('data',JSON.stringify(this.data))
      this.router.navigate(['/username'])
    
  }

}

