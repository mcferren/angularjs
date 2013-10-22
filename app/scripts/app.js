'use strict';

var app = angular.module('myapp', ['ui.state', 
                                   'ngResource', 
                                   'auxFeatures',
                                   'infinite-scroll',
                                   'monospaced.placeholder']);

angular.module('auxFeatures', []);

app.config(function($stateProvider, $urlRouterProvider){
  
  $urlRouterProvider.otherwise('/home/dashboard');
 
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
      "menu": {
        templateUrl: '/views/partials/graphs-menu.html',
        controller: 'projectsCtrl'
      },
      "sidebar": {
        templateUrl: '/views/partials/activity-monitor.html',
        controller: 'activityMonitorCtrl'
      }
    }
  })
      .state('injestion', {
    parent: 'template',
    url: '/injestion',
    views: {
      "content": {
        templateUrl: '/views/partials/injestion.html',
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
        templateUrl: '/views/partials/explore-menu.html'
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
      "menu": {
        templateUrl: '/views/partials/governance-menu.html'
      },
      "sidebar": {
        templateUrl: '/views/partials/activity-monitor.html',
        controller: 'activityMonitorCtrl'
      }
    }
  })
      .state('settings', {
    parent: 'template',
    url: '/settings',
    views: {
      "content": {
        templateUrl: '/views/partials/settings.html',
        controller: 'playCtrl'
      },
      "menu": {
        templateUrl: '/views/partials/settings-menu.html'
      },
      "sidebar": {
        templateUrl: '/views/partials/activity-monitor.html',
        controller: 'activityMonitorCtrl'
      }
    }
  });

});