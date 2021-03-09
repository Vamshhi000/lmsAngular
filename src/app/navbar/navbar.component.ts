import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.getLocalStoragedata=JSON.parse(localStorage.getItem("user"));
    this.name=this.getLocalStoragedata.fullName;

  }
  myimg:string ="assets/images/lms.png";
name:string;
getLocalStoragedata:any;

  logout(){
    localStorage.clear();
    this.router.navigate(['/LoginComponent']);
  }
}
