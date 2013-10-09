'use strict';

var app = angular.module('auxFeatures');

app.directive('discoveredTab', function () {
    return {
      restrict: 'A',
      replace: false,
      // data - - - do you want everything delivered 
      // when project is collapsed or one tab at a time?
      scope: false,
      controller: 'projectTabsCtrl', 
      templateUrl: '/views/partials/tabSlides/discovered-tab.html'
    };
});
