'use strict';

var app = angular.module('myapp');

app.controller('tableTabCtrl', ['$scope', 'staticapi', '$log',
        function ($scope, staticapi, $log) {


          $scope.getTabByID = function() {
            staticapi.get("tabs/" + $scope.matryoshkanode.selection.id).
            success(function(data, status, headers, config) {

                $scope.returnFieldList = [];

                $scope.tabDataObject = data;

                for(var key in $scope.tabDataObject.columnNames) {
                    $scope.returnFieldList.push(key);
                }

            }).
            error(function(data, status, headers, config) {
                alert("HTTP ERROR "+status);
            });

          }();


          $scope.nestedChangeSidebarState = function() {
            $scope.matryoshkatemplate.sidebarState = !$scope.matryoshkatemplate.sidebarState;
          }


          /* sort variable */
          $scope.sortCriteria = '-filename';
          $scope.reverse = false;

          $scope.changeSort = function(sortC) {
              $scope.sortCriteria = sortC;
              $scope.reverse = !$scope.reverse;
          }


          /* auto-scroll variables and method */
          $scope.bunk = [1, 2, 3, 4, 5, 6, 7, 8];

          $scope.loadingMore = function() {
            var last = $scope.bunk[$scope.bunk.length - 1];
            for(var i = 1; i <= 4; i++) {
              $scope.bunk.push(last + i);
            }
          };


  }]);