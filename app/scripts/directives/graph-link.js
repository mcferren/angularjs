'use strict';

var app = angular.module('auxFeatures');

app.directive('graphLink', function($compile) {
  return {
    restrict: 'A',
    replace: false,
    link: function(scope, elem, attr) {

        var addGraph = function(e){
            e.preventDefault();
            
            var graphType = elem.text();

            $('.canvasPot')
                  .children()
                  .remove()
                .end()
                  .prepend($compile('<div graph-detail graphid="'
                                    + attr.graphid
                                    + '" id="p'
                                    + attr.graphid
                                    + '" ng-cloak></div>')(scope)); 

            scope.$apply();

        };
        
        elem.on('click', addGraph);        

    }
  }
});