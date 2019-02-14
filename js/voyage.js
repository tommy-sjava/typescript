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
        this.sej = [];
        this.sej.push(new Sejour('sej1', 100));
        this.sej.push(new Sejour('sej2', 200));
        this.sej.push(new Sejour('sej3', 300));
    }
    SejourService.prototype.getSejourByName = function (name) {
        var found = false;
        this.sej.forEach(function (element) {
            if (element.getNom() === name) {
                console.log(element);
                found = true;
                return element;
            }
        });
        if (found === false) {
            console.log("Nom introuvable");
        }
    };
    return SejourService;
}());
var sejService = new SejourService();
sejService.getSejourByName('sej1');
