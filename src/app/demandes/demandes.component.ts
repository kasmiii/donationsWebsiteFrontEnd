import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DemandeInfo } from '../classes/demande-info';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DemandeService } from '../services/demande.service';
import { switchMap } from 'rxjs/operators';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Depot } from '../classes/depot';
import { Affectation } from '../classes/affectation';
import { Global } from '../classes/global';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-demandes',
  templateUrl: './demandes.component.html',
  styleUrls: ['./demandes.component.css']
})

export class DemandesComponent implements OnInit {

  public list_demandes$:Observable<Array<DemandeInfo>>
  public keyword:string;
  public list:Array<DemandeInfo>=new Array<DemandeInfo>();
  public searchForm:FormGroup;
  public donationForm:FormGroup;
  depots: Array<Depot>=new Array<Depot>();
  
  buttonChecked=true;

  constructor(private messageService: MessageService,private fb: FormBuilder,private router:Router,private activatedRoute:ActivatedRoute,private demandeService:DemandeService) { }

  ngOnInit() {
    this.searchForm = this.fb.group({
      'keyword': new FormControl('', Validators.required)
  });

    this.donationForm=this.fb.group({
        'quantity':new FormControl('',Validators.required)
    }
    );

    this.depots.push(new Depot('depot1','depot1','alirfane'));
    this.depots.push(new Depot('depot2','depot2','sale al jadida'));
    this.depots.push(new Depot('depot3','depot3','bab elhed'));
    this.depots.push(new Depot('depot4','depot4','hay erriyad'));
    this.depots.push(new Depot('depot5','depot5','al kamra'));
    //this.depots.push(new Depot('depot1','',''));

    this.list_demandes$=this.activatedRoute.paramMap.pipe(
      switchMap(params => {
        if(params.has('keyword')){
          this.keyword = params.get('keyword');
          console.log("keyword enterd is:"+this.keyword);
        }
        else this.keyword='ALL';
        return this.demandeService.getDemandesByKeyword(this.keyword);
      })
    );

    this.list_demandes$.subscribe(
      (data:Array<DemandeInfo>)=>{
        this.list=data;
      }
    );
    /*for (let i = 0; i < this.list.length; i++) {
      console.log("id demande::"+this.list[i]);  
    }*/
}

onSubmitSearchDemande(searchForm:FormGroup){

  this.keyword=searchForm.get('keyword').value;
  if( this.keyword==='') this.keyword='ALL';
  this.router.navigate(['/espaceDonateur/demandes',{keyword:this.keyword}]);

}

toggleClick(checked,demandeInfo:DemandeInfo,formDonation:FormGroup){
  //if checked is false then the button is confirmed,otherwise ,else...
  if(checked===false){
      console.log("the quantity donated is:"+formDonation.get('quantity').value);
      //creating donation 
    //affecter donation...
    let today = new Date();
    let date=today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDay();
      let id_affectation=Global.generateRandomString(6);
      let quantite_restee=demandeInfo.demande.mQuantite-formDonation.get('quantity').value;
       let affectation=new Affectation(id_affectation,date,formDonation.get('quantity').value,quantite_restee,'aZsdfr2',demandeInfo.demande.mCinDemandeur,Global.cin,demandeInfo.objet.mIdObjet);
       
       this.demandeService.saveDonation(affectation).subscribe(
         (data:Affectation)=>{
           console.log("id affectation est:"+data.mIdAffectation);
         }
       );
          //creating message
       this.messageService.add({severity:'info', summary:'Success', detail:'Thank you for you donation !'});
       
  }
    
}

}
