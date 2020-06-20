import { Component, OnInit } from '@angular/core';
import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';
import { Global } from '../classes/global';

@Component({
  selector: 'app-espacedonateur',
  templateUrl: './espacedonateur.component.html',
  styleUrls: ['./espacedonateur.component.css']
})

export class EspacedonateurComponent implements OnInit {

  public username=Global.username;
  items: MenuItem[];
  items1:MenuItem[];
  activeItem: MenuItem;
  
  constructor() { }

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
