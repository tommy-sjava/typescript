"use strict";
var Sejour = /** @class */ (function () {
    function Sejour(_nom, _prix) {
        this._nom = _nom;
        this._prix = _prix;
    }
    Sejour.prototype.getPrix = function () {
        return this._prix;
    };
    Sejour.prototype.getNom = function () {
        return this._nom;
    };
    return Sejour;
}());
//********************************************************************** */
var SejourService = /** @class */ (function () {
    function SejourService() {
        this._sejours = new Array();
        this._sejours.push(new Sejour('Paris', 20));
        this._sejours.push(new Sejour('Nantes', 40));
        this._sejours.push(new Sejour('Montpellier', 60));
    }
    SejourService.prototype.getRechercheSejourParNom = function (nameToFind) {
        for (var _i = 0, _a = this._sejours; _i < _a.length; _i++) {
            var sejour = _a[_i];
            if (sejour.getNom() === nameToFind) {
                return sejour;
            }
        }
        return 'trip not found';
    };
    return SejourService;
}());
var ss = new SejourService();
console.log(ss.getRechercheSejourParNom("Paris"));
