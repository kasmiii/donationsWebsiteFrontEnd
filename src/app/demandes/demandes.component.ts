import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DemandeInfo } from '../classes/demande-info';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DemandeService } from '../services/demande.service';
import { switchMap } from 'rxjs/operators';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

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

  constructor(private fb: FormBuilder,private router:Router,private activatedRoute:ActivatedRoute,private demandeService:DemandeService) { }

  ngOnInit() {
    this.searchForm = this.fb.group({
      'keyword': new FormControl('', Validators.required)
  });

    //this.searchForm=;
    //let containsKeyword=this.activatedRoute.snapshot.paramMap.has('keyword');
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
    for (let i = 0; i < this.list.length; i++) {
      console.log("id demande::"+this.list[i]);  
  }
}

onSubmitSearchDemande(searchForm:FormGroup){

  this.keyword=searchForm.get('keyword').value;
  if( this.keyword==='') this.keyword='ALL';
  this.router.navigate(['/espaceDonateur/demandes',{keyword:this.keyword}]);

}
}
