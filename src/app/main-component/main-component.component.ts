import { Component,OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.scss']
})
export class MainComponentComponent implements OnInit{
  @Input() data: any;
  
  

  constructor(private router:Router) {
    console.log(this.data)
    
   }
  

  ngOnInit(): void {

   
  }


}
