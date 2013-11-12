'use strict';

var app = angular.module('myapp');

app.controller('detailsTabCtrl', ['$scope', 'staticapi',
    function ($scope, staticapi) {

        var getTabByID = function() {
          staticapi.get("reports/" + $scope.matryoshkareportid).
          success(function(data, status, headers, config) {

            var returnFieldList= [];

            $scope.tabDataObject = data;

            var iterator = 0;
            for(var key in $scope.tabDataObject.columnNames) {
                if (iterator % 3 == 0) returnFieldList.push([]);
                returnFieldList[returnFieldList.length - 1].push(key);
                ++iterator;
            }

            $scope.rowsbycolumn = returnFieldList;

          }).
          error(function(data, status, headers, config) {
              alert("HTTP ERROR "+status);
          });
        }();

         /*
        $scope.$watch('matryoshkanodeobject', function(newVal) {
          $scope.nodeobject = newVal;
        }, true);

        $scope.$watch('matryoshkatabobject', function(newVal) {
          $scope.tabobject = newVal;
        }, true);

        $scope.$watch('matryoshkafieldsetobject', function(newVal) {
          $scope.templateFields = newVal;
        }, true);*/



        
	
  }]);

