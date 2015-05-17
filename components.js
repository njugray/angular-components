angular.module('ny-components', []).directive("nyImg", function(){
    return {
      restrict: 'E',
      replace: true,
      template: '<img class="ny-img">',
      scope: {
        default: '=default',
        src: '=src'
      },
      link: function($scope, el, attrs){
        
      },
      controller: ['$scope', '$element', '$attrs', function($scope, $element, $attrs){
        $element.attr('src', 'data:image/png;base64,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');

        var src = $attrs.nySrc,
            image = new Image();
        image.src = src;
        image.onload = function(){
          $element.attr('src', src);
        };
      }]
    };
});