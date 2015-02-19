'use strict';

var app = angular.module('auxFeatures');

app.directive('detailsTab', function () {
    return {
      restrict: 'C',
      replace: false,
      scope: {
            matryoshkanode: '=',
            matryoshkatemplate: '='
      },
      controller: 'detailsTabCtrl',
      templateUrl: '/views/partials/tabSlides/details-tab.html',
      link: function(scope, element, attrs) {

      }
    };
});