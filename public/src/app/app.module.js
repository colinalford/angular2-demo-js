(function (app) {
    var BrowserModule = ng.platformBrowser.BrowserModule;
    var NgModule = ng.core.NgModule;
    var FormsModule = ng.forms.FormsModule;
    var HttpModule = ng.http.HttpModule;
    var RouterModule = ng.router.RouterModule;


    var AppComponent = app.AppComponent;
    var ContractDetailComponent = app.ContractDetailComponent;
    var AddContractComponent = app.AddContractComponent;
    var ContractsComponent = app.ContractsComponent;
    var NotFoundComponent = app.NotFoundComponent;

    var ContractsService = app.Services.Contracts;

    app.Module = NgModule({
        declarations: [
            AppComponent,
            ContractDetailComponent,
            ContractsComponent,
        ],
        imports: [
            BrowserModule,
            FormsModule,
            HttpModule,
            RouterModule.forRoot([
                { path: 'add', component: AddContractComponent },
                { path: 'contract/:id', component: ContractDetailComponent },
                { path: 'contract', component: ContractsComponent},
                { path: '', component: ContractsComponent },
            ])
        ],
        providers: [],
        bootstrap: [AppComponent]
    })
    .Class({
        constructor: [function(){}]
    })

})(window.app || (window.app = {})); 
