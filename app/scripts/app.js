'use strict';

var app = angular.module('myapp', ['ui.state', 
                                   'ngResource', 
                                   'auxFeatures',
                                   'infinite-scroll',
                                   'monospaced.placeholder',
                                   'facebook']);

angular.module('auxFeatures', []);

app.value('$anchorScroll', angular.noop);

app.config(function($stateProvider, $urlRouterProvider, FacebookProvider){
  
   // Set your appId through the setAppId method or
   // use the shortcut in the initialize method directly.
   FacebookProvider.init('683243831789669');
  
  $urlRouterProvider.otherwise('/following');
 
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
    url: '/{menutype:following|related|companies|people|products|events|schools|government|investors|locations}',
    views: {
      "menu": {
        templateUrl: '/views/partials/node-menu.html',
        controller: 'node-menuCtrl'
      }
    },
    onEnter: function($rootScope, $stateParams){

        $rootScope.currentTabType = null;
        $rootScope.currentNodeID = null;
        $rootScope.currentMenuType = $stateParams.menutype;
        
    }
  })
  .state('nakednode', {
    parent: 'sidebar',
    url: '/:nodeid',
    views: {
      "menu": {
        templateUrl: '/views/partials/node-menu.html',
        controller: 'node-menuCtrl'
      }
    },
    onEnter: function($rootScope, $stateParams){

        $rootScope.currentTabType = null;
        $rootScope.currentNodeID = $stateParams.nodeid;
        $rootScope.currentMenuType = 'related';
    }
  })
  .state('singlenode', {
    parent: 'nodemenu',
    url: '/:nodeid',
    onEnter: function($rootScope, $stateParams){
        $rootScope.currentTabType = null;
        $rootScope.currentNodeID = $stateParams.nodeid;

    }
  })
  .state('tab', {
    parent: 'singlenode',
    url: '/:tabtype',
    onEnter: function($rootScope, $stateParams){

        $rootScope.currentTabType = $stateParams.tabtype;

    }
  })
  .state('nakedtab', {
    parent: 'nakednode',
    url: '/:tabtype',
    onEnter: function($rootScope, $stateParams){

        $rootScope.currentTabType = $stateParams.tabtype;

    }
  });

});