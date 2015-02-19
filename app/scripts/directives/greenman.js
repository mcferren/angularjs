'use strict';

var app = angular.module('auxFeatures');

app.directive('greenMan', function($parse) {
	return {
		restrict: 'A',
		replace: false,
		link: function($scope, $elem, $attrs) {
			
			var workingStr;
			var outputStr;

			if( $attrs.nodetype ) {workingStr = $attrs.nodetype;}
			else {workingStr = $elem.text();}

			if(workingStr.indexOf("o") != -1) {

				var dice = workingStr.split('o');
				outputStr = "";

				for(var i = 0; i < dice.length; i++) {
					outputStr += dice[i];
					if( (i + 1 ) != dice.length)
						outputStr += "<span class='greenman'>Θ</span>";
				}
			}
			else{
				outputStr = workingStr;
			}
				
			$elem.html(outputStr);
		}
	}
});