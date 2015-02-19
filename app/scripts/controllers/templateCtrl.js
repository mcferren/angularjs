'use strict';

var app = angular.module('myapp');

app.controller('templateCtrl', ['$scope', 'staticapi', '$log', '$rootScope', '$location', 'Facebook', //'proxyapi', 
  function ($scope, staticapi, $log, $rootScope, $location, Facebook) { //proxyapi, 

    // $scope.menuItems = [
    //                       'people',
    //                       'products',
    //                       'events',
    //                       'schools',
    //                       'government',
    //                       'investors',
    //                       'locations'
    //                    ];

    $scope.status = 'yes';

    $scope.login = function () {
      Facebook.login(function(response) {
        if (response.status == 'connected') {
          $scope.status = 'yes';
          console.log(response);
        } else {
          $scope.status = 'no';
        }
      });
    };

    $scope.gimmi = function () {
      Facebook.api(
          "/10151250813044974",
          function (response) {
            if (response && !response.error) {
              console.log('burp', response);
            }
          }
      );
    }

    $scope.getLoginStatus = function() {
      Facebook.getLoginStatus(function(response) {
        if(response.status === 'connected') {
          $scope.loggedIn = true;
        } else {
          $scope.loggedIn = false;
        }
      });
    };

    $scope.me = function() {
      Facebook.api('/me?fields=name,picture,likes.fields(name,picture.width(300).height(300)).limit(500),friends.fields(name,picture.width(300).height(300)).limit(500)', function(response) {
        $scope.user = response;
            if (response && !response.error) {
              console.log('burp', response);

              api.post("user",user).
                success(function(data, status, headers, config) {
                    $scope.user = data;
                }).
                error(function(data, status, headers, config) {
                    alert("HTTP ERROR "+status);
                })
            }
      });


      //https://thawing-mountain-1681.herokuapp.com/user
    };

    $scope.postUser = function() {
        user = {
            name : $scope.userName,
            email : $scope.userEmail
        };
        $scope.clearUser();
        api.post("users",user).
            success(function(data, status, headers, config) {
                $scope.users = api.get("users");
            }).
            error(function(data, status, headers, config) {
                alert("HTTP ERROR "+status);
            })
    }

    $scope.logout = function () {
      Facebook.logout(function(response) {
        if (response.status == 'connected') {
          $scope.status = 'yes';
          console.log(response);
        } else {
          $scope.status = 'no';
        }
      });
    };

    $scope.footerItems = [
                            '© 2015 Sea * Side Syndication',
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