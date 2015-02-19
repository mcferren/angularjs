'use strict';

var app = angular.module('myapp');

app.controller('editTabCtrl', ['$scope',
    function ($scope) {


        $scope.submit = function(){
       
            alert("bang");
        };
	
  }]);

