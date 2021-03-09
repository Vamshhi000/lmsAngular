import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Customvalidators } from '../customValidator/CustomValidator';
import { User } from '../models/user';
import { AuthenticationServiceService } from '../services/authentication-service.service';

@Component({
  selector: 'app-add-customers',
  templateUrl: './add-customers.component.html',
  styleUrls: ['./add-customers.component.css']
})
export class AddCustomersComponent implements OnInit {

  // constructor() { }

  // ngOnInit(): void {
  // }
  constructor(private fb:FormBuilder,
    public dialogRef: MatDialogRef<AddCustomersComponent>,private router:Router,private authservice:AuthenticationServiceService
    ,@Inject(MAT_DIALOG_DATA) public data: any, public dialog: MatDialog) { }
  userform:FormGroup;
  user:User;
  isSucuess:boolean;
  message:String;
  diserror:Boolean=false;
 
  myimg:string ="assets/images/lms.png";
    ngOnInit(): void {

      this.userform=this.fb.group({
        firstName:['',[Validators.required,Validators.maxLength(30),Validators.minLength(5)]],
        lastName:['',[Validators.required,Validators.maxLength(30),Validators.minLength(5)]],
        mobileNo:['',[Validators.required,Customvalidators.phoneNumberValidator]],
        hallTicketno:['',[Validators.required,Validators.maxLength(10),Validators.minLength(10)]],
        college:['',[Validators.required]],
        degree:['',[Validators.required]],
        city:['',[Validators.required]],
        state:['',[Validators.required]],
        pincode:['',[Validators.required,Validators.maxLength(6),Validators.minLength(6)]],
      })
      
  

  
  
    }
    ngOnChanges():void{
  
    }



    addCustomer(){

      this.authservice.addCustomers(this.userform.value,this.data.email).subscribe((res)=>{

        this.dialogRef.close(
          res
        );
      },(err)=>{
console.log(err);
      })




    }

}
