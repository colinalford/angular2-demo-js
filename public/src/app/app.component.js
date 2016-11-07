(function (app) {

    app.AppComponent =
        ng.core.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        })
        .Class({
            constructor: [function() {

            }]
        });

})(window.app || (window.app = {})); 