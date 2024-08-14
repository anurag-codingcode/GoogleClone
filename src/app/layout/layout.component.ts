import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  data={
    leftHeading:'Sign in',
    leftParagraph:'Use your Google Account',
    rightTop:''
  }
}
