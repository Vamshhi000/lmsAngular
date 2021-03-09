import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthenticationServiceService } from '../services/authentication-service.service';

@Component({
  selector: 'app-confirm-delete',
  templateUrl: './confirm-delete.component.html',
  styleUrls: ['./confirm-delete.component.css']
})
export class ConfirmDeleteComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ConfirmDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private authservice:AuthenticationServiceService) { }

  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  Delete(){
  
this.authservice.delete(this.data.email,this.data.id).subscribe((res:any)=>{
  console.log(res)
  this.dialogRef.close(
    res
  );
  console.log(res)

},(err)=>{console.log(err)});

  }
}
