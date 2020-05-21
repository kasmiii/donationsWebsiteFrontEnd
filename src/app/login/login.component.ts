import { Component, OnInit } from '@angular/core';
import { NgModel, NgForm } from '@angular/forms';
import { Login } from '../classes/login';
import { PersonneService } from '../services/perseonne.service';
import { Personne } from '../classes/personne';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(private personneService:PersonneService) { }

  ngOnInit() {
  }

  onSubmitLogin(loginForm:NgForm){
      //console.log();
      var login=new Login(loginForm.value.login,loginForm.value.password);
      console.log(login.username+" "+login.password);
      this.personneService.login(login).subscribe(
          (personne:Personne)=>{
            console.log("informations of person connected are: \n"+personne.mCin+" "+personne.mUsername+" "+personne.mPassword);
          },
          (err)=>console.log("no person is related to this account")
      );
  }

}
