'use strict';

var app = angular.module('myapp', ['ui.state', 
                                   'ngResource', 
                                   'auxFeatures',
                                   'infinite-scroll',
                                   'monospaced.placeholder']);

angular.module('auxFeatures', []);

app.config(function($stateProvider, $urlRouterProvider){
  
  $urlRouterProvider.otherwise('/dashboard');
 
  $stateProvider
      .state('template', {
    abstract: true,
    url: '',
    templateUrl: '/views/partials/template.html',
    controller: 'templateCtrl'
  })
     .state('sidebar', {
    abstract: true,
    parent: 'template',
    url: '',
    views: {
      "sidebar": {
        templateUrl: '/views/partials/activity-monitor.html',
        controller: 'activityMonitorCtrl'
      }
    }
  })
  .state('nodemenu', {
    parent: 'sidebar',
    url: '/{headertype:dashboard|ingestion|explore|governance|users|storage}',
    views: {
      "menu": {
        templateUrl: '/views/partials/node-menu.html',
        controller: 'node-menuCtrl'
      }
    },
    onEnter: function($rootScope, $stateParams){

        $rootScope.currentTabType = null;
        $rootScope.currentNodeID = null;
        $rootScope.currentHeaderType = $stateParams.headertype;

        switch ($stateParams.headertype)
        {
          case 'dashboard': 
                    $rootScope.currentNodeType = 'graphic';
                    break;
          case 'ingestion': 
                    $rootScope.currentNodeType = 'project';
                    break;
          case 'governance': 
                    $rootScope.currentNodeType = 'instance';
                    break;
          case 'users': 
                    $rootScope.currentNodeType = 'user';
                    break;
          case 'storage': 
                    $rootScope.currentNodeType = 'storage';
                    break;
          default:  $rootScope.currentNodeType = null
        }

        // these logs are to help debug templateCtrl $rootScope $watch bug
        console.log('MENU currentHeaderType: ', $rootScope.currentHeaderType);
        console.log('MENU currentNodeType: ', $rootScope.currentNodeType);
        console.log('MENU currentNodeID: ', $rootScope.currentNodeID);
        console.log('MENU currentTabType: ', $rootScope.currentTabType);
    }
  })
  .state('singlenode', {
    parent: 'nodemenu',
    url: '/:nodeid',
    onEnter: function($rootScope, $stateParams){

        $rootScope.currentTabType = null;
        $rootScope.currentNodeID = $stateParams.nodeid;

        // these logs are to help debug templateCtrl $rootScope $watch bug
        console.log('NODE currentHeaderType: ', $rootScope.currentHeaderType);
        console.log('NODE currentNodeID: ', $rootScope.currentNodeID);
        console.log('NODE currentNodeType: ', $rootScope.currentNodeType);
        console.log('NODE currentTabType: ', $rootScope.currentTabType);

    }
  })
  .state('tab', {
    parent: 'singlenode',
    url: '/:tabtype',
    onEnter: function($rootScope, $stateParams){

        $rootScope.currentTabType = $stateParams.tabtype;

        // these logs are to help debug templateCtrl $rootScope $watch bug
        console.log('TAB currentHeaderType: ', $rootScope.currentHeaderType);
        console.log('TAB currentNodeID: ', $rootScope.currentNodeID);
        console.log('TAB currentNodeType: ', $rootScope.currentNodeType);
        console.log('TAB currentTabType: ', $rootScope.currentTabType);

    }
  });

});