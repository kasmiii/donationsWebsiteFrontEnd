import { Injectable } from '@angular/core';
import { Personne } from '../classes/personne';
import { Session } from 'protractor';
import { Global } from '../classes/global';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  
  constructor() { }

  authenticate(personne:Personne) {
    if (personne.mCin!==null) {
      sessionStorage.setItem('cin',personne.mCin);
      Global.cin=sessionStorage.getItem('cin');
      sessionStorage.setItem('username', personne.mUsername);
      Global.username=sessionStorage.getItem('username');
      sessionStorage.setItem('type',personne.mType);
      Global.type=sessionStorage.getItem('type');      
      return true;
    } 
    
    return false;
    
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('cin')
    if(user!==null)return true;
    return false;
  }

  logOut() {
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('cin');
    sessionStorage.removeItem('type');
    Global.cin=null;
    Global.username=null;
    Global.type=null;
  }

}
