import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }
  BASEURL='https://fundoonotes.incubation.bridgelabz.com/api/'
  getUser(id:string){
      return this.http.get('http://localhost:3000/users/'+id)
  }
  findAccount(email:string){
    return this.http.get(`${this.BASEURL}user?filter={"where":{"email":"${email}"}}`)
  }
  login(email:string,password:string){
    return this.http.post(`${this.BASEURL}user/login`,{email,password})
  }
  getNotes(){
    return this.http.get(`${this.BASEURL}notes/getNotesList?access_token=${localStorage.getItem('token')}`)
  }
  addNotes(data:any){
    console.log(data)
    return this.http.post(`${this.BASEURL}notes/addNotes?access_token=${localStorage.getItem('token')}`,data)
  }
  registerUser(data:any){
    console.log(data)
    return this.http.post(`${this.BASEURL}user/userSignUp`,data)
  }
  editnote(data:any){
    return this.http.patch(`${this.BASEURL}notes/${data.id}?access_token=${localStorage.getItem('token')}`,data)
  }
  
}
