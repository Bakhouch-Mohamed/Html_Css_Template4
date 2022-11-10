// new WOW().init();

  $(document).ready(function(){

    $(window).scroll(function() {    
      var scroll = $(window).scrollTop();
      if (scroll >= 400) {
          $("nav").addClass("darker-nav");
      }
      else {
        $("nav").removeClass("darker-nav");
      }
    });

});