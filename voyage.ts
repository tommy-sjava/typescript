class Sejour {
    constructor(private _nom: string, private _prix: number) {



    }
    getPrix(): number {
        return this._prix;
    }

    getNom(): string {
        return this._nom;
    }
}


//********************************************************************** */

class SejourService {

    private _sejours: Array<Sejour> = new Array<Sejour>();
    constructor() {
       this._sejours.push(new Sejour('Paris', 20));
       this._sejours.push(new Sejour('Nantes', 40));
       this._sejours.push(new Sejour('Montpellier', 60));
    }

    getRechercheSejourParNom(nameToFind:string) :any {
        for(let sejour of this._sejours){
            if(sejour.getNom() === nameToFind){
               return sejour;
            }
            
        }
        return 'trip not found';
       
    }
    

}

let ss = new SejourService();
console.log(ss.getRechercheSejourParNom("Paris"));
