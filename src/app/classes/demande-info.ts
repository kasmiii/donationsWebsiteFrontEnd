import { Objet } from './objet';
import { Machine } from './machine';
import { Vetement } from './vetement';
import { Livre } from './livre';
import { Demande } from './demande';
import { Personne } from './personne';

export class DemandeInfo {

    constructor(
    public type:string,
    public objet:Objet,
    public  machine:Machine,
    public  vetement:Vetement,
    public  livre:Livre,
    public demande:Demande,
    public personne:Personne
    ){}
}
