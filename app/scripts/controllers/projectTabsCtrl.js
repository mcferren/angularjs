'use strict';

var app = angular.module('myapp');

app.controller('projectTabsCtrl', ['$scope',
        function ($scope) {

          // data - - - do you want everything delivered when project is collapsed or one tab at a time?
          $scope.head = {
              filename: "File Name",
              size: "Size",
              type: "Type",
              status: "Status",
              date: "Date Archived",
              instance: "Orion Instance"
          };

          $scope.body = [{
              filename: "2394820",
              size: "55KB",
              type: "PDF",
              status: "HOLD",
              date: "4299978924567",
              instance: "US3453561"
          }, {
              filename: "2384023",
              size: "83KB",
              type: "PDF",
              status: "HOLD",
              date: "4199978924567",
              instance: "US3453562"
          }, {
              filename: "30293849",
              size: "13KB",
              type: "PDF",
              status: "DESTROY",
              date: "3999978924567",
              instance: "US3453563"
          }, {
              filename: "2394820",
              size: "47KB",
              type: "PDF",
              status: "HOLD",
              date: "3899978924567",
              instance: "US3453564"
          }, {
              filename: "2384023",
              size: "34KB",
              type: "PDF",
              status: "HOLD",
              date: "3799978924567",
              instance: "US3453565"
          }, {
              filename: "30293849",
              size: "13KB",
              type: "PDF",
              status: "DESTROY",
              date: "3699978924567",
              instance: "US3453566"
          }, {
              filename: "2394820",
              size: "47KB",
              type: "PDF",
              status: "HOLD",
              date: "3599978924567",
              instance: "US3453567"
          }, {
              filename: "2384023",
              size: "34KB",
              type: "PDF",
              status: "HOLD",
              date: "3499978924567",
              instance: "US3453568"
          }, {
              filename: "2384023",
              size: "83KB",
              type: "PDF",
              status: "HOLD",
              date: "3399978924567",
              instance: "US3453569"
          }, {
              filename: "30293849",
              size: "13KB",
              type: "PDF",
              status: "DESTROY",
              date: "3299978924567",
              instance: "US3453560"
          }, {
              filename: "2394820",
              size: "47KB",
              type: "PDF",
              status: "HOLD",
              date: "3199978924567",
              instance: "US3453561"
          }, {
              filename: "2384023",
              size: "34KB",
              type: "PDF",
              status: "HOLD",
              date: "2999978924567",
              instance: "US3453562"
          }, {
              filename: "30293849",
              size: "13KB",
              type: "PDF",
              status: "DESTROY",
              date: "2899978924567",
              instance: "US3453563"
          }, {
              filename: "2394820",
              size: "47KB",
              type: "PDF",
              status: "HOLD",
              date: "2799978924567",
              instance: "US3453356"
          }, {
              filename: "23840234",
              size: "34KB",
              type: "PDF",
              status: "HOLD",
              date: "2699978924567",
              instance: "US3453563"
          }, {
              filename: "2384023",
              size: "83KB",
              type: "PDF",
              status: "HOLD",
              date: "2599978924567",
              instance: "US3453565"
          }, {
              filename: "30293849",
              size: "13KB",
              type: "PDF",
              status: "DESTROY",
              date: "2499978924567",
              instance: "US3453566"
          }, {
              filename: "2394820",
              size: "47KB",
              type: "PDF",
              status: "HOLD",
              date: "2399978924567",
              instance: "US3453567"
          }, {
              filename: "2384023",
              size: "34KB",
              type: "PDF",
              status: "",
              date: "2299978924567",
              instance: "US3453568"
          }, {
              filename: "30293849",
              size: "13KB",
              type: "PDF",
              status: "DESTROY",
              date: "1299978924567",
              instance: "US3453569"
          }, {
              filename: "2394820",
              size: "47KB",
              type: "PDF",
              status: "HOLD",
              date: "9199978924567",
              instance: "US3453560"
          }, {
              filename: "2384023",
              size: "34KB",
              type: "PDF",
              status: "",
              date: "8199978924567",
              instance: "US3453561"
          }, {
              filename: "2384023",
              size: "83KB",
              type: "PDF",
              status: "",
              date: "7199978924567",
              instance: "US3453562"
          }, {
              filename: "30293849",
              size: "13KB",
              type: "PDF",
              status: "DESTROY",
              date: "6199978924567",
              instance: "US3453563"
          }, {
              filename: "2394820",
              size: "47KB",
              type: "PDF",
              status: "HOLD",
              date: "5199978924567",
              instance: "US3453564"
          }, {
              filename: "2384023",
              size: "34KB",
              type: "PDF",
              status: "",
              date: "4199978924567",
              instance: "US3453565"
          }, {
              filename: "30293849",
              size: "13KB",
              type: "PDF",
              status: "DESTROY",
              date: "3199978924567",
              instance: "US3453566"
          }, {
              filename: "2394820",
              size: "47KB",
              type: "PDF",
              status: "HOLD",
              date: "2199978924567",
              instance: "US3453567"
          }, {
              filename: "2384023",
              size: "34KB",
              type: "PDF",
              status: "",
              date: "1199978924567",
              instance: "US3453568"
          }]


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