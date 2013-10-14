'use strict';

var app = angular.module('myapp');

app.controller('graphsCtrl', ['$scope',
        function ($scope) {

          $scope.graphList = [
          {
            name: "Line of Business Graph",
            imgurl: "/images/g0.png",
            graphID: "0"
          }, {
            name: "Projects by Region Graph",
            imgurl: "/images/g1.png",
            graphID: "1"
          }, {
            name: "Storage Saves Graph",
            imgurl: "/images/g2.png",
            graphID: "2"
          }, {
            name: "System Status Graph",
            imgurl: "/images/g3.png",
            graphID: "3"
          }];
	
  }]);

