import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DemandeService } from '../services/demande.service';
import { Demande } from '../classes/demande';
import { global } from '@angular/compiler/src/util';
import { Global } from '../classes/global';
import { ConfirmationService, Message } from 'primeng/api';

@Component({
  selector: 'app-demande-item',
  templateUrl: './demande-item.component.html',
  styleUrls: ['./demande-item.component.css']
})

export class DemandeItemComponent implements OnInit {

  @Input("id_demande")id_demande:string;
  @Input("date")date:string;
  @Input("id_objet")id_objet:string;
  @Input("type_demande")type_demande;
  @Input("status")status:string;
  msgs: Message[] = [];  
  constructor(private router:Router,private demandeService:DemandeService,private confirmationService:ConfirmationService) { }

  ngOnInit() {
  }

  deleteDemande(id_demande:string,type:string){
    
    this.confirmationService.confirm({
      message: 'Are you sure that you want to proceed?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.demandeService.deleteDemandeById(id_demande,type).subscribe(
          (data:Demande)=>{"id de demande supprime est: "+console.log(data.mIdDemande)}
        );  
        this.msgs = [{severity:'info', summary:'Confirmed', detail:'You have Canceled your Demand'}];
      },
      reject: () => {
          this.msgs = [{severity:'info', summary:'Rejected', detail:'You have rejected'}];
      }
  });


    
    //this.router.navigate(['/espaceDemandeur/mesDemandes',{cin:Global.cin}]);
  }

}
