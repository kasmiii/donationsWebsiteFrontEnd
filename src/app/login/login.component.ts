import { Component, OnInit } from '@angular/core';
import { NgModel, NgForm } from '@angular/forms';
import { Login } from '../classes/login';
import { PersonneService } from '../services/perseonne.service';
import { Personne } from '../classes/personne';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { Global } from '../classes/global';
import { log } from 'console';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  public isAuthenticated;
  public personne:Personne;

  constructor(private personneService:PersonneService,private authentication:AuthenticationService,private router:Router) { }

  ngOnInit() {
  }

  onSubmitLogin(loginForm:NgForm){
    
      var login=new Login(loginForm.value.login,loginForm.value.password);  
      this.personneService.signIn(login).subscribe(
          (personne:Personne)=>{
            if(this.authentication.authenticate(personne)){
              this.isAuthenticated=true;
              this.personne=personne;
              console.log("personne type is :"+personne.mType);
              
              if(personne.mType==="demandeur"){
                this.router.navigate(['/espaceDemandeur/effectuerDemande']);
              }
              else {
                this.router.navigate(['/espaceDonateur/mesDonations']);
              }
            }
            this.isAuthenticated=false;
          },
          (err)=>console.log("no person is related to this account")
      );
  }

}
