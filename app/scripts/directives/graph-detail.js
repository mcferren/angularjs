'use strict';

var app = angular.module('auxFeatures');

app.directive('graphDetail', function () {
    return {
      restrict: 'A',
      replace: false,
      transclude: true,
      scope: { gid:'@graphid' },
      controller: function($scope) {
          
          //$scope.graphTypes = ['lineofbiz', 'projectsbyregion', 'storagesaves', 'systemstatus'];
          //$scope.graphSelection = $scope.graphTypes[0];
          //$scope.graphID;

      },
      templateUrl: '/views/partials/graph-detail.html'
    };
});