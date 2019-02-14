class Sejour {
    constructor(private _nom:string, private _prix:number){
    }

    public getNom():string{
        return this._nom;
    }

    public getPrix():number{
        return this._prix;
    }
}

class SejourService {
    private sej:Sejour[];
    constructor(){
        this.sej = [];
        this.sej.push(new Sejour('sej1', 100));
        this.sej.push(new Sejour('sej2', 200));
        this.sej.push(new Sejour('sej3', 300));
    }

    public getSejourByName(name:string):Sejour | void{
        let found : boolean = false;
        this.sej.forEach(function(element){
            if(element.getNom() === name){
                console.log(element);
                found = true;
                return element;          
            }
        });
        if(found === false){
            console.log("Nom introuvable");
        }
    }
}

let sejService = new SejourService();
sejService.getSejourByName('sej1');