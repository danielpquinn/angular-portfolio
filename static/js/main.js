require.config({
  paths: {
    'jquery': 'components/jquery/jquery',
    'underscore': 'components/underscore/underscore',
    'angular': 'components/angular/angular',
    'angularAnimate': 'components/angular-animate/angular-animate',
    'angularRoute': 'components/angular-route/angular-route'
  },
  shim: {
    'angular': {
      'exports': 'angular'
    },
    'angularAnimate': ['angular'],
    'angularRoute': ['angular'],
    'underscore': {
      'exports': '_'
    }
  }
});

require([
  'angular',
  'app'
], function (angular, App) {
  
  var app = new App();

  app.initialize();

  app.bindEvents();

  window.APP = app;

});