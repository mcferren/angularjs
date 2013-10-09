'use strict';

var app = angular.module('auxFeatures');

app.directive('greenMan', function($parse) {
	return {
		restrict: 'A',
		replace: false,
		link: function($scope, $elem, $attr) {
			
			var workingStr = $elem.text();

			if(workingStr.indexOf("o") != -1) {

				var dice = workingStr.split('o');
				var outputStr = "";

				for(var i = 0; i < dice.length; i++) {
					outputStr += dice[i];
					if( (i + 1 ) != dice.length)
						outputStr += "<span class='greenman'>Θ</span>";
				}
				
				$elem.html(outputStr);
			}
		}
	}
});