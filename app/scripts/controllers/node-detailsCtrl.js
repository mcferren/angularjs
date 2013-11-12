'use strict';

var app = angular.module('myapp');

app.controller('nodeDetailsCtrl', ['$scope', 'staticapi', '$log', '$location', '$rootScope',
  function ($scope, staticapi, $log, $location, $rootScope) {

      $scope.headertype = $rootScope.currentHeaderType; // view can't use raw $rootScope in view
      $scope.nodeid = $rootScope.currentNodeID;

      var tallyTabs = function() {

          $scope.returnTabList = [];
          
          for(var key in $scope.identity.reports) {

              $scope.returnTabList.push($scope.identity.reports[key].name);
             
          }

          $scope.returnTabList.unshift('edit');

      }();


      $scope.nodeState = {
          selection : {}
          // collapseIsClosed : false  /* * * * FUTURE ITERATIONS WITH SPLIT SCREEN
      };


      $scope.changeTab = function(nameA, idA, layoutA) {

          $scope.nodeState.selection = {
                                          name : nameA,
                                          id : idA,
                                          layout : layoutA
                                       };

          console.log('SELECTION OBJECT: ', $scope.nodeState.selection);
          
          $location.path('/' + $rootScope.currentHeaderType + 
                         '/' + $scope.identity.id +
                         '/' + nameA);
      }
      

      var tabTranslate = function() {

        var localName;
        var localID;
        var localLayout;

        switch ($rootScope.currentTabType)
        {
          case null: 
                    localName = 'details';
                    localID = $scope.identity.reports[$scope.identity.reports.length - 1].id;
                    localLayout = 'details';
                    break;
          case 'details': 
                    localName = $rootScope.currentTabType;
                    localID = $scope.identity.reports[$scope.identity.reports.length - 1].id;
                    localLayout = 'details';
                    break;
          case 'edit': 
                    localName = $rootScope.currentTabType;
                    localID = '';
                    localLayout = 'edit';
                    break;
          default:  localName = $rootScope.currentTabType;
                    for(var obj in $scope.identity.reports) {
                        if($scope.identity.reports[obj].name === $rootScope.currentTabType) {
                            localID = $scope.identity.reports[obj].id
                            break;
                        }
                    }
                    localLayout = 'table';
        }

        $scope.changeTab(
            localName,
            localID,
            localLayout
        );

      }();



      /* * * * FUTURE ITERATIONS WITH SPLIT SCREEN * * * * * * * * * * * * * * * 

      $scope.changeCollapseState = function() {
          $scope.nodeState.collapseIsClosed = !$scope.nodeState.collapseIsClosed;
      }

      * * * * FUTURE ITERATIONS WITH SPLIT SCREEN * * * * * * * * * * * * * * */

  }]);

