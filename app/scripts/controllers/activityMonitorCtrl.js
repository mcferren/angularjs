'use strict';

var app = angular.module('myapp');

app.controller('activityMonitorCtrl', ['$scope', 'staticapi', 
        function ($scope, staticapi) {

    var getNodes = function() {

        staticapi.get( "menus/activeinformationlist").
            success(function(data, status, headers, config) {
                $scope.activeInfoList = data.results;
            }).
            error(function(data, status, headers, config) {
                alert("HTTP ERROR "+status);
            });
    }();

    $scope.images = [1, 2, 3, 4, 5, 6, 7, 8];

	$scope.loadMore = function() {
		var last = $scope.images[$scope.images.length - 1];
		for(var i = 1; i <= 4; i++) {
		  $scope.images.push(last + i);
		}
	};
	
  }]);

