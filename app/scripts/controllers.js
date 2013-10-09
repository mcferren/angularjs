'use strict';

var app = angular.module('myapp');

app.controller('playCtrl', ['$scope',
        function ($scope) {

    $scope.playItems = [
      'roles',
      'attributeInstance',
      'repositoty',
      'metadataTemplates',
      'permissions',
      'users',
      'domains',
      'projects',
      'retentionPolicies',
      'channels',
      'auditLogProperties',
      'auditLogs',
      'taskLogs',
      'attributeDefinitions',
      'tasks'
    ];

  }]);


app.controller('peopleCtrl', ['$scope', 'dataFactory', '$templateCache', '$resource',
        function ($scope, dataFactory, $templateCache, $resource) {

    $scope.peopleList = [
      'Matt',
      'Philip',
      'Stefanie',
      'Srini',
      'Josh',
      'Joe',
      'Amanda',
      'Adam',
      'Jennifer'
    ];

    $scope.hello = 'smart';
    
    $scope.animalList = dataFactory.animal();
    $scope.colorList = dataFactory.color();

    var dataService = $resource('http://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch?zip=:zip', {callback: 'JSON_CALLBACK'}, {get: {method: 'JSONP'}});
    $scope.domainData = dataService.get({zip: 60613});

  }]);