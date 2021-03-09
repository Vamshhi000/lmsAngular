import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddCustomersComponent } from '../add-customers/add-customers.component';
import { ConfirmDeleteComponent } from '../confirm-delete/confirm-delete.component';
import { EditUserComponent } from '../edit-user/edit-user.component';
import { User } from '../models/user';
import { AuthenticationServiceService } from '../services/authentication-service.service';
import { ViewDataComponent } from '../view-data/view-data.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private authservice:AuthenticationServiceService,private router:Router,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getLocalStoragedata=JSON.parse(localStorage.getItem("user"));
    this.getallUserData();
  }
  getLocalStoragedata:any;
userData:User[]=[]

  getallUserData(){

this.authservice.getAllCustomers(this.getLocalStoragedata.email).subscribe((res:any)=>{

  this.userData=res;
console.log(this.userData);
},(err)=>{
console.log(err);
})
  }


  delete(id:number){
    console.log(this.getLocalStoragedata.email+" "+id)
    const dialogRef = this.dialog.open(ConfirmDeleteComponent, {
      width: '300px',
      data: {email:this.getLocalStoragedata.email,id:id}
    });

    dialogRef.afterClosed().subscribe((result) => {
if(result!=undefined){
 
  this.userData=result;
  
      

}



      
      
    });
  }


  editUser(user:User,id:number){

    const dialogRef = this.dialog.open(EditUserComponent, {
      width: '500px',
      height:'700px',
      data: {email: this.getLocalStoragedata.email,user,id:id}
    });
    dialogRef.afterClosed().subscribe((res:any) => {

        if(res!=undefined){
          this.userData=res;
               }
 


    },(err)=>{
  console.log(err);
    });
 
  }


  openAddCustomer(){
    const dialogRef = this.dialog.open(AddCustomersComponent, {
      width: '450px',
      height:'600px',
      data: {email: this.getLocalStoragedata.email}
    });
    dialogRef.afterClosed().subscribe((res:any) => {

        if(res!=undefined){
          this.userData=res;
               }
 


    },(err)=>{
  console.log(err);
    });
  }

  viewData(user:User){
    const dialogRef = this.dialog.open(ViewDataComponent, {
      width: '350px',
      height:'470px',
      data: {user}
    });
    dialogRef.afterClosed().subscribe((res:any) => {

        if(res!=undefined){
          this.userData=res;
               }
 


    },(err)=>{
  console.log(err);
    });

  }
  
}
