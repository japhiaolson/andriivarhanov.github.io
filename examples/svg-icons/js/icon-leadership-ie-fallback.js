(function() {

  if (isBrowserIE()) {
    var $icon = $('.icon-leadership');
    var $hand = $('.icon-leadership__hand');
    var $necktie = $('.icon-leadership__necktie');
    var handInOut = new TimelineMax({ paused: true });
    var necktieMove = new TimelineMax({ paused: true });
    var duration = 3;

    handInOut.set($hand, {
      attr: {
        transform: 'scale(1.2 1) rotate(30 500 1000) translate(30 400)'
      }
    })
    .to($hand, duration * 0.2, {
      attr: {
        transform: 'scale(1.2 1) rotate(30 500 1000) translate(30 100)'
      },
    })
    .to($hand, duration * 0.05, {
      attr: {
        transform: 'scale(1.2 1) rotate(30 500 1000) translate(30 160)'
      },
      delay: duration * 0.2
    })
    .to($hand, duration * 0.05, {
      attr: {
        transform: 'scale(1.2 1) rotate(30 500 1000) translate(30 100)'
      },
      delay: duration * 0.4
    })
    .to($hand, duration * 0.1, {
      attr: {
        transform: 'scale(1.2 1) rotate(30 500 1000) translate(30 400)'
      },
      delay: duration * 0.6
    });

    necktieMove
    .set($necktie, {
      attr: {
        transform: 'translate(1 1)'
      },
    })
    .to($necktie, 0.1, {
      attr: {
        transform: 'translate(15 1)'
      },
      ease: Bounce.easeOut,
      delay: duration * 0.2
    })
    .to($necktie, 0.1, {
      attr: {
        transform: 'translate(-15 1)'
      },
      delay: 0.1 * duration * 0.4
    })
    .to($necktie, 0.1, {
      attr: {
        transform: 'translate(1 1)'
      },
      delay: 0.1 * duration * 0.6
    });

    $icon.on('mouseenter', function() {
      handInOut.restart();
      necktieMove.restart();
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
