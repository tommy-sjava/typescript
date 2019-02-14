"use strict";
var Sejour = /** @class */ (function () {
    function Sejour(_nom, _prix) {
        this._nom = _nom;
        this._prix = _prix;
    }
    Object.defineProperty(Sejour.prototype, "nom", {
        get: function () {
            return this._nom;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sejour.prototype, "prix", {
        get: function () {
            return this._prix;
        },
        enumerable: true,
        configurable: true
    });
    return Sejour;
}());
var SejourService = /** @class */ (function () {
    function SejourService() {
        this._sejour = [];
        this._sejour.push(new Sejour('Brest', 50));
        this._sejour.push(new Sejour('Rennes', 60));
        this._sejour.push(new Sejour('Nantes', 70));
    }
    SejourService.prototype.searchSejour = function (nom) {
        return this._sejour.find(function (s) { return s.nom.includes(nom); });
    };
    return SejourService;
}());
var sejourService = new SejourService();
console.log(sejourService.searchSejour('Brest'));
