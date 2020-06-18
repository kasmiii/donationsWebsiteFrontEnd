import { Association } from './association';

export class Personne {
    constructor(
        public mCin:string,
        public mNom:string,
        public mPrenom:string, 
        public mAdresse:string,
        public mTelephone:string,
        public mUsername:string,
        public mPassword:string,
        public mImage:string,
        public mType:string,
        public mAssociation:Association
    ){}

     setAssociation(association:Association):void {
        this.mAssociation=association;
    }

     getAssociation():Association{
        return this.mAssociation;
    }

}