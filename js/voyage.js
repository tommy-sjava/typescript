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
        this._sejour = [];
        this._sejour.push(new Sejour('Paris', 200));
        this._sejour.push(new Sejour('Montpellier', 100));
        this._sejour.push(new Sejour('Bamako', 800));
    }
    SejourService.prototype.getSejourByName = function (nom) {
        for (var _i = 0, _a = this._sejour; _i < _a.length; _i++) {
            var elem = _a[_i];
            if (elem.getNom() == nom) {
                return elem;
            }
        }
        return undefined;
    };
    return SejourService;
}());
var resultat = new SejourService();
console.log(resultat.getSejourByName('Montpellier'));
