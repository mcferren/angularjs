'use strict';

var app = angular.module('myapp');

app.controller('templateCtrl', ['$scope',
        function ($scope) {

    $scope.menuItems = [
      'projects',
      //'newbrowser',
      'explore',
      'governance',
      'create',
      'configuration'
    ];

    $scope.sessionItems = [
      'Account',
      'Logout'
    ];

    $scope.footerItems = [
      'InfoBelt Website',
      'Contact'
    ];

    $scope.sidebarState = true;

    $scope.helpState = false;

  }]);