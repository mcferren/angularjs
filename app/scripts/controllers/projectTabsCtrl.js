'use strict';

var app = angular.module('myapp');

app.controller('projectTabsCtrl', ['$scope',
        function ($scope) {

          // data - - - do you want everything delivered when project is collapsed or one tab at a time?
          $scope.head = {
              filename: "File Name",
              size: "Size",
              type: "Type",
              status: "Status"
          };

          $scope.body = [{
              filename: "2394820",
              size: "55KB",
              type: "PDF",
              status: "HOLD"
          }, {
              filename: "2384023",
              size: "83KB",
              type: "PDF",
              status: ""
          }, {
              filename: "30293849",
              size: "13KB",
              type: "PDF",
              status: "DESTROY"
          }, {
              filename: "2394820",
              size: "47KB",
              type: "PDF",
              status: "HOLD"
          }, {
              filename: "2384023",
              size: "34KB",
              type: "PDF",
              status: ""
          }, {
              filename: "30293849",
              size: "13KB",
              type: "PDF",
              status: "DESTROY"
          }, {
              filename: "2394820",
              size: "47KB",
              type: "PDF",
              status: "HOLD"
          }, {
              filename: "2384023",
              size: "34KB",
              type: "PDF",
              status: ""
          }]


          /* sort variable */
          $scope.predicate = '-filename';


          /* auto-scroll variables and method */
          $scope.bunk = [1, 2, 3, 4, 5, 6, 7, 8];

          $scope.loadingMore = function() {
            var last = $scope.bunk[$scope.bunk.length - 1];
            for(var i = 1; i <= 4; i++) {
              $scope.bunk.push(last + i);
            }
          };

  }]);