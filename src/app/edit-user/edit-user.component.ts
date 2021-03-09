import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Customvalidators } from '../customValidator/CustomValidator';
import { AuthenticationServiceService } from '../services/authentication-service.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EditUserComponent>,private router:Router,private fb:FormBuilder,private authservice:AuthenticationServiceService
    ,@Inject(MAT_DIALOG_DATA) public data: any, public dialog: MatDialog ) { }
    userform:FormGroup;
   userdata:any;

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
this.userdata=this.data.user;

}


updateAmmount(){
  console.log(this.userform.value);
  console.log(this.data.email);
  this.authservice.editUser(this.userform.value,this.data.email,this.data.id).subscribe((res:any)=>{
    this.dialogRef.close(
      res
    );
    console.log(res)

  },(err)=>{

    console.log(err)

  })
}
}