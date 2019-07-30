$(function(){ 
    var targets = $(".scrollaffordance");
    if($(window).scrollTop() > 10){
      targets.hide();
    }
    $(window).scroll(function(){
        var pos = $(window).scrollTop();
        if(pos > 10){
            targets.stop(true, true).fadeOut( "4000" );
        } else {
            targets.stop(true, true).fadeIn( "4000" );
        }
    });

});