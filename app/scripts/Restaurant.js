'use strict';

angular.module('myapp').factory('Restaurant', function($resource) {
  return $resource('/api/restaurant/:id', {id: '@id'});
});