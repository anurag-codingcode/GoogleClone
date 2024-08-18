import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }
  getUser(id:string){
    
      return this.http.get('http://localhost:3000/users/'+id)
    
    
  }
}
