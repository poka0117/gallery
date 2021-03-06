// 最初のtransition 回避
$(document).ready(function(){
    $('body').fadeIn();
})

// header
$(document).ready(function(){
    $(window).scroll(function(){
        let scroll = $(this).scrollTop();
        if(scroll > $(window).height()/5){
            $('header').addClass('header_after');
        }else{
            $('header').removeClass('header_after');
        }
    })
})


// hamburger
$(document).ready(function(){
    $('.hamburger').on('click',function(){
        // navの開閉
        $('nav').slideToggle();
        // hamburger_barの変形
        $('.bar1').toggleClass('bar1_after');
        $('.bar2').toggleClass('bar2_after');
        $('.bar3').toggleClass('bar3_after');
    });
})

// topimg
$(document).ready(function(){
    $(window).scroll(function(){
        let scroll = $(this).scrollTop();
        // PC
        if($(window).width() > 1024){
            let imgWidth = 33.33333 + scroll/10;
            $('.top img').css({'width': imgWidth + '%'});
        }else{
            let imgWidth = 100 - scroll/5;
            if(imgWidth > 33.33333){
                $('.top img').css({'width': imgWidth + '%'});
            }else{
                $('.top img').css({'width': 33.33333 + '%'});
            }
        }
    })
})

// main & right_menu

$(window).on('load',function(){
    let titleOffset = $('.title').offset().top;
    let infomationOffset = $('section.infomation').offset().top;
    let galleryTitleOffset = $('section.gallery h2').offset().top;
    let accesstoffset = $('section.access h2').offset().top;
    let contactTitleOffset = $('section.contact h2').offset().top;
    var galleryimgoffset1 = $('.imgWrapper_1').offset().top;
    var galleryimgoffset2 = $('.imgWrapper_2').offset().top; 
    var galleryimgoffset3 = $('.imgWrapper_3').offset().top; 
    var galleryimgoffset4 = $('.imgWrapper_4').offset().top; 
    var galleryimgoffset5 = $('.imgWrapper_5').offset().top;
    var galleryimgoffset6 = $('.imgWrapper_6').offset().top; 

    $(window).scroll(function(){
        let scroll = $(this).scrollTop() + $(window).height();
        if(scroll > titleOffset){
            $('.title').addClass('fadeIn');
        }
        if(scroll > infomationOffset){
            $('section.infomation').addClass('fadeIn');
        }
        if(scroll > galleryTitleOffset){
            $('section.gallery h2').addClass('fadeIn');
            $('.right_menu').addClass('right_menu_after');
        }
       
        if(scroll > galleryimgoffset1){
            $('.imgWrapper_1').addClass('fadeIn');
        }
   
        if(scroll > galleryimgoffset2){
            $('.imgWrapper_2').addClass('fadeIn');
        }
      
        if(scroll > galleryimgoffset3){
            $('.imgWrapper_3').addClass('fadeIn');
        }

        if(scroll > galleryimgoffset4){
            $('.imgWrapper_4').addClass('fadeIn');
        }
       
        if(scroll > galleryimgoffset5){
            $('.imgWrapper_5').addClass('fadeIn');
        }
    
        if(scroll > galleryimgoffset6){
            $('.imgWrapper_6').addClass('fadeIn');
        }
        // right_menu hide
       
        if(galleryTitleOffset < scroll && scroll < accesstoffset){
            $('.right_menu').addClass('right_menu_after');
        }else{
            $('.right_menu').removeClass('right_menu_after');
        }
          // bg_flower hidden
        if( accesstoffset < scroll && scroll < contactTitleOffset){
            $('.flower_bg').addClass('flower_bg_after');
        }else{
            $('.flower_bg').removeClass('flower_bg_after');
        }
    })
})

