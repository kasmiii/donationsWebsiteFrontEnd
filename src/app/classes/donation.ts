import { Association } from './association';
import { Personne } from './personne';
import { Affectation } from './affectation';
import { Objet } from './objet';

export class Donation {

    constructor(
        public affectation:Affectation ,
        public objet:Objet,
        public  personne:Personne,
        public  association:Association
    ){}
}
