import { Component, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Customvalidators } from '../customValidator/CustomValidator';

import { User } from '../models/user';
import {AuthenticationServiceService} from '../services/authentication-service.service';

@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.component.html',
  styleUrls: ['./register-component.component.css']
})
export class RegisterComponentComponent implements OnInit {

  constructor(private fb:FormBuilder,private authservice:AuthenticationServiceService,private router:Router) { }
  userform:FormGroup;
  user:User;
  isSucuess:boolean;
  message:String;
  diserror:Boolean=false;
  myimg:string ="assets/images/lms.png";
    ngOnInit(): void {

      this.userform=this.fb.group({
        fullName:['',[Validators.required,Validators.maxLength(30),Validators.minLength(5)]],
     
        email:['',[Validators.required]],
        password:['',[Validators.required,Validators.maxLength(12),Validators.minLength(8)]],
        reenterPassword:['',[Validators.required,Validators.maxLength(12),Validators.minLength(8)]]
      })
      
  

  
  
    }
    ngOnChanges():void{
  
    }
  
  
  register(){
  
this.authservice.register(this.userform.value).subscribe((res:any)=>{
console.log(res);
this.router.navigate(['/LoginComponent']);
},(err:any)=>{
  console.log(err)
  this.message=err.error.message;
  console.log(this.message);
  this.isSucuess=false;
  this.diserror=true;
  setTimeout(()=>{this.diserror=false},5000);
})
  }


  

}
