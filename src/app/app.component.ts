import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private router:Router){
    
  }
  title = 'GoogleClone';
  data={
    leftHeading:'Create a Google Account',
    leftParagraph:'Enter your name',
    rightTop:'<div><mat-form-field appearance="outline" color=primary><mat-label>First name</mat-label><input matInput></mat-form-field></div><div><mat-form-field appearance="outline" color=primary><mat-label>Last name(optional)</mat-label><input matInput></mat-form-field></div><div class="button-class"><button mat-raised-button color="primary" class="button button-2">Next</button></div>'
  }
}
