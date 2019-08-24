$(document).ready(function(){
     paceOptions = {
       ajax: true,
       document: true,
       eventLag: false
       };
       Pace.on('done', function() {
       $('.p').delay(10000).animate({top: '-100%'}, 5000, $.bez([0.19,1,0.22,1]));
       $('#preloader').delay(9000).animate({top: '-100%'}, 5000, $.bez([0.19,1,0.22,1]));
       TweenMax.from('.land-page', 2, {
            delay: 1.8,
                 y: 0,
                 opacity: 1,
                 ease: Expo.easeInOut
           });           
      });
      if ( ! sessionStorage.getItem( 'doNotShow' ) ) {
          sessionStorage.setItem( 'doNotShow', true );
          Pace();
      } else {
         $ ('#preloader').hide();
         $('.logo').css('animation-delay', '0.5s');
      }
      
});
