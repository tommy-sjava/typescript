class Sejour {

    constructor(private _nom: string, private _prix: number) {
    }

    public get nom(): string {
        return this._nom;
    }

    public get prix(): number {
        return this._prix;
    }
}

class SejourService {

    private sejours: Sejour[];

    constructor() {

        this.sejours = [];
        this.sejours.push(new Sejour('Paris', 200));
        this.sejours.push(new Sejour('Bordeaux', 100));
        this.sejours.push(new Sejour('Marseille', 150));
        this.sejours.push(new Sejour('Lille', 300));
    }

    public findSejourByName(name: string): Sejour | void {

        let trip;
        this.sejours.forEach(element => {
            if (element.nom.includes(name)) {
                trip = element;
            }
        });
        return trip;
    }
}

let sejourService = new SejourService();
console.log(sejourService.findSejourByName('Paris'));
