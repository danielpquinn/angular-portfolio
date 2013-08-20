define([
], function () {

  var EqualHeight = function () {
    return function (scope, element, attrs) {
      scope.$watch('projects', function (value) {
        var tallest = 0;
        setTimeout(function () {
          var $children = $(element).children();

          $.each($children, function () {
            var height = $(this).height();
            tallest = height > tallest ? height : tallest;
          });

          $children.css({
            height: tallest + 'px'
          })

        }, 0);
      });
    }
  }

  return EqualHeight;

});