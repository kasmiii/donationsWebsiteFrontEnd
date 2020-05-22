import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuardService implements CanActivate {

  constructor(private router:Router,private authentication:AuthenticationService) { }

  canActivate(route: ActivatedRouteSnapshot, state:RouterStateSnapshot):boolean{
    //throw new Error("Method not implemented.");
    if (this.authentication.isUserLoggedIn())
      return true;

    this.router.navigate(['/donations/login']);
    return false;
    //return true;
  }
  
}
