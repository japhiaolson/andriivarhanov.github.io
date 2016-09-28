(function() {

  if (isBrowserIE()) {
    var $icon = $('.icon-home');
    var $sun = $('.icon-home__sun');
    var $cloud = $('.icon-home__cloud');
    var sunInOut = new TimelineMax({ paused: true });
    var cloudInOut = new TimelineMax({ paused: true });

    sunInOut
    .set($sun, {
      attr: {
        transform: 'translate(0 0) scale(1 1)'
      },
    })
    .to($sun, 0.5, {
      attr: {
        transform: 'translate(-78 13) scale(0.8 0.8)'
      },
      delay: 0.16667
    })
    .to($sun, 0.5, {
      attr: {
        transform: 'translate(-150 -120) scale(1 1)'
      },
      delay: 0.66667
    })
    .to($sun, 0.5, {
      attr: {
        transform: 'translate(0 0) scale(1 1)'
      },
      delay: 1
    });

    cloudInOut
    .set($cloud, {
      attr: {
        transform: 'translate(160 423) scale(1 1)'
      },
    })
    .to($cloud, 0.25, {
      attr: {
        transform: 'translate(220 323) scale(1.3 1.3)'
      },
    })
    .to($cloud, 0.25, {
      attr: {
        transform: 'translate(220 323) scale(1.3 1.3)'
      },
      delay: 0.25
    })
    .to($cloud, 0.25, {
      attr: {
        transform: 'translate(160 423) scale(1 1)'
      },
      delay: 0.75
    });

    $icon.on('mouseenter', function() {
      sunInOut.restart();
      cloudInOut.restart();
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
