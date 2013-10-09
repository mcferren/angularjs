'use strict';

var app = angular.module('auxFeatures');

app.filter('camelCase', function() {
	  return function(input) {

	    var newArr = input.split("-");

        for(var i = 0 ; i < newArr.length ; i++){
            newArr[i] = newArr[i].charAt(0).toUpperCase() 
            			+ newArr[i].substr(1).replace(/[A-Z]/g, ' $&');
        }       

        var newStr = newArr.join(" ");
	    return newStr;

	  };
	});