'use strict';

var app = angular.module('myapp');

app.controller('nodeDetailsCtrl', ['$scope', 'staticapi', '$log', '$location', '$rootScope',
  function ($scope, staticapi, $log, $location, $rootScope) {


      $scope.nodeState = {
          selection : {},
          collapseIsClosed : false,  // * * * * FUTURE ITERATIONS WITH SPLIT SCREEN
          height : $scope.identity.height
      };


      $scope.getSlidePayload = function(index) {

          $scope.nodeState.selection = {
                                  name : $scope.identity.slides[index].name,
                                  id : $scope.identity.slides[index].id,
                                  layout : $scope.identity.slides[index].layout
                               }; 

          return $scope.nodeState;  
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


      $scope.tallySlides = function() {

          $scope.returnSlideList = [];
          
          for(var key in $scope.identity.slides) {

              $scope.returnSlideList.push($scope.identity.slides[key].name);
             
          }

          // $scope.returnSlideList.unshift('edit');

      }();
      

      $scope.tabTranslate = function() {

        var localName;
        var localID;
        var localLayout;


        if($scope.identity.template === 'tabs') {

            switch ($rootScope.currentTabType)
            {
                case null: 
                          localName = 'details';
                          localID = $scope.identity.slides[$scope.identity.slides.length - 1].id;
                          localLayout = 'details';
                          break;
                case 'details': 
                          localName = $rootScope.currentTabType;
                          localID = $scope.identity.slides[$scope.identity.slides.length - 1].id;
                          localLayout = 'details';
                          break;
                case 'edit': 
                          localName = $rootScope.currentTabType;
                          localID = '';
                          localLayout = 'edit';
                          break;
                default:  localName = $rootScope.currentTabType;
                          for(var obj in $scope.identity.slides) { // have to iterate through to find match
                              if($scope.identity.slides[obj].name === $rootScope.currentTabType) {
                                  localID = $scope.identity.slides[obj].id;
                                  localLayout = $scope.identity.slides[obj].layout;
                                  break;
                              }
                          }
            }
        } else if ($scope.identity.template === 'list') {
            
                          localName = 'details';
                          localID = $scope.identity.slides[$scope.identity.slides.length - 1].id;
                          localLayout = 'details';
        }

        $scope.changeTab(
            localName,
            localID,
            localLayout
        );

      }();

  }]);

