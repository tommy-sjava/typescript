"use strict";
var Sejour = /** @class */ (function () {
    function Sejour(_nom, _prix) {
        this._nom = _nom;
        this._prix = _prix;
    }
    Sejour.prototype.getNom = function () {
        return this._nom;
    };
    Sejour.prototype.getPrix = function () {
        return this._prix;
    };
    return Sejour;
}());
var SejourService = /** @class */ (function () {
    function SejourService() {
        this._sejour = []; // initialisation du tableau de séjours avant de le remplir
        var sejour1 = new Sejour('Tokyo', 5850); // création des objets, soit des séjours
        var sejour2 = new Sejour('Bangkok', 1530);
        var sejour3 = new Sejour('Amsterdam', 250);
        this._sejour.push(sejour1); // on met les objets dans le tableau
        this._sejour.push(sejour2);
        this._sejour.push(sejour3);
    }
    SejourService.prototype.getSejourByName = function (nom) {
        var found = false; // on initialise un boolean 
        this._sejour.forEach(function (element) {
            if (element.getNom() === nom) { // element est un objet de type sejour
                console.log(element); // on affiche ce que l'on trouve
                found = true; // alors found sera 'true' donc un seul = ; on lui change sa valeur
                return element; // on le retourne
            }
        });
        if (found === false) { // si found toujours false alors message suivant à afficher 
            console.log('Séjour introuvable.');
        }
    };
    return SejourService;
}());
var sejService = new SejourService();
sejService.getSejourByName('Tokyo');
