import { Association } from '../classes/association';

export interface Personne {
    mCin:string,
     mNom:string,
     mPrenom:string, 
     mAdresse:string,
     mTelephone:string,
     mUsername:string,
     mPassword:string,
     mImage:string,
     mType:string,
     mAssociation:Association
}
