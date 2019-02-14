class Sejour {
    constructor(private _nom: string, private _prix: number) {

    }
    public getNom(): string {
        return this._nom;
    }
    public getPrix(): number {
        return this._prix;
    }

}

class SejourService {
    private _sejour: Sejour[];
    constructor() {
        this._sejour = [];
        this._sejour.push(new Sejour('Paris', 200));
        this._sejour.push(new Sejour('Montpellier', 100));
        this._sejour.push(new Sejour('Bamako', 800));
    }
    public getSejourByName(nom: string): Sejour | void {
        for (let elem of this._sejour) {
            if (elem.getNom() == nom) {
                return elem;
            }

        }
        return undefined;
    }
}

let resultat = new SejourService();
console.log(resultat.getSejourByName('Montpellier'))