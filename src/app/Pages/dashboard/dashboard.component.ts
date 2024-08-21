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
  archive:any=[]
  deleted:any=[]
  showNotes:any=[]
  allNotes:any=[]
  addNewNote=false
  data={
    title:'',
    description:''
  }
  searchQuery=''
  title='Keep'
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
          this.allNotes=res.data.data
          this.archive=this.allNotes.filter((note:any)=>note.isArchived==true)
          this.deleted=this.allNotes.filter((note:any)=>note.isDeleted==true)
          this.notes=this.allNotes.filter((note:any)=>note.isDeleted==false && note.isArchived==false)
          this.showNotes=this.notes
          
          
        }
      })
  }

  
  onSearch(){
  this.notes=this.search.transform(this.allNotes,this.searchQuery)
  }
  handleNotesClick(){
    this.title='Notes'
    this.showNotes=this.notes
  }

  handleArchiveClick(){
    this.title='Archive'
    this.showNotes=this.archive

  }
  handleTrashClick(){
    this.title='Trash'
    this.showNotes=this.deleted

  }
  deleteNote(data:any){
    console.log("in delte")
    data.isDeleted=true
    this.http.editnote(data).subscribe({
      next:(res)=>{
        console.log(res)
      },
      error:(err)=>{
        console.log(err)
      }
    })


  }
  archiveNote(data:any){
    data.isArchived=true
    this.http.editnote(data).subscribe({
      next:(res)=>{
        console.log(res)
      },
      error:(err)=>{
        console.log(err)
      }
    })


  }
}


