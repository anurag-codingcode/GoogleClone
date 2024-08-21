import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SearchPipe } from 'src/app/pipe/search.pipe';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  isVisible=true
  notes:any=[]
  allNotes:any=[]
  addNewNote=false
  data={
    title:'',
    description:''
  }
  searchQuery=''
  toggleSidebar(){
    this.isVisible=!this.isVisible
   
  }
  
  
  notesInput(event:any){
    if(event.key=='Enter'){
      console.log("enter is pressed")
      this.http.addNotes(this.data).subscribe({
        next:(res)=>{
          console.log(res)
        },
        error:(err)=>{
          console.log(err)
        }
      })
      this.data={
        title:'',
        description:''
      }
      this.toogleClick()
    }
  }
  toogleClick(){
    
    this.addNewNote=!this.addNewNote
  }
  constructor(private http:HttpService,private search:SearchPipe){}
  id:any=localStorage.getItem('id')
  ngOnInit(): void {
    
      this.http.getNotes().subscribe({
        next:(res:any)=>{
          this.notes=res.data.data
          this.allNotes=res.data.data
        }
      })
  }

  
  onSearch(){
  this.notes=this.search.transform(this.allNotes,this.searchQuery)
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


