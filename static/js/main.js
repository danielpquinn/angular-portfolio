require.config({
  paths: {
    "jquery": "components/jquery/jquery",
    "underscore": "components/underscore/underscore",
    "angular": "components/angular/angular"
  },
  shim: {
    "angular": {
      "exports": "angular"
    },
    "underscore": {
      "exports": "_"
    }
  }
});

require([
  'app'
], function (App) {
  
  var app = new App();

  app.initialize();

  app.bindEvents();

  window.APP = app;

});