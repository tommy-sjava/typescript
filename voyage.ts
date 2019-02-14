// Créer une classe Sejour avec les propriétés privées suivantes :
// nom (string)
// prix (number)
// Ajouter des getters permettant d'accéder aux propriétés privées.

class Sejour {
    constructor(private _nom: string, private _prix: number) {

    }

    getNom():string{
        return this._nom;
    }

    getPrix():number{
        return this._prix;
    }
}

// Créer une classe SejourService qui possède une propriété privée de type Sejour[];
// Dans le constructeur de la classe SejourService, initialiser la propriété Sejour[] avec plusieurs objets de type Sejour.
// Dans la classe SejourService, ajouter une méthode de recherche de séjour par nom :
// le service prend en paramètre un nom de type string
// le service a un type retour Sejour.
// Créer une instance de la classe SejourService, invoquer la méthode de recherche créée et afficher le résultat dans la console.

class SejourService{

    private _sejours:Array<Sejour> = new Array<Sejour>();

    constructor(){
        this._sejours.push(new Sejour("Paris", 100));
        this._sejours.push(new Sejour("Vannes", 75));
    }

    getSejourByName(nameToFind:string):any{

        for(let sejour of this._sejours){
            if(sejour.getNom() === nameToFind){
                return sejour;
            }
        }
        return "Trip not found";
        
    }
}

let ss = new SejourService();
console.log(ss.getSejourByName("Paris"));