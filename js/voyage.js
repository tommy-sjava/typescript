"use strict";
// Créer une classe Sejour avec les propriétés privées suivantes :
// nom (string)
// prix (number)
// Ajouter des getters permettant d'accéder aux propriétés privées.
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
// Créer une classe SejourService qui possède une propriété privée de type Sejour[];
// Dans le constructeur de la classe SejourService, initialiser la propriété Sejour[] avec plusieurs objets de type Sejour.
// Dans la classe SejourService, ajouter une méthode de recherche de séjour par nom :
// le service prend en paramètre un nom de type string
// le service a un type retour Sejour.
// Créer une instance de la classe SejourService, invoquer la méthode de recherche créée et afficher le résultat dans la console.
var SejourService = /** @class */ (function () {
    function SejourService() {
        this._sejours = new Array();
        this._sejours.push(new Sejour("Paris", 100));
        this._sejours.push(new Sejour("Vannes", 75));
    }
    SejourService.prototype.getSejourByName = function (nameToFind) {
        for (var _i = 0, _a = this._sejours; _i < _a.length; _i++) {
            var sejour = _a[_i];
            if (sejour.getNom() === nameToFind) {
                return sejour;
            }
        }
        return "Trip not found";
    };
    return SejourService;
}());
var ss = new SejourService();
console.log(ss.getSejourByName("Paris"));
