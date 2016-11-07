(function (app) {

    var Contract = app.Models.Contract;
    var ContractsService = app.Services.Contracts;
    var Router = ng.router.Router;

    app.ContractsComponent =
        ng.core.Component({
            selector: 'contracts',
            templateUrl: './contracts.component.html',
            styleUrls: ['./contracts.component.css'],
        })
        .Class({
            constructor: [ Router, function( Router) {
                this.contractsService = contractsService;
                this.router = router;

                this.title = 'Contracts';
            }],

            ngOnInit: function() {
                this.getContracts();
            },

            getContracts: function() {
                this.contracts = this.contractsService.getContracts();
            },
            
            viewContracts: function() {
                this.router.navigateByUrl('/contract/' + contractId);
            }
        });

})(window.app || (window.app = {}));