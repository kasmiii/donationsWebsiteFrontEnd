import { Component, OnInit } from '@angular/core';
import { NgModel, NgForm } from '@angular/forms';
import { Login } from '../classes/login';
import { PersonneService } from '../services/perseonne.service';
import { Personne } from '../classes/personne';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { Global } from '../classes/global';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  public isAuthenticated;

  constructor(private personneService:PersonneService,private authentication:AuthenticationService,private router:Router) { }

  ngOnInit() {
  }

  onSubmitLogin(loginForm:NgForm){
    
      var login=new Login(loginForm.value.login,loginForm.value.password);  
      this.personneService.login(login).subscribe(
          (personne:Personne)=>{
            if(this.authentication.authenticate(personne)){
              this.isAuthenticated=true;
              //if(Global.type==="Personne")
              this.router.navigate(['/espaceDemandeur/mesDemandes'])
              console.log("the user loged in is:  "+Global.username);
            }
            this.isAuthenticated=false;
          },
          (err)=>console.log("no person is related to this account")
      );
  }

}
