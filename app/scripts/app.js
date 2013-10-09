'use strict';

var app = angular.module('myapp', ['ui.state', 
                                   'ngResource', 
                                   'auxFeatures',
                                   'infinite-scroll',
                                   'angularSmoothscroll']);

angular.module('auxFeatures', []);

app.config(function($stateProvider, $urlRouterProvider){
  
  $urlRouterProvider.otherwise('/home/projects');
 
  $stateProvider
      .state('template', {
    abstract: true,
    url: '/home',
    templateUrl: '/views/partials/template.html',
    controller: 'templateCtrl'
  })
      .state('dashboard', {
    parent: 'template',
    url: '/dashboard',
    views: {
      "content": {
        templateUrl: '/views/partials/dashboard.html'
      },
      "sidebar": {
        templateUrl: '/views/partials/activity-monitor.html',
        controller: 'activityMonitorCtrl'
      }
    }
  })
      .state('projects', {
    parent: 'template',
    url: '/projects',
    views: {
      "content": {
        templateUrl: '/views/partials/projects.html',
        controller: 'projectsCtrl'
      },
      "menu": {
        templateUrl: '/views/partials/projects-menu.html',
        controller: 'projectsCtrl'
      },
      "sidebar": {
        templateUrl: '/views/partials/activity-monitor.html',
        controller: 'activityMonitorCtrl'
      }
    }
  })
      .state('explore', {
    parent: 'template',
    url: '/explore',
    views: {
      "content": {
        templateUrl: '/views/partials/explore.html',
        controller: 'peopleCtrl'
      },
      "menu": {
        templateUrl: '/views/partials/explore-menu.html',
        controller: 'projectsCtrl'
      },
      "sidebar": {
        templateUrl: '/views/partials/activity-monitor.html',
        controller: 'activityMonitorCtrl'
      }
    }
  })
      .state('create', {
    parent: 'template',
    url: '/create',
    templateUrl: '/views/partials/create.html',
    views: {
      "content": {
        templateUrl: '/views/partials/create.html',
        controller: 'playCtrl'
      },
      "sidebar": {
        templateUrl: '/views/partials/activity-monitor.html',
        controller: 'activityMonitorCtrl'
      }
    }
  })
      .state('governance', {
    parent: 'template',
    url: '/governance',
    templateUrl: '/views/partials/governance.html',
    views: {
      "content": {
        templateUrl: '/views/partials/governance.html',
        controller: 'playCtrl'
      },
      "sidebar": {
        templateUrl: '/views/partials/activity-monitor.html',
        controller: 'activityMonitorCtrl'
      }
    }
  })
      .state('configuration', {
    parent: 'template',
    url: '/configuration',
    views: {
      "content": {
        templateUrl: '/views/partials/configuration.html',
        controller: 'playCtrl'
      },
      "sidebar": {
        templateUrl: '/views/partials/activity-monitor.html',
        controller: 'activityMonitorCtrl'
      }
    }
  });

});
