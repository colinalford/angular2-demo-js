(function (app) {

    var FormBuilder = ng.forms.FormBuilder;
    var Router = ng.router.Router;

    app.AddContractComponent = 
        ng.core.Component({
            selector: 'add-contract',
            templateUrl: './add-contract.component.html',
            styleUrls: ['./add-contract.component.css']
        })
        .Class({
            constructor: [FormBuilder, Router, function(formBuilder, router) {
                this.addContractForm = 
                    this.formBuilder.group({
                        description: '',
                        solicitation: '',
                        agency: '',
                        office: '',
                        location: '',
                        synopsis: ''
                    });
                this.router = router;
            }],

            addContract: function(formValues) {
                console.log(formValues);
                this.router.navigate(['']);
            }
        })

})(window.app || (window.app = {}))