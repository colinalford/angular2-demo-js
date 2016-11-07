(function(app) {

  var Module = app.Module;

  document.addEventListener('DOMContentLoaded', function() {
    ng.platformBrowserDynamic
      .platformBrowserDynamic()
      .bootstrapModule(Module);
  });
})(window.app || (window.app = {}));
