(function() {

  if (isBrowserIE()) {
    var $icon = $('.icon-plans');
    var $coinShadow = $('.icon-plans__coin-shadow');
    var $coinTop = $('.icon-plans__coin-top');
    var coinOut = new TimelineMax();
    var coinBounce = new TimelineMax({ paused: true });

    // 0.5s ease-out 0.16667s
    // translateX(-500px) rotate(-120deg)
    coinOut.set($coinShadow, {
      attr: {
        transform: 'translate(-1 1) rotate(1 561 519)'
      },
    }).to($coinShadow, 0.5, {
      attr: {
        transform: 'translate(-500 1) rotate(-120 561 519)'
      },
      delay: 0.16667
    })
    .pause();

    coinBounce
    .set($coinTop, {
      attr: {
        transform: 'translate(0 1)'
      },
      // ease: Bounce.easeOut
    })
    .to($coinTop, 0.25, {
      attr: {
        transform: 'translate(0 -150)'
      },
      // ease: Bounce.easeOut
    })
    .to($coinTop, 0.1, {
      attr: {
        transform: 'translate(0 1)'
      },
      // ease: Bounce.easeOut,
      delay: 0.25
    });

    $icon.on('mouseenter', function() {
      if(coinOut.progress() === 1 && coinBounce.progress() === 1) {
        coinOut.restart();
        coinBounce.restart();
      } else {
        coinOut.play();
        coinBounce.play();
      }
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
