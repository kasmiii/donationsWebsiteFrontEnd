import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Personne } from '../classes/personne';

@Injectable({
  providedIn: 'root'
})

export class UploadFileService {

  private baseUrl = 'http://localhost:9098';
  
  constructor(private http: HttpClient) { }

  uploadImage(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file);//it accept as value an object of type Blob
    //const personneBlob=new Blob([JSON.stringify(personne)],{type: "application/json"});
    //formData.append('personne',JSON.stringify(personne));
    //formData.append('Personne',personneBlob);
    const req = new HttpRequest('POST', this.baseUrl+'/uploadimage', formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }

  getFiles(): Observable<any> {
    return this.http.get(this.baseUrl+'/files');
  }

}
