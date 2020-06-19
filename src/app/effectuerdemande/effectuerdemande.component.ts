import { Component, OnInit } from '@angular/core';
import {Validators,FormControl,FormGroup,FormBuilder, NgForm} from '@angular/forms';
import {SelectItem} from 'primeng/api';
import {MessageService} from 'primeng/api';
import { Global } from '../classes/global';
import {InputNumberModule} from 'primeng/inputnumber';
import { Objet } from '../classes/objet';
import { Livre } from '../classes/livre';
import { Demande } from '../classes/demande';
import { PersonneService } from '../services/perseonne.service';
import { DemandeService } from '../services/demande.service';
import { DemandeInfo } from '../classes/demande-info';
import { Machine } from '../classes/machine';
import { Vetement } from '../classes/vetement';
import { Router } from '@angular/router';

@Component({
  selector: 'app-effectuerdemande',
  templateUrl: './effectuerdemande.component.html',
  styleUrls: ['./effectuerdemande.component.css']
})

export class EffectuerdemandeComponent implements OnInit {

  isAssociator=Global.isAssociator;
  libelleAssociation=Global.libelleAssociation;
  public quantite:number;
  //quantity:number=1;
  typesmachines:string[]=['electronique','electrique','thermique','electromagnetique'];
  categories:string[]=['roman','cv','documentation','enfant','historique'];
  sizes:string[]=['S','M','L','XL','XXL'];
  categoriesVetement:string[]=['Enfant','Homme','Femme','Sport'];
  public type:string;
  livreform: FormGroup;
  machineform:FormGroup;
  vetementform:FormGroup;

    submitted: boolean;

    genders: SelectItem[];

    description: string;

    constructor(private fb: FormBuilder, private messageService: MessageService,private demandeService:DemandeService,private router:Router) {}

  ngOnInit() { 
    this.livreform = this.fb.group({
      'titre': new FormControl('', Validators.required),
      'nomAuteur': new FormControl('', Validators.required),
      'categorielivre': new FormControl('',Validators.required),//Validators.compose([Validators.required, Validators.minLength(6)])
      'descriptionlivre': new FormControl('',Validators.required),
      'quantity':new FormControl()
  });

    this.machineform=this.fb.group({
        'nomMachine': new FormControl('', Validators.required),
        'typeMachine': new FormControl('', Validators.required),
        'descriptionmachine': new FormControl('',Validators.required),
        'quantity':new FormControl()
    });

    this.vetementform=this.fb.group({
      'categorieVetement': new FormControl('', Validators.required),
      'tailleVetement': new FormControl('', Validators.required),
      'descriptionvetement': new FormControl('',Validators.required),
      'quantity':new FormControl()
  });

  }

  onSubmitLivre(form: NgForm) {
    const id_objet=this.generateRandomString(6);
   let objet=new Objet(id_objet,form.value.descriptionlivre,'livre');
   let livre=new Livre(id_objet,form.value.titre,form.value.nomAuteur,form.value.categorielivre);
   var today = new Date();

   var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
   if(typeof form.value.quantity==='undefined') this.quantite=1;
   
   else this.quantite=form.value.quantity;
   
   let demande=new Demande(Global.generateRandomString(7),date,'pas encore accepte',this.quantite,objet.mIdObjet,Global.cin); 
   let demandeInfo=new DemandeInfo('livre',objet,null,null,livre,demande);
   this.demandeService.saveDemande(demandeInfo).subscribe(
    (data)=>{
      console.log("type ob object registred is "+data.type);
    }
  );
   this.submitted = true;
    
     this.messageService.add({severity:'info', summary:'Success', detail:'demande de livre Enregistre !'});
    this.router.navigate(['/espaceDemandeur/mesDamandes',{cin:Global.cin}]);
     //console.log("value of form recovered is: "+form.value.categorielivre);
    //console.log("livre input is:"+form.value);
  }

  onSubmitMachine(machineform:NgForm){
  let id_objet=this.generateRandomString(6);
  let objet=new Objet(id_objet,machineform.value.descriptionlivre,'machine');
  let machine=new Machine(id_objet,machineform.value.nomMachine,machineform.value.typeMachine);
  var today = new Date();
  //console.log("l'objet envoye est : "+objet.mIdObjet);
  //console.log("la machine est : "+machine.mIdObjet);    
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  if(typeof machineform.value.quantity==='undefined') this.quantite=1;
   
  else this.quantite=machineform.value.quantity;
   
  let demande=new Demande(Global.generateRandomString(7),date,'pas encore accepte',this.quantite,objet.mIdObjet,Global.cin); 
  let demandeInfo=new DemandeInfo('machine',objet,machine,null,null,demande);
  //console.log("demande est : "+demande.mIdObjet);
  //console.log("demande info est : "+demandeInfo.objet.mIdObjet);
   
  this.demandeService.saveDemande(demandeInfo).subscribe(
    (data)=>{
       //console.log("type ob object registred is "+data.type);
    }
  );

    this.submitted=true;
    this.messageService.add({severity:'info', summary:'Success', detail:'demande de machine Enregistre !'});   
    this.router.navigate(['/espaceDemandeur/mesDamandes',{cin:Global.cin}]);
  }

  onSubmitVetement(vetementform:NgForm){
    
  const id_objet=this.generateRandomString(6);
   let objet=new Objet(id_objet,vetementform.value.descriptionlivre,'vetement');
   let vetement=new Vetement(id_objet,vetementform.value.tailleVetement,vetementform.value.categorieVetement);
   var today = new Date();
   var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
   if(typeof vetementform.value.quantity==='undefined') this.quantite=1;
   else this.quantite=vetementform.value.quantity;
   let demande=new Demande(Global.generateRandomString(7),date,'pas encore accepte',this.quantite,objet.mIdObjet,Global.cin); 
   let demandeInfo=new DemandeInfo('vetement',objet,null,vetement,null,demande);
   
   this.submitted=true;
   this.messageService.add({severity:'info', summary:'Success', detail:'demande de vetement Enregistre !'});
   this.router.navigate(['/espaceDemandeur/mesDamandes',{cin:Global.cin}]);
}

  get diagnostic() { 
    return JSON.stringify(this.livreform.value);
  }

  public  generateRandomString(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }

  getTypeHandler(event:any){
    this.type=event.target.value;
    switch (this.type) {
      case "vetement":
        document.getElementById("vetementForm").style.display='block';
        document.getElementById("machineForm").style.display='none';
        document.getElementById("livreForm").style.display='none';
        break;
      case "machine":
        document.getElementById("machineForm").style.display='block';
        document.getElementById("vetementForm").style.display='none';
        document.getElementById("livreForm").style.display='none';
        break;
      case "livre":
        document.getElementById("livreForm").style.display='block';
        document.getElementById("machineForm").style.display='none';
        document.getElementById("vetementForm").style.display='none';
        break;
      default:
        break;
    }
  }
}
