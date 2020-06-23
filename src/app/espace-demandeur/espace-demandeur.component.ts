import { Component, OnInit } from '@angular/core';
import { Global } from '../classes/global';
import {MenubarModule} from 'primeng/menubar';
import {MenuItem, ConfirmationService, Message} from 'primeng/api';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-espace-demandeur',
  templateUrl: './espace-demandeur.component.html',
  styleUrls: ['./espace-demandeur.component.css']
})
export class EspaceDemandeurComponent implements OnInit {

  msgs: Message[] = [];
  public username=Global.username;
  public nom=Global.nom;
  public prenom=Global.prenom; 
  public image=Global.image;
  items: MenuItem[];
  items1:MenuItem[];
  activeItem: MenuItem;

  constructor(private confirmationService:ConfirmationService,private router:Router,private authenticationService:AuthenticationService) { }

  ngOnInit() {
    this.items = [
      {
          label: 'mes demandes',
          icon: 'pi pi-fw pi-file',
          routerLink: ['mesDamandes',{cin:Global.cin}]
      },
      {
          label: 'effectuer demande',
          icon: 'pi pi-fw pi-pencil',
          routerLink:['effectuerDemande']
      },
      {
          label: 'Notifications',
          icon: 'pi pi-fw pi-question',
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