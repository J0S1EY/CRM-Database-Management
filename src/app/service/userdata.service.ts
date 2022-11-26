import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {
  search = new BehaviorSubject('')
  constructor(private userdata: HttpClient) { }
  //fetch data to user home 
  getUserdata() {
    return this.userdata.get('http://localhost:3000/users')
  }
  //fetch data to user view page
  viewUser(userId: any) {
    return this.userdata.get('http://localhost:3000/users/' + userId)

  }
  //add new user
  addNewuser(addUser:any){
   return this.userdata.post('http://localhost:3000/users/', addUser)
  }
  updateUser(userurlId:any, userForm:any){
    return this.userdata.put('http://localhost:3000/users/'+ userurlId, userForm)

  }
  DeleteUser(userurlId:any){
    return this.userdata.delete('http://localhost:3000/users/'+ userurlId,)
  }

  


}
