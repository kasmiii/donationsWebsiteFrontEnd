import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { Association } from '../classes/association';
import { Personne } from '../classes/personne';
import { Observable } from 'rxjs';
import { UploadFileService } from '../services/upload-file.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {

  public association:Association;
  public personne:Personne;
  public isAssociator=false;
  public typePersonne:string;

  //attributes used for  FileUpload...
  selectedFiles: FileList;
  currentFile: File;
  progress = 0;
  message = '';

  fileInfos: Observable<any>;

  public mImage:string;

  constructor(private uploadService: UploadFileService) { }

  ngOnInit() {
    this.fileInfos = this.uploadService.getFiles();
  }

  toggleEditable(event:any){

    var change=document.getElementById("associationForm");
    if (event.target.checked) {
      this.isAssociator=true;
      document.getElementById("associationForm").style.display='block';
    }
      
    else{
      this.isAssociator=false;
      document.getElementById("associationForm").style.display='none';
    }
  }

  onItemChange(eventTypePersonne:any){
    this.typePersonne=eventTypePersonne.value;
  }


  onSubmitPersonne(personneForm:NgForm){
    
    this.personne=new Personne(personneForm.value.mCin,personneForm.value.mNom,personneForm.value.mPrenom,personneForm.value.mAdresse,personneForm.value.mTelephone,personneForm.value.mUsername,personneForm.value.mPassword,this.mImage,this.typePersonne,null);

    if(this.isAssociator===true) {
      const libelle=this.generateRandomString(5);
      this.personne.setAssociation(new Association(libelle,personneForm.value.mNomAssociation,personneForm.value.mAdresseLocale,personneForm.value.mCin));
    }
    console.log(this.personne);
    //console.log("value of form :"+personneForm.value.typePersonne);
    
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
 
 public getFileName(event:any){
    this.mImage=event.files[0].path;
 }

 //fie uploading functions...
 //Next we define selectFile() method. It helps us to get the selected Files.

public selectFile(event) {
  this.selectedFiles = event.target.files;
}

//Next we define upload() method for upload file:

public upload() {
  this.progress = 0;

  this.currentFile = this.selectedFiles.item(0);
  this.uploadService.upload(this.currentFile).subscribe(
    event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        this.message = event.body.message;
        this.fileInfos = this.uploadService.getFiles();
      }
    },
    err => {
      this.progress = 0;
      this.message = 'Could not upload the file!';
      this.currentFile = undefined;
    });

  this.selectedFiles = undefined;
}

}
