import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from '../models/user';
import { AuthenticationServiceService } from '../services/authentication-service.service';

@Component({
  selector: 'app-view-data',
  templateUrl: './view-data.component.html',
  styleUrls: ['./view-data.component.css']
})
export class ViewDataComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ViewDataComponent>,private authservice:AuthenticationServiceService
    ,@Inject(MAT_DIALOG_DATA) public data: any, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getLocalStoragedata=JSON.parse(localStorage.getItem("user"));
    this. getallUserData();
    
this.tableData=this.data;
// this.hallticketno=this.data.hallTicketno;
// this.degree=this.data.degree
// this.state=this.data.state
// this.city=this.data.city
// this.pincode=this.data.pincode
  }
  tableData:any={};
  userData:User[]=[]
  getLocalStoragedata:any;
  hallticketno:string;
  degree:string;
  state:string;
  city:string;
  pincode:string
  getallUserData(){

    this.authservice.getAllCustomers(this.getLocalStoragedata.email).subscribe((res:any)=>{
    
      this.userData=res;

    },(err)=>{
    console.log(err);
    })
      }
}
