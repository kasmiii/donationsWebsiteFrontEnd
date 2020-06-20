import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DemandeInfo } from '../classes/demande-info';
import { DemandeItem } from '../classes/demande-item';
import { Demande } from '../classes/demande';
import { Affectation } from '../classes/affectation';

@Injectable({
  providedIn: 'root'
})

export class DemandeService {

  private baseUrl='http://localhost:9098';

  constructor(private http: HttpClient ) { }

  saveDemande(demandeInfo:DemandeInfo):Observable<DemandeInfo>{
    return this.http.post<DemandeInfo>(this.baseUrl+"/saveDemande",demandeInfo,{
      responseType: 'json'
    });

  }

  getDemandes(cin:string):Observable<Array<DemandeItem>>{

    return this.http.get<Array<DemandeItem>>(this.baseUrl+"/mesDemandes?cin="+cin);
  
  }

  deleteDemandeById(id:string,type:string):Observable<Demande>{
    return this.http.get<Demande>(this.baseUrl+"/deleteDemande?id="+id+"&type="+type);
  }

  getDetailDemande(id_demande:string,type_demande:string):Observable<DemandeInfo>{
    return this.http.get<DemandeInfo>(this.baseUrl+"/detailDemande?id="+id_demande+"&type="+type_demande);    
  }

  getDemandesByKeyword(keyword:string):Observable<Array<DemandeInfo>>{
    return this.http.get<Array<DemandeInfo>>(this.baseUrl+"/searchDemandes?keyword="+keyword);
  }

  saveDonation(affectation:Affectation):Observable<Affectation>{

    return this.http.post<Affectation>(this.baseUrl+"/saveDonation",affectation,{
      responseType: 'json'
    });

  }
}