'use strict';

angular
  .module ('ui.range.slider', [])
  .directive ('rangeSlider', RangeSliderDirective);

/* @ngInject */
function RangeSliderDirective ( RangeSlider, $timeout ) {
  return {
    restrict : 'E',
    replace : false,
    require : 'ngModel',
    scope : {
      options : '=',
      ngModel : '=',
      update : '='
    },
    template : '<div></div>',
    link : function ( $scope, $element, $attribute ) {
      var div = angular.element($element.children()[0]);
      RangeSlider.create (div[0], $scope.options);

      // Make sure not to throw any errors because of the apply
      $scope.safeApply = function(fn) {
        var phase = this.$root.$$phase;
        if(phase == '$apply' || phase == '$digest') {
          if(fn && (typeof(fn) === 'function')) {
            fn();
          }
        } else {
          this.$apply(fn);
        }
      };

      div[0].noUiSlider.on('update', function (values, handle) {
        $scope.safeApply(function () {
          $scope.ngModel = values;

          if($scope.update) {
            $scope.update (values, handle);
          }
        });
      });

      $scope.$watch ('ngModel', function (value) {
        if (value) {
          div[0].noUiSlider.set (value);
        }
      }, true)
    }
  }
}
