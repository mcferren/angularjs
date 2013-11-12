'use strict';

var app = angular.module('myapp');

app.service('staticapi', function ($http) {

    this.get = function (val) {

        return $http.get("/scripts/services/staticData/" + val + ".json");
    };

});