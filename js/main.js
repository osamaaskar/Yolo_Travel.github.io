$(function(){
    
    "use strict"
    
    //Toggle Menu Icon
    $('.menu-toggle').click(function(){
        $('.menu').toggleClass('active');
    });
    
    //Size Of Window
    var winh =$(window).height();
    $('.header').height(winh);
    
    //Scroll To Section
    
   $('.menu-link').click(function(e){
       
       e.preventDefault();

    $('body,html').animate({
      scrollTop: $('#' + $(this).data('scroll')).offset().top
    },1000);
    $(this).parent().addClass('b-active').siblings().removeClass('b-active');
  });
    
    
    //Show Scroll Button
      $(window).scroll(function(){
        var n = $(this).scrollTop();
        if(n > 250){
          $('.sroll-button i').fadeIn();
        } else{
          $('.sroll-button i').fadeOut();
        }
      });
    //Scroll To Top By Button
      $('.sroll-button i').click(function(){
        $('body,html').animate({
          scrollTop :0
        },1000);
      });
    
});

//Spinner Loading When Window Is Loading

$(window).on('load',function(){
    $('.spinner').fadeOut(2000,function(){
        $('.loading').fadeIn(2000);
    });
});