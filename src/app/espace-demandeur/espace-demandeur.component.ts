import { Component, OnInit } from '@angular/core';
import { Global } from '../classes/global';
import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-espace-demandeur',
  templateUrl: './espace-demandeur.component.html',
  styleUrls: ['./espace-demandeur.component.css']
})
export class EspaceDemandeurComponent implements OnInit {

  public username=Global.username;
  items: MenuItem[];
  items1:MenuItem[];
  activeItem: MenuItem;

  constructor() { }

  ngOnInit() {
    this.items = [
      {
          label: 'mes demandes',
          icon: 'pi pi-fw pi-file',
          routerLink: ['mesDamandes']
      },
      {
          label: 'effectuer demande',
          icon: 'pi pi-fw pi-pencil',
          routerLink:['effectuerDemande']
      },
      {
          label: 'Help',
          icon: 'pi pi-fw pi-question',
      },
      {
          label: 'Actions',
          icon: 'pi pi-fw pi-cog'
      },
      {separator:true},
      {
          label: 'Quit', icon: 'pi pi-fw pi-times'
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

}