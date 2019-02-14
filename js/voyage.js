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
        this._sejour.push(new Sejour('Paris', 500));
        this._sejour.push(new Sejour('Orléans', 100));
        this._sejour.push(new Sejour('Toyko', 800));
    }
    SejourService.prototype.getSejourByNom = function (nom) {
        for (var _i = 0, _a = this._sejour; _i < _a.length; _i++) {
            var elem = _a[_i];
            if (elem.getNom() == nom) {
                return elem;
            }
        }
        return undefined;
    };
    SejourService.prototype.getListeSejour = function () {
        return this._sejour;
    };
    return SejourService;
}());
var listeSejour = new SejourService();
console.log(listeSejour.getSejourByNom('Orléans'));
