define([
], function () {
  var Toggle = function () {
    return function (scope, element, attrs) {
      if ($(window).innerWidth() > 949) {
        return;
      }
      var toggleEvent = Modernizr.touch ? 'touchend' : 'click';
      var $el = $(element);
      $el.on(toggleEvent, onToggleTouchEnd);
      $(document).on(toggleEvent, onDocumentTouchEnd);

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