import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  toggleEditable(event){
    if ( event.target.checked ) {
    console.log("the field is checked....");
    document.getElementById('associationForm').style.display='block';
  }
  else{
    //console.log("unchecked...");
    document.getElementById('associationForm').style.display='none';
  }
  
  }

}
