'use strict';

var app = angular.module('auxFeatures');

app.directive('niceScrollbar', function($parse) {
	return {
		restrict: 'A',
		transclude: true,
		template:  '<div ng-transclude></div>',
		replace: false,
		link: function($scope, $elem, $attr) {


				$elem.mouseenter(function() {
				    $elem.css("cursor","row-resize");
				});


			    $elem.niceScroll({cursorborder:"#ddd",
			    				  cursorcolor:"#ddd",
			    				  cursoropacitymin:"0.0",
			    				  railalign:"right",
			    				  railoffset:true,
			    				  railpadding:{top:0,right:0,left:0,bottom:0},
			    				  //cursoropacitymax:0.0,
			    				  cursorwidth:"10",
			    				  cursorborderradius:"0px",
			    				  //scrollspeed:100,
			    				  touchbehavior:true,
			    				  bouncescroll:true,
			    				  cursordragontouch:true
			    });
		}
	}
});