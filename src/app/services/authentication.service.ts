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
      sessionStorage.setItem('nom',personne.mNom);
      Global.nom=sessionStorage.getItem('nom');
      sessionStorage.setItem('prenom',personne.mPrenom);
      Global.prenom=sessionStorage.getItem('prenom');
      sessionStorage.setItem('image',personne.mImage);
      Global.image=sessionStorage.getItem('image');

      if(personne.mAssociation!==null){
        sessionStorage.setItem('isAssociator','true');
        sessionStorage.setItem('libelleAssociation',personne.mAssociation.mLibelleAssociation);
        Global.libelleAssociation=sessionStorage.getItem('libelleAssociation');
      }
      else{
        sessionStorage.setItem('isAssociator','false');
      }
    
      Global.isAssociator=sessionStorage.getItem('isAssociator');
      //sessionStorage.setItem();      
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
    sessionStorage.removeItem('nom');
    sessionStorage.removeItem('prenom');
    sessionStorage.removeItem('image');
    Global.cin=null;
    Global.username=null;
    Global.type=null;
    Global.nom=null;
    Global.prenom=null;
    Global.image=null;
  }

}
