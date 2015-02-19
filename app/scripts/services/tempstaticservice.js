'use strict';

var app = angular.module('myapp');

app.service('staticapi', function ($http) {

    this.get = function (val) {

        return $http.get("/scripts/services/staticData/" + val + ".json");
    };

    this.post = function (path,object) {

        return $http.post("/api/1/"+path,object);
    };

});