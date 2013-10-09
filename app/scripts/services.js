'use strict';

var app = angular.module('myapp');

app.factory('dataFactory', ['$resource',
                              function($resource) {
            
            var dataFactory = {};

            dataFactory =  {
                animal: function() {
                    return 'cow';
                  },
                color: function() {
                    return 'orange';
                  },
                farmers: function() {
                    var dataService = $resource('http://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch?zip=:zip', {callback: 'JSON_CALLBACK'}, {get: {method: 'JSONP'}});
                    return dataService;

                  }
              };

            return dataFactory;
          }]);