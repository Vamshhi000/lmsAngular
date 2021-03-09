import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthenticationServiceService } from './authentication-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {
  constructor(private authservice:AuthenticationServiceService,private router:Router) { }

  canActivate(route : ActivatedRouteSnapshot , state : RouterStateSnapshot){


    
    if(this.authservice.isAuthenticated){
      return true;
    }
    return this.router.navigate(['/LoginComponent']);
  }

  
}
