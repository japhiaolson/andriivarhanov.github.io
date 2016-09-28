(function() {

  if (isBrowserIE()) {
    var $icon = $('.icon-plans');
    var $coinShadow = $('.icon-plans__coin-shadow');
    var $coinTop = $('.icon-plans__coin-top');
    var coinOut = new TimelineMax({ paused: true });
    var coinBounce = new TimelineMax({ paused: true });

    coinOut.set($coinShadow, {
      attr: {
        transform: 'translate(-1 1) rotate(1 561 519)'
      },
    }).to($coinShadow, 0.5, {
      attr: {
        transform: 'translate(-500 1) rotate(-120 561 519)'
      },
      delay: 0.16667
    });

    coinBounce
    .set($coinTop, {
      attr: {
        transform: 'translate(0 1)'
      },
    })
    .to($coinTop, 0.25, {
      attr: {
        transform: 'translate(0 -150)'
      },
    })
    .to($coinTop, 0.1, {
      attr: {
        transform: 'translate(0 1)'
      },
      delay: 0.25
    });

    $icon.on('mouseenter', function() {
      coinOut.restart();
      coinBounce.restart();
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
