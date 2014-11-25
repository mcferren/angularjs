'use strict';

var app = angular.module('myapp');

app.controller('templateCtrl', ['$scope', 'staticapi', '$log', '$rootScope', '$location', //'proxyapi', 
  function ($scope, staticapi, $log, $rootScope, $location) { //proxyapi, 

    $scope.menuItems = [
                          'companies',
                          'people',
                          'products',
                          'events',
                          'schools',
                          'government',
                          'investors',
                          'locations'
                       ];

    $scope.footerItems = [
                            '© 2014 AOL Inc. All rights reserved.',
                            'About',
                            'Contact',
                            'Terms of Service'
                         ];

    $scope.categoryItems = [];

    $scope.activeCanvasNodes = [];

    $scope.templateState = {
        helpState : false,
        sidebarState : true
    };


    $rootScope.$watch('currentNodeID', function() {

        if( $rootScope.currentNodeID !== null && 
            $rootScope.currentNodeID !== undefined)
        {
            $scope.adjustActiveCanvasNodes($rootScope.currentNodeID);
        }
        else // else here only for debug purposes
        {
            console.log('FAILS $watch CONDITIONAL')
        }
    });


    $scope.pushNewCurrentNode = function(id) {
      $rootScope.currentTabType = null;
      $rootScope.currentNodeID = id;
    }
    

    $scope.adjustActiveCanvasNodes = function(id){

      $location.path('/' + $rootScope.currentMenuType + '/' + id);

      staticapi.get("nodes/" + id).
        success(function(data, status, headers, config) {

            $scope.activeCanvasNodes.unshift(data);
            if($scope.activeCanvasNodes.length === 10) {
              $scope.activeCanvasNodes.pop();
            }

            $('html,body').scrollTop( 0 );

        }).
        error(function(data, status, headers, config) {
            alert("HTTP ERROR "+status);
        });
    } 


    $scope.getCategories = function() {

        staticapi.get( "navs/" + "category" + "list").
            success(function(data, status, headers, config) {
                $scope.categoryItems = data.results;
            }).
            error(function(data, status, headers, config) {
                alert("HTTP ERROR "+status);
            });
    }();   



/******** NEED THIS WHEN WE CONNECT BACK WITH PROXY *******************

    var getUser = function() {
        proxyapi.get("account").
            success(function(data, status, headers, config) {
                $scope.username = data.name;
                $scope.userId = data.id;
            }).
            error(function(data, status, headers, config) {
                alert("HTTP ERROR "+status);
            });
    }();*/

  }]);