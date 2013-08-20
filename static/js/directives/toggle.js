define([
], function () {
  var Toggle = function () {
    return function (scope, element, attrs) {
      if ($(window).innerWidth() > 949) {
        return;
      }
      var $el = $(element);
      $el.on('touchend click', onToggleTouchEnd);
      $(document).on('touchend click', onDocumentTouchEnd);

      function onToggleTouchEnd(e) {
        e.stopPropagation();
        $el.next().slideToggle('fast');
      }

      function onDocumentTouchEnd(e) {
        $el.next().hide('fast');
      }

    }
  }

  return Toggle;
});