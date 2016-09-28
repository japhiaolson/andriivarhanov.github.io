(function() {

  if (isBrowserIE()) {
    var $icon = $('.icon-thumb');
    var $hand = $('.icon-thumb__hand');
    var handMove = new TimelineMax({ paused: true });

    handMove.set($hand, {
      attr: {
        transform: 'translate(0 1)'
      },
      ease: Power4.easeInOut
    }).to($hand, 0.25, {
      attr: {
        transform: 'translate(0 70)'
      }
    }).to($hand, 0.25, {
      attr: {
        transform: 'translate(0 -40)'
      },
      delay: 0.25
    }).to($hand, 0.1, {
      attr: {
        transform: 'translate(0 0)'
      },
      delay: 0.1
    });

    $icon.on('mouseenter', function() {
      handMove.restart();
    });
  }

  function isBrowserIE() {
    var ua = window.navigator.userAgent;

    if (ua.indexOf('MSIE ') > 0 || ua.indexOf('Edge/') > 0) {
      return true;
    }

    return false;
  }

})();
