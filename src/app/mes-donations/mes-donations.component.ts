import { Component, OnInit } from '@angular/core';
import { DemandeService } from '../services/demande.service';
import { Donation } from '../classes/donation';
import { Global } from '../classes/global';
import { Depot } from '../classes/depot';
import {ConfirmationService, Message} from 'primeng/api';

@Component({
  selector: 'app-mes-donations',
  templateUrl: './mes-donations.component.html',
  styleUrls: ['./mes-donations.component.css']
})
export class MesDonationsComponent implements OnInit {

  msgs: Message[] = [];
  public buttonChecked:false;
  public list_donations:Array<Donation>=new Array<Donation>();
  public depot=new Depot('fggfgfg','depot al irfane','rue Mohammed ben abdellah-Al Irfane,Rabat');
  constructor(private demandeService:DemandeService,private confirmationService:ConfirmationService) { }

  ngOnInit() {
    this.demandeService.getDonations(Global.cin).subscribe(
      (data:Array<Donation>)=>{
        this.list_donations=data;
      }
    );
  }

  confirm(){
    this.confirmationService.confirm({
      message: 'Are you sure that you want to proceed?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
          this.msgs = [{severity:'info', summary:'Confirmed', detail:'You have Canceled the Donation'}];
      },
      reject: () => {
          this.msgs = [{severity:'info', summary:'Rejected', detail:'You have rejected'}];
      }
  });

  }

}
