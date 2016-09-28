(function() {


  if (isBrowserIE()) {

    var $icon = $('.icon-leadership');
    var $hand = $('.icon-leadership__hand');
    var $necktie = $('.icon-leadership__necktie');
    var handInOut = new TimelineMax();
    var necktieMove = new TimelineMax();
    var duration = 3;
    // $animation-duration: 3s;
    //
    // $color-duration: $animation-duration / 10;
    // $color-delay: $animation-duration / 3;
    //
    // $hand-on-duration: $animation-duration * 0.7;
    // $hand-on-delay: 0s;
    //
    // $necktie-duration: $hand-on-duration / 2;
    // $necktie-delay: $hand-on-duration / 4;


    // <g class="icon-leadership__hand" transform="translate(250 50)">

    // 0.5s ease-out 0.16667s
    // translateX(-500px) rotate(-120deg)
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
    })
    .pause();

    necktieMove
    .set($necktie, {
      attr: {
        transform: 'translate(1 1)'
      },
      // ease: Bounce.easeOut
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
      // ease: Bounce.easeOut,
      delay: 0.1 * duration * 0.4
    })
    .to($necktie, 0.1, {
      attr: {
        transform: 'translate(1 1)'
      },
      // ease: Bounce.easeOut,
      delay: 0.1 * duration * 0.6
    })
    .pause();

    $icon.on('mouseenter', function() {
      // if(handInOut.progress() === 1 && necktieMove.progress() === 1) {
        handInOut.restart();
        necktieMove.restart();
      // } else {
        // handInOut.play();
        // necktieMove.play();
      // }

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
