'use strict';

var app = angular.module('auxFeatures');

app.filter('nospace', function () {
    return function (value) {
        return (!value) ? '' : value.replace(/ /g, '');
    };
});