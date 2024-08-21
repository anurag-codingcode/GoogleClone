import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router,NavigationEnd } from '@angular/router';
import { ThemePalette } from '@angular/material/core';
import { filter } from 'rxjs/operators';





@Component({
  selector: 'app-base-componet',
  templateUrl: './base-componet.component.html',
  styleUrls: ['./base-componet.component.scss']
})
export class BaseComponetComponent implements OnInit {
  // @ViewChild('myInput') myInput!:ElementRef
  theme: ThemePalette = 'primary';
  leftContent:any={
    '/login':{
      leftHeading: 'Sign in',
    leftParagraph: 'Use your Google Account'
  },
  '/login2':{
      leftHeading: 'Welcome',
    leftParagraph: localStorage.getItem('id')
  },
  '/':{
    leftHeading: 'Sign in',
  leftParagraph: 'Use your Google Account'
},
    '/basicinfo':{
      leftHeading: 'Basic information',
    leftParagraph: 'Enter your birthday and gender'
    },
    '/password':{
      leftHeading: 'Create a strong password',
    leftParagraph: 'Create a strong password with a mix of letters,numbers and symbols'
    },
    '/username':{
      leftHeading: "How you'll signin",
    leftParagraph: 'Create a Gmail address for signing in to your Google Account'
    },
    '/register':{
      leftHeading: 'Create a Google Account',
    leftParagraph: 'Enter your name'

    }
  }
  
  

  constructor(private route: ActivatedRoute, private router: Router) {}
  
  data = this.leftContent[this.router.url]

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      
      this.data=this.leftContent[this.router.url]

      if(this.router.url=='/login2'){
        this.data.leftParagraph= localStorage.getItem('id')
      }
    });

  }

  goToRegister() {
    this.router.navigate(['register']);
  }

}
