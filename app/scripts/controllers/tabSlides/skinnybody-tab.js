'use strict';

var app = angular.module('myapp');

app.controller('skinnybodyTabCtrl', ['$scope', 'staticapi', '$sce',
    function ($scope, staticapi, $sce) {

        var getTabByID = function() {
          staticapi.get("tabs/" + $scope.matryoshkanode.selection.id).
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

            $scope.descriptioncontent = $sce.trustAsHtml(data.rows[0]['description']);

          }).
          error(function(data, status, headers, config) {
              alert("HTTP ERROR "+status);
          });
        }();
  }]);

