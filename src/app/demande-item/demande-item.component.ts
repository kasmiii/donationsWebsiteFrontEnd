import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DemandeService } from '../services/demande.service';
import { Demande } from '../classes/demande';
import { global } from '@angular/compiler/src/util';
import { Global } from '../classes/global';

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
  
  constructor(private router:Router,private demandeService:DemandeService) { }

  ngOnInit() {
  }

  deleteDemande(id_demande:string,type:string){
    this.demandeService.deleteDemandeById(id_demande,type).subscribe(
      (data:Demande)=>{"id de demande supprime est: "+console.log(data.mIdDemande)}
    );
    //this.router.navigate(['/espaceDemandeur/mesDemandes',{cin:Global.cin}]);
  }

}
