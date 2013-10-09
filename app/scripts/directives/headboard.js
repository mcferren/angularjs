'use strict';

var app = angular.module('auxFeatures');

app.directive('headBoard', function () {
    return {
      restrict: 'A',
      transclude: true,
      scope: { status:'=sidebarStatus' },
      templateUrl: '/views/partials/headboard.html'
    };
});

    