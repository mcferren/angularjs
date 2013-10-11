'use strict';

var app = angular.module('myapp');

app.controller('projectsCtrl', ['$scope', 'Reddit',
        function ($scope, Reddit) {

    $scope.reddit = new Reddit();

	$scope.projectList = [
		{
			name: "Fixed Income",
			serialNumber: "829300483271",
			isFavorite:true
		}, {
			name: "Student Loan",
			serialNumber: "829300483272",
			isFavorite:true
		}, {
			name: "Mortgage",
			serialNumber: "829300483273",
			isFavorite:true
		}, {
			name: "Human Resources",
			serialNumber: "829300483274",
			isFavorite:false
		}, {
			name: "Estate Planning",
			serialNumber: "829300483275",
			isFavorite:false
		}, {
			name: "Account Agreement",
			serialNumber: "829300483276",
			isFavorite:false
		}, {
			name: "Bank Examination",
			serialNumber: "829300483277",
			isFavorite:false
		}, {
			name: "Foreign Transaction Fees",
			serialNumber: "829300483278",
			isFavorite:false
		}, {
			name: "Payday Loans",
			serialNumber: "829300483279",
			isFavorite:false
		}, {
			name: "Money Market Fund",
			serialNumber: "829300483280",
			isFavorite:false
		}, {
			name: "Home Equity Loan",
			serialNumber: "829300483281",
			isFavorite:false
		}, {
			name: "Uncollected Funds",
			serialNumber: "829300483282",
			isFavorite:false
		}, {
			name: "National Bank Examiner",
			serialNumber: "829300483283",
			isFavorite:false
		}, {
			name: "Account History",
			serialNumber: "829300483284",
			isFavorite:false
		}, {
			name: "Revolving Credit",
			serialNumber: "829300483285",
			isFavorite:false
		}, {
			name: "Credit Application",
			serialNumber: "829300483286",
			isFavorite:false
		}, {
			name: "Canceled Checks",
			serialNumber: "829300483287",
			isFavorite:false
		}, {
			name: "Federal Reserve System",
			serialNumber: "829300483288",
			isFavorite:false
		}, {
			name: "Loan Contract",
			serialNumber: "829300483289",
			isFavorite:false
		}
	];

    $scope.images = [1, 2, 3, 4, 5, 6, 7, 8];

	$scope.loadMore = function() {
		var last = $scope.images[$scope.images.length - 1];
		for(var i = 1; i <= 4; i++) {
		  $scope.images.push(last + i);
		}
	};
	
  }]);

