define([
  'underscore'
], function (_) {
  
  var ProjectListController = function($scope, $http, $routeParams) {
    $http.get('/projects.json').success(function (data) {
      var projects = data;
      if ($routeParams.tag) {
        projects = _.filter(data, function (item) {
          return _.contains(item.tags, $routeParams.tag);
        });
      }

      $scope.projects = projects;

    });
  }

  return ProjectListController;

});