'use strict';

var app = angular.module('auxFeatures');

app.directive('minicolumnTab', function () {
    return {
      restrict: 'C',
      replace: false,
      scope: {
            matryoshkanode: '=',
            matryoshkatemplate: '='
      },
      controller: 'minicolumnTabCtrl',
      templateUrl: '/views/partials/tabSlides/minicolumn-tab.html',
      link: function(scope, element, attrs) {

      }
    };
});