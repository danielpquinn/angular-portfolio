define([
  'underscore'
], function (_) {

  var ProjectDetailController = function ($scope, $routeParams, $http, $sce) {
    $http.get('/projects.json').success(function (data) {
      var project = _.findWhere(data, {slug: $routeParams.slug});
      $scope.project = project;
      $scope.description = $sce.trustAsHtml(project.description);
    });
  }

  return ProjectDetailController;

});