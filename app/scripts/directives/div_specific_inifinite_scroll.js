'use strict';

var app = angular.module('auxFeatures');

app.directive('infiniteScroll', [
  '$rootScope', '$window', '$timeout', function($rootScope, $window, $timeout) {
    return {
      link: function(scope, elem, attrs) {

        var targetClass = elem.attr('class').split(' ')[0];

        //alert(targetClass);
        //alert($window.height());

        var checkWhenEnabled, handler, scrollDistance, scrollEnabled;


        $window = angular.element($window);


        scrollDistance = 0;


        if (attrs.infiniteScrollDistance != null) {
          scope.$watch(attrs.infiniteScrollDistance, function(value) {
            return scrollDistance = parseInt(value, 10);
          });
        }


        scrollEnabled = true;


        checkWhenEnabled = false;
        if (attrs.infiniteScrollDisabled != null) {
          scope.$watch(attrs.infiniteScrollDisabled, function(value) {
            scrollEnabled = !value;
            if (scrollEnabled && checkWhenEnabled) {
              checkWhenEnabled = false;
              return handler();
            }
          });
        }


        handler = function() {
          var elementBottom, remaining, shouldScroll, windowBottom;
          //windowBottom = $window.height() + $window.scrollTop();
          elementBottom = elem.offset().top + elem.height();
          remaining = elementBottom;
          //alert( elem.height() );
          shouldScroll = remaining <= elem.height() * scrollDistance;
          if (shouldScroll && scrollEnabled) {
            if ($rootScope.$$phase) {
              return scope.$eval(attrs.infiniteScroll);
            } else {
              return scope.$apply(attrs.infiniteScroll);
            }
          } else if (shouldScroll) {
            return checkWhenEnabled = true;
          }
        };


        elem.on('mousedown', handler);
        scope.$on('$destroy', function() {
          return elem.off('mousedown', handler);
        });


        return $timeout((function() {
          if (attrs.infiniteScrollImmediateCheck) {
            if (scope.$eval(attrs.infiniteScrollImmediateCheck)) {
              return handler();
            }
          } else {
            return handler();
          }
        }), 0);
      }
    };
  }
]);
