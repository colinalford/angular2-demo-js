(function (app) {

    app.Models = app.Models || {};

    var Contract = function (obj) {
        this.id = obj.id || null;
        this.description = obj.description || null;
        this.solicitation = obj.solicitation || null;
        this.agency = obj.agency || null;
        this.office = obj.office || null;
        this.location = obj.location || null;
        this.synopsis = obj.synopsis || null;
    }

    app.Models.Contract = Contract;


})(window.app || (window.app = {}));