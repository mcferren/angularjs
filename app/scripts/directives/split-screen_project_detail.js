'use strict';

var app = angular.module('auxFeatures');

app.directive('splitscreenProjectdetail', function () {
    return {
      restrict: 'A',
      replace: false,
      transclude: true,
      // data - - - do you want everything delivered 
      // when project is collapsed or one tab at a time?
      //scope: true,
      //controller: 'projectDetailCtrl', 
      scope: true,
      controller: function($scope) {

          /* To later use ng-repeat instead
          $scope.tablist = ['discovered', 'archived', 'expired', 'destroyed', 'configuration'];
          $scope.selection = $scope.tablist[4];
          */
          
          $scope.tabs = ['discoveredd', 'archivedd', 'expiredd', 'destroyedd', 'editt','configurationn'];
          $scope.selection = $scope.tabs[5];
          $scope.collapseIsClosed = true;
          $scope.changeCollapseState = function() {
              $scope.collapseIsClosed = !$scope.collapseIsClosed;
          }

      },
      templateUrl: '/views/partials/split-screen-project-detail.html'
    };
});
