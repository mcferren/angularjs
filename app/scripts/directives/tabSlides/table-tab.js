'use strict';

var app = angular.module('auxFeatures');

app.directive('tableTab', function () {
    return {
      restrict: 'C',
      replace: false,
      scope: {
            matryoshkanode: '=',
            matryoshkatemplate: '='
      },
      controller: 'tableTabCtrl', 
      templateUrl: '/views/partials/tabSlides/table-tab.html'
    };
});