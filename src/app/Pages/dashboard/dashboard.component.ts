import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  isVisible=true
  notes=[]
  toggleSidebar(){
    this.isVisible=!this.isVisible
   
  }
  constructor(private http:HttpService){}
  id:any=localStorage.getItem('id')
  ngOnInit(): void {
    
      this.http.getUser(this.id).subscribe({
        next:(res:any)=>{
          this.notes=res.data.notes
        }
      })
  }

  handleNotesClick(){
    this.http.getUser(this.id).subscribe({
      next:(res:any)=>{
        this.notes=res.data.notes
      }
    })
  }

  handleArchiveClick(){
    this.http.getUser(this.id).subscribe({
      next:(res:any)=>{
        this.notes=res.data.archive
      }
    })

  }
  handleTrashClick(){
    this.http.getUser(this.id).subscribe({
      next:(res:any)=>{
        this.notes=res.data.trash
      }
    })

  }
}


