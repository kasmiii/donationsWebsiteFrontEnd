import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DemandeService } from '../services/demande.service';
import { DemandeInfo } from '../classes/demande-info';

@Component({
  selector: 'app-detail-demande',
  templateUrl: './detail-demande.component.html',
  styleUrls: ['./detail-demande.component.css']
})
export class DetailDemandeComponent implements OnInit {

  demandeInfo:DemandeInfo;
  id:string;
  type:string;
  description:string;
  date_demande:string;
  status:string;
  quantity:number;
  //------------pour un livre-------------
  titre:string;
  nomAuteur:string;
  genre:string;
  //------------pour une machine-------------
  nomMachine:string;
  typeMachine:string;
  //------------pour un vetement-------------
  taille:string;
  categorie:string;

  constructor(private router:Router,private demandeService:DemandeService,private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
      this.id=this.activatedRoute.snapshot.paramMap.get('id_demande');
      this.type=this.activatedRoute.snapshot.paramMap.get('type_demande');  
      this.demandeService.getDetailDemande(this.id,this.type).subscribe(
        (data:DemandeInfo)=>{
            this.demandeInfo=data;
            this.description=this.demandeInfo.objet.mDescription;
            this.date_demande=this.demandeInfo.demande.mDateDemande;
            this.status=this.demandeInfo.demande.mStatus;
            this.quantity=this.demandeInfo.demande.mQuantite;
            //console.log("l'id de l'objet demande en question en detail"+this.demandeInfo.objet.mIdObjet);
            switch (this.type) {
              case 'vetement':
                  this.taille=this.demandeInfo.vetement.mTaille;
                  this.categorie=this.demandeInfo.vetement.mCategorie;
                break;
              case 'machine':
                  this.nomMachine=this.demandeInfo.machine.mNomMachine;
                  this.typeMachine=this.demandeInfo.machine.mTypeMachine;
                break;
              case 'livre':
                this.titre=this.demandeInfo.livre.mTitre;
                this.nomAuteur=this.demandeInfo.livre.mNomAuteur;
                this.genre=this.demandeInfo.livre.mGenre;
                break;
              default:
                console.log("type is not recognised...");
                break;
            }
          }
      );    
  }

}
