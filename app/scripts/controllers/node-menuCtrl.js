'use strict';

var app = angular.module('myapp');

app.controller('node-menuCtrl', ['$scope', 'staticapi', '$log', '$rootScope',
  function ($scope, staticapi, $log, $rootScope) {
    

    var urlParamTranslation = function (str) {  // probably can be done more efficiently
                                                // but this iffe is legible and easy to edit
                                                // until we make a property file to configure from
        
        console.log('$scope.$parent.categoryItems', $rootScope.currentMenuType);

        switch (str)
        {
          case 'companies': 
                    $scope.menuHeaderLabel = 'Companies';
                    $scope.menuSearchLabel = 'for Companies';
                    $scope.menuButtonLabel = 'company';
                    break;
          case 'people': 
                    $scope.menuHeaderLabel = 'People';
                    $scope.menuSearchLabel = 'for People';
                    $scope.menuButtonLabel = 'person';
                    break;
          case 'products': 
                    $scope.menuHeaderLabel = 'Products';
                    $scope.menuSearchLabel = 'for Products';
                    $scope.menuButtonLabel = 'product';
                    break;
          case 'events': 
                    $scope.menuHeaderLabel = 'Events';
                    $scope.menuSearchLabel = 'for Events';
                    $scope.menuButtonLabel = 'event';
                    break;
          case 'schools': 
                    $scope.menuHeaderLabel = 'Schools';
                    $scope.menuSearchLabel = 'for Schools';
                    $scope.menuButtonLabel = 'school';
                    break;
          case 'government': 
                    $scope.menuHeaderLabel = 'Government';
                    $scope.menuSearchLabel = 'for Govt. Agencies';
                    $scope.menuButtonLabel = 'government';
                    break;
          case 'investors': 
                    $scope.menuHeaderLabel = 'Investors';
                    $scope.menuSearchLabel = 'for Investors';
                    $scope.menuButtonLabel = 'investor';
                    break;
          case 'locations': 
                    $scope.menuHeaderLabel = 'Locations';
                    $scope.menuSearchLabel = 'for Locations';
                    $scope.menuButtonLabel = 'location';
                    break;
          case 'following': 
                    $scope.menuHeaderLabel = 'Following';
                    $scope.menuSearchLabel = 'for Favorites';
                    $scope.menuButtonLabel = 'node';
                    break;
          case 'related': 
                    $scope.menuHeaderLabel = 'Related';
                    $scope.menuSearchLabel = 'for related info';
                    $scope.menuButtonLabel = 'node';
                    break;
          default:  $scope.menuHeaderLabel = '';
                    $scope.menuSearchLabel = '';
                    $scope.menuButtonLabel = '';
        }

    }($rootScope.currentMenuType);


    $scope.getNodes = function() {

        staticapi.get( "menus/" + $rootScope.currentMenuType + "list").
            success(function(data, status, headers, config) {
                $scope.nodeList = data.results;
                console.log('TEST', data.results[1].iconcoordinates);
            }).
            error(function(data, status, headers, config) {
                alert("HTTP ERROR "+status);
            });
    }();


    // $scope.$watch('activeCanvasNodes', function(newval, oldval) {

    //     var targetID;
    //     var titleChange;

    //     if( oldval.length > 0 )
    //     {
    //         for (var i = 0; i < newval.length; i++) {

    //             if ( !(oldval[i].name === newval[i].name ) )
    //             {
    //                 targetID = newval[i].id;
    //                 titleChange = newval[i].name;
    //                 break;
    //             }
    //         }   
    //     } 

    //     if(!($scope.nodeList === undefined))
    //     {
    //         for (var i = 0; i < $scope.nodeList.length; i++) {

    //             if ( $scope.nodeList[i].id === targetID )
    //             {
    //                 $scope.nodeList[i].name = titleChange;
    //                 break;
    //             }
    //         }
    //     }

    // }, true); // deep watch bc activeCanvasNodes is an array
	
  }]);

