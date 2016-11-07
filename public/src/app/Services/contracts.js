(function (app) {

    app.Services = app.Services || {};

    var Contract = app.Models.Contracts;
    var Contracts = app.Data.Contracts;

    var ContractsService = function() {
        this.getContracts = function() {
            return Contracts
        }
    }

    app.Services.ContractsService = ContractsService;

})(window.app || (window.app = {}))