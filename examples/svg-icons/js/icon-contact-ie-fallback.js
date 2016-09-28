(function() {

  if (isBrowserIE()) {
    var $icon = $('.icon-contact');
    var $coverLeft = $('.icon-contact__cover-left');
    var $coverRight = $('.icon-contact__cover-right');
    var $letter = $('.icon-contact__letter');
    var coverLeft = new TimelineMax({ paused: true });
    var coverRight = new TimelineMax({ paused: true });
    var letter = new TimelineMax({ paused: true });
    var duration = 1.2;

    coverLeft
    .set($coverLeft, {
      attr: {
        transform: 'translate(1 -75) skewY(35)'
      }
    })
    .to($coverLeft, duration / 2, {
      attr: {
        transform: 'translate(1 75) skewY(-35)'
      },
    })
    .to($coverLeft, duration / 2, {
      attr: {
        transform: 'translate(1 -75) skewY(35)'
      },
      delay: duration / 3
    });

    coverRight
    .set($coverRight, {
      attr: {
        transform: 'translate(-1 245) skewY(-35)'
      },
    })
    .to($coverRight, duration / 2, {
      attr: {
        transform: 'translate(-1 -245) skewY(35)'
      },
    })
    .to($coverRight, duration / 2, {
      attr: {
        transform: 'translate(-1 245) skewY(-35)'
      },
      delay: duration / 3
    })

    letter
    .set($letter, {
      attr: {
        transform: 'translate(1 1)'
      }
    })
    .to($letter, 1, {
      attr: {
        transform: 'translate(1 140)'
      },
      ease: Linear.easeIn,
      delay: 0.4
    });

    $icon.on('mouseenter', function() {
      coverLeft.restart();
      coverRight.restart();
      letter.restart();
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
