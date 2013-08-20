define([
  'underscore'
], function (_) {

  var ProjectDetailController = function ($scope, $routeParams, $http) {
    $http.get('/projects.json').success(function (data) {
      $scope.project = _.findWhere(data, {slug: $routeParams.slug});
    });
  }

  return ProjectDetailController;

});