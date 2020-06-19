import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DemandeItem } from '../classes/demande-item';
import { DemandeService } from '../services/demande.service';

@Component({
  selector: 'app-mesdemandes',
  templateUrl: './mesdemandes.component.html',
  styleUrls: ['./mesdemandes.component.css']
})
export class MesdemandesComponent implements OnInit {

  public cin:string;
  public listDemandes:Array<DemandeItem>=new Array();
  
  constructor(private router:Router,private activatedRoute:ActivatedRoute,private demandeService:DemandeService) { }

  ngOnInit() {
      this.cin=this.activatedRoute.snapshot.paramMap.get('cin');
      this.demandeService.getDemandes(this.cin).subscribe(
        (data:Array<DemandeItem>)=>{
          this.listDemandes=data;
        }
      );

      for(let i=0;i<this.listDemandes.length;i++){
        console.log("id demande: "+this.listDemandes[i].idDemande);
        
      }

  }

  

}
