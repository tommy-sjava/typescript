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
        this.sejours = [];
        this.sejours.push(new Sejour('Paris', 200));
        this.sejours.push(new Sejour('Bordeaux', 100));
        this.sejours.push(new Sejour('Marseille', 150));
        this.sejours.push(new Sejour('Lille', 300));
    }
    SejourService.prototype.findSejourByName = function (name) {
        var trip;
        this.sejours.forEach(function (element) {
            if (element.nom.includes(name)) {
                trip = element;
            }
        });
        return trip;
    };
    return SejourService;
}());
var sejourService = new SejourService();
console.log(sejourService.findSejourByName('Paris'));
