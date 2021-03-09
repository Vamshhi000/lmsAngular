import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {

  constructor(private http:HttpClient) { }
  baseUrl:String='http://localhost:7070/trustfinity'
  baseUrl2:string='http://localhost:7070/trustfinitylms'

  isAuthenticated:boolean;
  user:Observable<User>
  verification(authvar:boolean){
    if(authvar!=null){
      this.isAuthenticated=authvar;
    }
  
  }
  register(user:User):Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/registration`,user);
   }


   Login(userr:User):Observable<User>{


    this.user=this.http.get<User>(`${this.baseUrl}/${userr.password}?email=${userr.email}`);
    this.user.subscribe((res:any)=>{
      this.isAuthenticated=res.validate;
    })
      return this.http.get<User>(`${this.baseUrl}/${userr.password}?email=${userr.email}`);
  
    }

addCustomers(user:User,email:string):Observable<User>{
  return this.http.post<User>(`${this.baseUrl2}/${email}`,user);
}
delete(email:string,id:number):Observable<User>{
  
  return this.http.delete<User>(`${this.baseUrl2}/${id}?email=${email}`);
}

editUser(user:User,email:string,id:number):Observable<User>{
  console.log(`${this.baseUrl2}/${id}?email=${email}`);
  return this.http.put<User>(`${this.baseUrl2}/${id}?email=${email}`,user);

}

getAllCustomers(email:string):Observable<User>{

  return this.http.get<User>(`${this.baseUrl2}/${email}`);
}
}
