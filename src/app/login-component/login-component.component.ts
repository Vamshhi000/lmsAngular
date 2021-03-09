import { Component, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/user';
import {AuthenticationServiceService} from '../services/authentication-service.service';
import { Router } from '@angular/router';

import { Observable, Subject } from 'rxjs';
import { CommonServiceService } from '../services/common-service.service';
import { Customvalidators } from '../customValidator/CustomValidator';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  constructor(private fb:FormBuilder,private authservice:AuthenticationServiceService,private router:Router,
 private commnonsubject:CommonServiceService) { }
userform:FormGroup;
user:User;
myimg:string ="assets/images/lms.png";
getLocalStoragedata:any;

isSucuess:boolean;
message:String;
diserror:boolean=false;
  ngOnInit(): void {

    this.userform=this.fb.group({
     
      email:['',[Validators.required]],
      password:['',[Validators.required,Validators.maxLength(12),Validators.minLength(8)]]


      

    })
    this.userform.get('email').errors



this.getLocalStoragedata=JSON.parse(localStorage.getItem("user"));
this.authservice.verification(this.getLocalStoragedata.validate);
this.commnonsubject.userSubject.next(this.getLocalStoragedata);
this.commnonsubject.usersBeSubject.next(this.getLocalStoragedata);
this.router.navigate(['/homePage']);
  }
  ngOnChanges():void{

  }







Login(){
this.authservice.Login(this.userform.value).subscribe(
  (res:any)=>{
console.log(res)
localStorage.setItem("user",JSON.stringify(res));
this.getLocalStoragedata=JSON.parse(localStorage.getItem("user"));
this.commnonsubject.userSubject.next(this.getLocalStoragedata);
this.commnonsubject.usersBeSubject.next(this.getLocalStoragedata);



    this.router.navigate(['/homePage']);
    
  },
  (err:any)=>{
    console.log(err)
    this.message=err.error.message;
    console.log(this.message);
    this.isSucuess=false;
    this.diserror=true;
    setTimeout(()=>{this.diserror=false},5000);
  }
)
}


}
