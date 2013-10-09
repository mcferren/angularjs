'use strict';

var app = angular.module('myapp');

app.controller('projectsCtrl', ['$scope', 'Reddit',
        function ($scope, Reddit) {

    $scope.reddit = new Reddit();

	$scope.projectList = [
		{
			name: "Fixed Income",
			serialNumber: "82930048327",
			isFavorite:true
		}, {
			name: "Student Loan",
			serialNumber: "82930048327",
			isFavorite:true
		}, {
			name: "Mortgage",
			serialNumber: "82930048327",
			isFavorite:true
		}, {
			name: "Human Resources",
			serialNumber: "82930048327",
			isFavorite:false
		}, {
			name: "Estate Planning",
			serialNumber: "82930048327",
			isFavorite:false
		}, {
			name: "Account Agreement",
			serialNumber: "82930048327",
			isFavorite:false
		}, {
			name: "Bank Examination",
			serialNumber: "82930048327",
			isFavorite:false
		}, {
			name: "Foreign Transaction Fees",
			serialNumber: "82930048327",
			isFavorite:false
		}, {
			name: "Payday Loans",
			serialNumber: "82930048327",
			isFavorite:false
		}, {
			name: "Money Market Fund",
			serialNumber: "82930048327",
			isFavorite:false
		}, {
			name: "Home Equity Loan",
			serialNumber: "82930048327",
			isFavorite:false
		}, {
			name: "Uncollected Funds",
			serialNumber: "82930048327",
			isFavorite:false
		}, {
			name: "National Bank Examiner",
			serialNumber: "82930048327",
			isFavorite:false
		}, {
			name: "Account History",
			serialNumber: "82930048327",
			isFavorite:false
		}, {
			name: "Revolving Credit",
			serialNumber: "82930048327",
			isFavorite:false
		}, {
			name: "Credit Application",
			serialNumber: "82930048327",
			isFavorite:false
		}, {
			name: "Canceled Checks",
			serialNumber: "82930048327",
			isFavorite:false
		}, {
			name: "Federal Reserve System",
			serialNumber: "82930048327",
			isFavorite:false
		}, {
			name: "Loan Contract",
			serialNumber: "82930048327",
			isFavorite:false
		}
	];

	//$scope.projectToolsShow = false;

    $scope.images = [1, 2, 3, 4, 5, 6, 7, 8];

	$scope.loadMore = function() {
		var last = $scope.images[$scope.images.length - 1];
		for(var i = 1; i <= 8; i++) {
		  $scope.images.push(last + i);
		}
	};
	
  }]);

