$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 500);
        return false;
      }
    }
  });
});

$(function(){ 
    var targets = $(".scrollaffordance");
    if($(window).scrollTop() > 30){
      targets.hide();
    }
    $(window).scroll(function(){
        var pos = $(window).scrollTop();
        if(pos > 30){
            targets.stop(true, true).fadeOut(500);
        } else {
            targets.stop(true, true).fadeIn(500);
        }
    });

});
