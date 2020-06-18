import { Component, OnInit } from '@angular/core';
import {Validators,FormControl,FormGroup,FormBuilder, NgForm} from '@angular/forms';
import {SelectItem} from 'primeng/api';
import {MessageService} from 'primeng/api';
import { Global } from '../classes/global';
import {InputNumberModule} from 'primeng/inputnumber';

@Component({
  selector: 'app-effectuerdemande',
  templateUrl: './effectuerdemande.component.html',
  styleUrls: ['./effectuerdemande.component.css']
})
export class EffectuerdemandeComponent implements OnInit {

  isAssociator=Global.isAssociator;
  libelleAssociation=Global.libelleAssociation;
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

    constructor(private fb: FormBuilder, private messageService: MessageService) {}

  

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
    this.submitted = true;
    this.messageService.add({severity:'info', summary:'Success', detail:'Form Submitted'});
    //console.log("value of form recovered is: "+form.value.categorielivre);
    console.log("livre input is:"+form.value);
  }

  onSubmitMachine(machineform:NgForm){
    this.submitted=true;
    this.messageService.add({severity:'info', summary:'Success', detail:'Form Submitted'});
    console.log("machine input is:"+machineform.value.nomMachine);
    //console.log(machine);
  }

  onSubmitVetement(vetementform:NgForm){
    this.submitted=true;
    this.messageService.add({severity:'info', summary:'Success', detail:'Form Submitted'});
    console.log("vetement input is:"+vetementform.value);
  }

  get diagnostic() { 
    return JSON.stringify(this.livreform.value);
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
