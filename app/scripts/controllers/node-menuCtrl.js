'use strict';

var app = angular.module('myapp');

app.controller('node-menuCtrl', ['$scope', 'staticapi', '$log', '$rootScope',
  function ($scope, staticapi, $log, $rootScope) {

    $scope.headertype = $rootScope.currentHeaderType; // view can't use raw $rootScope in view

    var urlParamTranslation = function (str) {  // probably can be done more efficiently
                                                // but this iffe is legible and easy to edit
        switch (str)
        {
          case 'graphic': 
                    $scope.nodeSearchLabel = 'graphics';
                    $scope.nodeButtonLabel = 'graphic';
                    break;
          case 'project': 
                    $scope.nodeSearchLabel = 'projects';
                    $scope.nodeButtonLabel = 'project';
                    break;
          case 'instance': 
                    $scope.nodeSearchLabel = 'instances';
                    $scope.nodeButtonLabel = 'instance';
                    break;
          case 'user': 
                    $scope.nodeSearchLabel = 'users';
                    $scope.nodeButtonLabel = 'user';
                    break;
          case 'storage': 
                    $scope.nodeSearchLabel = 'storage media';
                    $scope.nodeButtonLabel = 'storage media';
                    break;
          default:  $scope.nodeSearchLabel = '';
                    $scope.nodeButtonLabel = '';
        }

    }($rootScope.currentNodeType);


    var getNodes = function() {

        staticapi.get( $rootScope.currentNodeType + "list").
            success(function(data, status, headers, config) {
                $scope.nodeList = data.results;
            }).
            error(function(data, status, headers, config) {
                alert("HTTP ERROR "+status);
            });
    }();


    $scope.$watch('activeCanvasNodes', function(newval, oldval) {

        var targetID;
        var titleChange;

        if( oldval.length > 0 )
        {
            for (var i = 0; i < newval.length; i++) {

                if ( !(oldval[i].name === newval[i].name ) )
                {
                    targetID = newval[i].id;
                    titleChange = newval[i].name;
                    break;
                }
            }   
        } 

        if(!($scope.nodeList === undefined))
        {
            for (var i = 0; i < $scope.nodeList.length; i++) {

                if ( $scope.nodeList[i].id === targetID )
                {
                    $scope.nodeList[i].name = titleChange;
                    break;
                }
            }
        }

    }, true); // deep watch bc activeCanvasNodes is an array
	
  }]);

