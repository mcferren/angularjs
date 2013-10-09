'use strict';

var app = angular.module('myapp');

app.controller('scrollCtrl', ['$scope',
        function ($scope) {

          $scope.someArray = [1, 2, 3];

          $scope.addItem = function() {
              var arrayLength = $scope.someArray.length;
              var nextValue = arrayLength > 0 ? $scope.someArray[arrayLength - 1] + 1 : 1;
              $scope.someArray.push(nextValue);
          };

          $scope.removeItem = function() {
              if ($scope.someArray.length) { $scope.someArray.pop(); }
          }

  }]);