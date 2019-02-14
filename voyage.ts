
class  Sejour {

    constructor(private _nom:string, private _prix:number){
    }


    public getNom():string { // on écrit en typescript donc on écrit plus comme en java
        return this._nom;
    }

    public getPrix():number {
        return this._prix;
    }

}

class SejourService {

    private _sejour:Sejour[];

    constructor(){

        this._sejour = []; // initialisation du tableau de séjours avant de le remplir
        let sejour1 = new Sejour('Tokyo', 5850); // création des objets, soit des séjours
        let sejour2 = new Sejour('Bangkok', 1530);
        let sejour3 = new Sejour('Amsterdam', 250);


        this._sejour.push(sejour1); // on met les objets dans le tableau
        this._sejour.push(sejour2);
        this._sejour.push(sejour3);


    }

    public getSejourByName(nom:string):Sejour | void{ // méthode qui prend en paramètre un nom de type string et qui soit retourne le sejour qui correspond au nom soit rien

        let found : boolean = false; // on initialise un boolean 
        this._sejour.forEach(function(element){ // on fait un foreach afin d'analyser chaque élément de mon tableau. element correspondant à chacun de ces séjours
        if(element.getNom() === nom ){ // element est un objet de type sejour
            console.log(element); // on affiche ce que l'on trouve
            found = true; // alors found sera 'true' donc un seul = ; on lui change sa valeur
            return element; // on le retourne
        } 
    });
        if(found === false){ // si found toujours false alors message suivant à afficher 
            console.log('Séjour introuvable.')
        }

    }

}
    let sejService = new SejourService();
    sejService.getSejourByName('Tokyo');


