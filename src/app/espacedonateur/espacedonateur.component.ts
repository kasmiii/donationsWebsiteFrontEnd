import { Component, OnInit } from '@angular/core';
import {MenubarModule} from 'primeng/menubar';
import {MenuItem, Message, ConfirmationService} from 'primeng/api';
import { Global } from '../classes/global';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-espacedonateur',
  templateUrl: './espacedonateur.component.html',
  styleUrls: ['./espacedonateur.component.css']
})

export class EspacedonateurComponent implements OnInit {

  msgs: Message[] = [];
  public username=Global.username;
  public nom=Global.nom;
  public prenom=Global.prenom; 
  public image=Global.image;
  //public username=Global.username;
  items: MenuItem[];
  items1:MenuItem[];
  activeItem: MenuItem;
  
  constructor(private confirmationService:ConfirmationService,private router:Router,private authenticationService:AuthenticationService) { }

  ngOnInit() {
    this.items = [
      {
          label: 'Mes donations',
          icon: 'pi pi-fw pi-file',
          routerLink: ['mesDonations',{cin:Global.cin}]
      },
      {
          label: 'Demandes',
          icon: 'pi pi-fw pi-pencil',
          routerLink:['demandes']
      },
      {
          label: 'Notifications',
          icon: 'pi pi-fw pi-notification',
      }  
  ];

  this.items1=[
    {
      label:'Logout',
      icon:'pi pi-fw pi-arrow-circle-right',
      routerLink:'logout'
    }
  ];
  this.activeItem = this.items[0];
  }

  logout(){
    this.confirmationService.confirm({
      message: 'Are you sure to logout?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
          //this.
          this.authenticationService.logOut();
          this.router.navigate(['/donations/home']);
          this.msgs = [{severity:'info', summary:'Confirmed', detail:'disconnected'}];
      },
      reject: () => {
          this.msgs = [{severity:'info', summary:'Rejected', detail:'You have rejected'}];
      }
  });
  }

}
