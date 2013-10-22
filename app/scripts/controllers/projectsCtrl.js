'use strict';

var app = angular.module('myapp');

app.controller('projectsCtrl', ['$scope',
        function ($scope) {

	$scope.projectList = [
		{
			title: "Fixed Income",
			serialNumber: "829300483271",
			isFavorite:true
		}, {
			title: "Student Loan",
			serialNumber: "829300483272",
			isFavorite:true
		}, {
			title: "Mortgage",
			serialNumber: "829300483273",
			isFavorite:true
		}, {
			title: "Human Resources",
			serialNumber: "829300483274",
			isFavorite:false
		}, {
			title: "Estate Planning",
			serialNumber: "829300483275",
			isFavorite:false
		}, {
			title: "Account Agreement",
			serialNumber: "829300483276",
			isFavorite:false
		}, {
			title: "Bank Examination",
			serialNumber: "829300483277",
			isFavorite:false
		}, {
			title: "Foreign Transaction Fees",
			serialNumber: "829300483278",
			isFavorite:false
		}, {
			title: "Payday Loans",
			serialNumber: "829300483279",
			isFavorite:false
		}, {
			title: "Money Market Fund",
			serialNumber: "829300483280",
			isFavorite:false
		}, {
			title: "Home Equity Loan",
			serialNumber: "829300483281",
			isFavorite:false
		}, {
			title: "Uncollected Funds",
			serialNumber: "829300483282",
			isFavorite:false
		}, {
			title: "National Bank Examiner",
			serialNumber: "829300483283",
			isFavorite:false
		}, {
			title: "Account History",
			serialNumber: "829300483284",
			isFavorite:false
		}, {
			title: "Revolving Credit",
			serialNumber: "829300483285",
			isFavorite:false
		}, {
			title: "Credit Application",
			serialNumber: "829300483286",
			isFavorite:false
		}, {
			title: "Canceled Checks",
			serialNumber: "829300483287",
			isFavorite:false
		}, {
			title: "Federal Reserve System",
			serialNumber: "829300483288",
			isFavorite:false
		}, {
			title: "Loan Contract",
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

