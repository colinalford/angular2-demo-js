(function (app) {

    var Router = ng.router.Router;
    var ActivatedRoute = ng.router.ActivatedRoute;
    var Contract = app.Models.Contract;
    var ContractsService = app.Services.Contracts

    app.ContractDetailComponent = 
        ng.core.Component({
            selector: 'contract-detail',
            templateUrl: './contract-detail.component.html',
            styleUrls: ['./contract-detail.component.css']
        })
        .Class({
            constructor: [Router, ActivatedRoute, function(router, route) {
                this.router = router;
                this.route = route;
                this.contractsService = contractsService;
            }],

            ngOnInit: function() {
                this.subscription = this.route.params.subscribe( params => {
                    var id = Number.parseInt(parms['id']);
                    this.getContract(id);
                    if (!this.contract) {
                        this.router.navigate(['']);
                    }
                });
            },

            getContract(id) {
                var contracts = this.contractsService.getContracts();
                this.contract = contracts[id-1] || null;
            }
        })
    
})(window.app || (window.app = {}));
