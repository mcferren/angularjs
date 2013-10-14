'use strict';

var app = angular.module('auxFeatures');

app.directive('projectLink', function($compile) {
  return {
    restrict: 'A',
    replace: false,
    link: function(scope, elem, attr) {

        var addProject = function(e){
            e.preventDefault();
            
            var projectTitle = elem.text();

            $('.canvasPot')
                  .children()
                  .remove()
                .end()
                  .prepend($compile('<div project-detail projectid="'
                                    + attr.projectid
                                    + '" id="p'
                                    + attr.projectid
                                    + '" ng-cloak>' 
                                    + projectTitle 
                                    + '</div>')(scope)); 

            scope.$apply();

        };
        
        elem.on('click', addProject);        

    }
  }
});