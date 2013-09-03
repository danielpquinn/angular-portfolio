define([
  'jquery',
  'angular',
  'controllers/staticPageController',
  'controllers/projectListController',
  'controllers/projectDetailController',
  'directives/equalHeight',
  'directives/toggle',
  'angularAnimate',
  'angularRoute'
], function ($, angular, StaticPageController, ProjectListController, ProjectDetailController, EqualHeight, Toggle) {

  "use strict";

  function App() {}

  var a = App.prototype;

  a.initialize = function () {

    this.$content = $('#content');
    this.$window = $(window);

    this.portfolio = angular.module('portfolio', ['ngRoute', 'ngAnimate']).config([
      '$routeProvider',
      '$locationProvider',
      function ($routeProvider, $locationProvider) {

        $locationProvider.html5Mode(true);

        $routeProvider.when('/', {
          templateUrl: '/partials/home.html',
          controller: ProjectListController
        }).when('/work', {
          templateUrl: '/partials/project-list.html',
          controller: ProjectListController
        }).when('/tag/:tag', {
          templateUrl: '/partials/project-list.html',
          controller: ProjectListController
        }).when('/work/:slug', {
          templateUrl: '/partials/project-detail.html',
          controller: ProjectDetailController
        }).when('/about', {
          templateUrl: '/partials/about.html',
          controller: StaticPageController
        }).when('/contact', {
          templateUrl: '/partials/contact.html',
          controller: StaticPageController
        }).when('/resume', {
          templateUrl: '/partials/resume.html',
          controller: StaticPageController
        }).otherwise({
          redirectTo: '/'
        });

      }

    ]);

    this.portfolio.directive('equalHeight', EqualHeight);
    this.portfolio.directive('toggle', Toggle);

    angular.bootstrap(document, ['portfolio']);

    $('body').css({
      'opacity': 1
    });
  }

  a.bindEvents = function () {
    var self = this;

    self.$window.on('resize', self.onWindowResize.apply(self, arguments));
  };

  a.onWindowResize = function () {
    this.$content.css({ 'min-height' : this.$window.height() - this.$content.offset().top + 'px' });
  };

  return App;

});