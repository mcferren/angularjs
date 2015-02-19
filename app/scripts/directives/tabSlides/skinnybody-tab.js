'use strict';

var app = angular.module('auxFeatures');

app.directive('skinnybodyTab', function () {
    return {
      restrict: 'C',
      replace: false,
      scope: {
            matryoshkanode: '=',
            matryoshkatemplate: '='
      },
      controller: 'skinnybodyTabCtrl',
      templateUrl: '/views/partials/tabSlides/skinnybody-tab.html',
      link: function(scope, element, attrs) {

      }
    };
});