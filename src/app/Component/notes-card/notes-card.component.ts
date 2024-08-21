import { Component ,EventEmitter,Input, Output} from '@angular/core';


@Component({
  selector: 'app-notes-card',
  templateUrl: './notes-card.component.html',
  styleUrls: ['./notes-card.component.scss']
})
export class NotesCardComponent {
  @Input() data:any
  // @Output() sendDataToParent=new EventEmitter()

  handleDelete(id:any){
   
    // this.sendDataToParent.emit(id)
  }
  
}
