'use strict';

var app = angular.module('myapp');

app.controller('templateCtrl', ['$scope', 'staticapi', '$log', '$rootScope', //'proxyapi', 
  function ($scope, staticapi, $log, $rootScope) { //proxyapi, 

    $scope.menuItems = [
                          'ingestion',
                          'explore',
                          'governance',
                          'users',
                          'storage'
                       ];

    $scope.footerItems = [
                            '© InfoBelt, LLC',
                            'Contact'
                         ];

    $scope.templateState = {
        helpState : false,
        sidebarState : true
    };

/******** NEED THIS WHEN WE CONNECT BACK WITH ORION PROXY *******************

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

    $rootScope.$watch('currentNodeID', function() {

        /* * * * BUG BUG BUG * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

          This watch fires fine when you copy/paste url into address bar
          ie: http://localhost:9000/#/ingestion/996332B1-A3A5-42A2-8D66-6D1EFC433724

          This watch fires fine when I click nodes on the left menu

          This watch fires fine when I click links in the top navigation menu

          There is a bug where this watch does not fire when an existing address bar url
          is edited and the user then clicks return to load the new address. Perhaps
          something to do with the http:// prefix process that chrome performs

          Maybe the answer is related to the use of newval / oldval

          This may be solved by putting a $watch on $location. I've noticed that the back
          button currently doesn't work when tabs are changed but it does work when nodes
          and nodetypes are changed

        * * * * BUG BUG BUG * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

        console.log('$rootScope.$watch FIRES', $rootScope.currentNodeID);

        if( $rootScope.currentNodeID !== null && 
            $rootScope.currentNodeID !== undefined)
        {
            console.log('PASSES $watch CONDITIONAL')
            console.log('CURRENT NODE: ', $rootScope.currentNodeID)
            console.log('CURRENT TYPE: ', $rootScope.currentNodeType)
            $scope.adjustActiveCanvasNodes($rootScope.currentNodeType,
                                           $rootScope.currentNodeID);
        }
        else // else here only for debug purposes
        {
            console.log('FAILS $watch CONDITIONAL')
        }
    });

    $scope.activeCanvasNodes = [];
    
    $scope.adjustActiveCanvasNodes = function(type, id){

      staticapi.get(type + "/" + id).
        success(function(data, status, headers, config) {

            $scope.activeCanvasNodes.length = 0;
            $scope.activeCanvasNodes.push(data);
            console.log('GAS: ', $scope.activeCanvasNodes)

        }).
        error(function(data, status, headers, config) {
            alert("HTTP ERROR "+status);
        });
    }    


/* * * * FUTURE ITERATIONS WITH SPLIT SCREEN * * * * * * * * * * * * * * * 
    $scope.clearActiveCanvasNodes = function(link){ 
        if(link == 'ingestion')
* * * * FUTURE ITERATIONS WITH SPLIT SCREEN * * * * * * * * * * * * * * */
    $scope.clearActiveCanvasNodes = function(){
        $rootScope.currentNodeID = null;
        $scope.activeCanvasNodes.length = 0;
    }

  }]);