'use strict';

var app = angular.module('auxFeatures');

app.directive('nodeDetail', function () {
    return {
      restrict: 'A',
      replace: false,
      scope: {
            identity: '=',
            templatestate: '='
      },
      controller: 'nodeDetailsCtrl',
      templateUrl: '/views/partials/node-detail.html'
    };
});
