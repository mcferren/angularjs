'use strict';

var app = angular.module('myapp');

app.controller('nodeDetailsCtrl', ['$scope', 'staticapi', '$log', '$location', '$rootScope',
  function ($scope, staticapi, $log, $location, $rootScope) {


      $scope.nodeState = {
          selection : {},
          collapseIsClosed : false,  // * * * * FUTURE ITERATIONS WITH SPLIT SCREEN
          height : $scope.identity.height
      };


      $scope.changeTab = function(nameA, idA, layoutA) {

          $scope.nodeState.selection = {
                                          name : nameA,
                                          id : idA,
                                          layout : layoutA
                                       }; 

          // if its the top node in the browser window, then change the url
          if($rootScope.currentNodeID === $scope.identity.id) {
            $location.path('/' + $rootScope.currentMenuType + 
                           '/' + $scope.identity.id +
                           '/' + nameA);
          }              
      }


      $scope.changeCollapseState = function() {
          $scope.nodeState.collapseIsClosed = !$scope.nodeState.collapseIsClosed;
      }


      $scope.tallyTabs = function() {

          $scope.returnTabList = [];
          
          for(var key in $scope.identity.tabs) {

              $scope.returnTabList.push($scope.identity.tabs[key].name);
             
          }

          $scope.returnTabList.unshift('edit');

      }();
      

      $scope.tabTranslate = function() {

        var localName;
        var localID;
        var localLayout;

        switch ($rootScope.currentTabType)
        {
            case null: 
                      localName = 'details';
                      localID = $scope.identity.tabs[$scope.identity.tabs.length - 1].id;
                      localLayout = 'details';
                      break;
            case 'details': 
                      localName = $rootScope.currentTabType;
                      localID = $scope.identity.tabs[$scope.identity.tabs.length - 1].id;
                      localLayout = 'details';
                      break;
            case 'edit': 
                      localName = $rootScope.currentTabType;
                      localID = '';
                      localLayout = 'edit';
                      break;
            default:  localName = $rootScope.currentTabType;
                      for(var obj in $scope.identity.tabs) { // have to iterate through to find match
                          if($scope.identity.tabs[obj].name === $rootScope.currentTabType) {
                              localID = $scope.identity.tabs[obj].id;
                              localLayout = $scope.identity.tabs[obj].layout;
                              break;
                          }
                      }
          }

          $scope.changeTab(
              localName,
              localID,
              localLayout
          );

      }();

  }]);

