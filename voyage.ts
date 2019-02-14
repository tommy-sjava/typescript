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
        this._sejour.push(new Sejour('Paris', 500));
        this._sejour.push(new Sejour('Orléans', 100));
        this._sejour.push(new Sejour('Toyko', 800));
    }

    public getSejourByNom(nom: string): Sejour | void {
        for (let elem of this._sejour) {
            if (elem.getNom() == nom) {
                return elem;
            }
        }
        return undefined;
    }

    public getListeSejour(): Sejour[] {
        return this._sejour;
    }
}

let listeSejour = new SejourService();
console.log(listeSejour.getSejourByNom('Orléans'));