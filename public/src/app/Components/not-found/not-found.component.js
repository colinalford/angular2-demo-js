(function(app) {

    app.NotFound =
        ng.core.Component({
            selector: 'not-found',
            templateUrl: './not-found.component.html',
            styleUrls: ['./not-found.component.css']
        })
        .Class({
            constructor: [function() {

            }]
        })

})(window.app || (window.app = {}));
