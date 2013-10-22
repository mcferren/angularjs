'use strict';

var app = angular.module('myapp');

app.controller('templateCtrl', ['$scope',
        function ($scope) {

    $scope.menuItems = [
      'injestion',
      'explore',
      'governance',
      'settings'
    ];

    $scope.sessionItems = [
      'Account',
      'Logout'
    ];

    $scope.footerItems = [
      '© InfoBelt, LLC',
      'Contact'
    ];

    $scope.sidebarState = true;

    $scope.changeSidebarState = function() {
        $scope.sidebarState = !$scope.sidebarState;
    }

    $scope.helpState = false;

    $scope.submit = function(){
      $scope.text = '';
      $scope.formTest.$setPristine();
    };

  }]);