'use strict';

var app = angular.module('myapp');

app.controller('activityMonitorCtrl', ['$scope', 'Reddit',
        function ($scope, Reddit) {

    $scope.reddit = new Reddit();

	$scope.activityLogList = [
		 {
			title: "Created destruction set...",
			body: "Created destruction set for 2096 files",
			projectName: "Canceled Checks",
			serialNumber: "829300483287",
			category: "create",
			isOpened: false,
			timestamp: "9997892456789",
			user: "Skyler White"
		},  {
			title: "Created destruction set...",
			body: "Created destruction set for 4403 files",
			projectName: "Credit Application",
			serialNumber: "829300483286",
			category: "create",
			isOpened: false,
			timestamp: "9987892456789",
			user: "Jessen Pinkman"
		}, {
			title: "Searched for .lmao files...",
			body: "Searched for .lmao files",
			projectName: "Revolving Credit",
			serialNumber: "829300483285",
			category: "search",
			isOpened: false,
			timestamp: "9977892456789",
			user: "Mike Ehrmantraut"
		},  {
			title: "Ingested 3044 files...",
			body: "Ingested 3044 files",
			projectName: "Home Equity Loan",
			serialNumber: "829300483281",
			category: "injest",
			isOpened: false,
			timestamp: "9967892456789",
			user: "Walter White"
		},  {
			title: "Created destruction set...",
			body: "Created destruction set for 2096 files",
			projectName: "Account Agreement",
			serialNumber: "829300483276",
			category: "create",
			isOpened: false,
			timestamp: "9867892456789",
			user: "Ted Beneke"
		}, {
			title: "Searched for .pdf files...",
			body: "Searched for .pdf files larger than 35KB",
			projectName: "Student Loan",
			serialNumber: "829300483272",
			category: "search",
			isOpened: false,
			timestamp: "9767892456789",
			user: "Gus Fring"
		}, {
			title: "Issue with destruction set...",
			body: "Issue with destruction set. Cannot read .bff extension",
			projectName: "Credit Application",
			serialNumber: "829300483286",
			category: "issue",
			isOpened: false,
			timestamp: "9667892456789",
			user: ""
		}, {
			title: "Completed destruction set...",
			body: "Completed destruction set",
			projectName: "Payday Loans",
			serialNumber: "829300483279",
			category: "complete",
			isOpened: false,
			timestamp: "9567892456789",
			user: "Ted Beneke"
		}, {
			title: "Searched for .pdf files...",
			body: "Searched for .pdf files larger than 35KB",
			projectName: "Loan Contract",
			serialNumber: "829300483289",
			category: "search",
			isOpened: false,
			timestamp: "9467892456789",
			user: "Walter White"
		}, {
			title: "Created hold set...",
			body: "Created hold set for 445 files",
			projectName: "Federal Reserve System...",
			serialNumber: "829300483288",
			category: "create",
			isOpened: false,
			timestamp: "9367892456789",
			user: "Saul Goodman"
		},{
			title: "Created hold set...",
			body: "Created hold set for 445 files",
			projectName: "Federal Reserve System...",
			serialNumber: "829300483288",
			category: "create",
			isOpened: false,
			timestamp: "9267892456789",
			user: "Jesse Pinkman"
		}, {
			title: "Searched for .pdf files...",
			body: "Searched for .pdf files larger than 54KB",
			projectName: "National Bank Examiner",
			serialNumber: "829300483283",
			category: "search",
			isOpened: false,
			timestamp: "9167892456789",
			user: "Gus Fring"
		}, {
			title: "Issue with destruction set...",
			body: "Issue with destruction set. Cannot read .omg extension",
			projectName: "Estate Planning",
			serialNumber: "829300483275",
			category: "issue",
			isOpened: false,
			timestamp: "8967892456789",
			user: ""
		}, {
			title: "Ingested 7892 files...",
			body: "Ingested 7892 files",
			projectName: "Mortgage",
			serialNumber: "829300483273",
			category: "injest",
			isOpened: false,
			timestamp: "8867892456789",
			user: "Jesse Pinkman"
		},  {
			title: "Issue with injestion set...",
			body: "Issue with destruction set. Cannot read .brb extension",
			projectName: "Uncollected Funds",
			serialNumber: "829300483282",
			category: "issue",
			isOpened: false,
			timestamp: "7756789245678",
			user: ""
		},  {
			title: "Searched for .pdf files...",
			body: "Searched for .pdf files created after 3/2/2010",
			projectName: "Loan Contract",
			serialNumber: "829300483289",
			category: "search",
			isOpened: false,
			timestamp: "7656789012678",
			user: "Walter White"
		}, {
			title: "Ingested 7892 files...",
			body: "Ingested 7892 files",
			projectName: "Account History",
			serialNumber: "829300483284",
			category: "injest",
			isOpened: false,
			timestamp: "66567890124567",
			user: "Ted Beneke"
		}, {
			title: "Issue with injection set...",
			body: "Issue with destruction set. Cannot read .lol extension",
			projectName: "Foreign Transaction Fees",
			serialNumber: "829300483278",
			category: "issue",
			isOpened: false,
			timestamp: "65567890124567",
			user: ""
		}, {
			title: "Ingested 7892 files...",
			body: "Ingested all 7892 files",
			projectName: "Account History",
			serialNumber: "829300483284",
			category: "injest",
			isOpened: false,
			timestamp: "5556789012456",
			user: "Hank Schrader"
		},  {
			title: "Searched for .shx files...",
			body: "Searched for .shx files",
			projectName: "Human Resources",
			serialNumber: "829300483274",
			category: "search",
			isOpened: false,
			timestamp: "5456789012456",
			user: "Ted Beneke"
		}, {
			title: "Searched for .png files...",
			body: "Searched for .png files smaller than 10KB",
			projectName: "Money Market Fund",
			serialNumber: "829300483280",
			category: "search",
			isOpened: false,
			timestamp: "3545678901245",
			user: "Walter White"
		}, {
			title: "Searched for .pdf files...",
			body: "Searched for .pdf files created after 3/2/2010",
			projectName: "Loan Contract",
			serialNumber: "829300483289",
			category: "search",
			isOpened: false,
			timestamp: "3445678901245",
			user: "Saul Goodman"
		}, {
			title: "Created hold set...",
			body: "Created hold set fpr 1092 files",
			projectName: "Bank Examination",
			serialNumber: "829300483277",
			category: "create",
			isOpened: false,
			timestamp: "2445678390124",
			user: "Jesse Pinkman"
		},  {
			title: "Ingested 452 files...",
			body: "Ingested 452 files",
			projectName: "Fixed Income",
			serialNumber: "829300483271",
			category: "injest",
			isOpened: false,
			timestamp: "2345657890124",
			user: "Gus Fring"
		}, {
			title: "Issue with destruction set...",
			body: "Issue with destruction set. Cannot read .ttyl extension",
			projectName: "Canceled Checks",
			serialNumber: "829300483287",
			category: "issue",
			isOpened: false,
			timestamp: "1334567890123",
			user: ""
		}, {
			title: "Searched for .rotlf files...",
			body: "Searched for .rotlf files",
			projectName: "Revolving Credit",
			serialNumber: "829300483285",
			category: "search",
			isOpened: false,
			timestamp: "1234567890123",
			user: "Jesse Pinkman"
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

