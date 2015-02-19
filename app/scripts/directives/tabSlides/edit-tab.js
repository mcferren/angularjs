'use strict';

var app = angular.module('auxFeatures');

app.directive('editTab', function () {
    return {
      restrict: 'C',
      replace: false,
      scope: {
            matryoshkanodeidentity: '=',
            matryoshkatemplate: '='
      },
      controller: 'editTabCtrl',
      templateUrl: '/views/partials/tabSlides/edit-tab.html'
    };
});