class Sejour {
    constructor(private _nom: string, private _prix: number) { }

    public get nom(): string {
        return this._nom;
    }
    public get prix(): number {
        return this._prix;
    }
}

class SejourService {
    private _sejour: Sejour[];


    constructor() {
        this._sejour = [];
        this._sejour.push(new Sejour('Brest', 50));
        this._sejour.push(new Sejour('Rennes', 60));
        this._sejour.push(new Sejour('Nantes', 70));
    }

    public searchSejour(nom: string): Sejour | void {
        return this._sejour.find(s => s.nom.includes(nom))
    }
}

let sejourService = new SejourService();
console.log(sejourService.searchSejour('Brest'));