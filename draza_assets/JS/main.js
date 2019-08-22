$(document).ready(function(){
     paceOptions = {
       ajax: true,
       document: true,
       eventLag: false
       };
       Pace.on('done', function() {
       $('.p').delay(15000).animate({top: '-100%'}, 5000, $.bez([0.19,1,0.22,1]));
       $('#preloader').delay(15000).animate({top: '-100%'}, 5000, $.bez([0.19,1,0.22,1]));
       TweenMax.from('.land-page', 2, {
            delay: 1.8,
                 y: 0,
                 opacity: 1,
                 ease: Expo.easeInOut
           });
      });

});
