// 最初のtransition 回避
$(document).ready(function(){
    $('body').fadeIn();
    console.log('iｔys');
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

$(window).ready(function(){
    let titleOffset = $('.title').offset().top;
    let infomationOffset = $('section.infomation').offset().top;
    let galleryTitleOffset = $('section.gallery h2').offset().top;
    let accesstoffset = $('section.access h2').offset().top/1.2;
    let contactTitleOffset = $('section.contact h2').offset().top/1.2;
    let windowW = $(this).width();
    if(windowW > 1024){
    let galleryimgoffset1 = $('.imgWrapper_1').offset().top;
    let galleryimgoffset2 = $('.imgWrapper_2').offset().top; 
    let galleryimgoffset3 = $('.imgWrapper_3').offset().top; 
    let galleryimgoffset4 = $('.imgWrapper_4').offset().top; 
    let galleryimgoffset5 = $('.imgWrapper_5').offset().top;
    let galleryimgoffset6 = $('.imgWrapper_6').offset().top; 
    }else{
    let galleryimgoffset1 = $('.imgWrapper_1').offset().top;
        return galleryimgoffset1;
        console.log(galleryimgoffset1);
    let galleryimgoffset2 = $('.imgWrapper_2').offset().top/1.3; 
    let galleryimgoffset3 = $('.imgWrapper_3').offset().top/1.3; 
    let galleryimgoffset4 = $('.imgWrapper_4').offset().top/1.3; 
    let galleryimgoffset5 = $('.imgWrapper_5').offset().top/1.3;
    let galleryimgoffset6 = $('.imgWrapper_6').offset().top/1.3; 
    }
    console.log(galleryimgoffset1);
  console.log(galleryimgoffset1+'after');
    $(window).scroll(function(){
        let scroll = $(this).scrollTop() + $(window).height()/1;
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
        const flowerImg1 = $(".imgWrapper_1 img").height();
        if(scroll > galleryimgoffset1){
            $('.imgWrapper_1').addClass('fadeIn');
        }
        const flowerImg2 = $(".imgWrapper_2 img").height();
        if(scroll > galleryimgoffset2 + flowerImg1){
            $('.imgWrapper_2').addClass('fadeIn');
        }
        const flowerImg3 = $(".imgWrapper_3 img").height();
        if(scroll > galleryimgoffset3 + flowerImg1 + flowerImg2){
            $('.imgWrapper_3').addClass('fadeIn');
        }
        const flowerImg4 = $(".imgWrapper_4 img").height();
        if(scroll > galleryimgoffset4 + flowerImg1 + flowerImg2 + flowerImg3){
            $('.imgWrapper_4').addClass('fadeIn');
        }
        const flowerImg5 = $(".imgWrapper_5 img").height();
        if(scroll > galleryimgoffset5 + flowerImg1 + flowerImg2 + flowerImg3 + flowerImg4){
            $('.imgWrapper_5').addClass('fadeIn');
        }
        const flowerImg6 = $(".imgWrapper_6 img").height();
        if(scroll > galleryimgoffset6 + flowerImg1 + flowerImg2 + flowerImg3 + flowerImg4 + flowerImg5){
            $('.imgWrapper_6').addClass('fadeIn');
        }
        // right_menu hide
        const all_imgoffser = + flowerImg1 + flowerImg2 + flowerImg3 + flowerImg4 + flowerImg5 + flowerImg6;
        if(galleryTitleOffset < scroll && scroll < accesstoffset + all_imgoffser){
            $('.right_menu').addClass('right_menu_after');
        }else{
            $('.right_menu').removeClass('right_menu_after');
        }
          // bg_flower hidden
        if( accesstoffset + all_imgoffser < scroll && scroll < contactTitleOffset + all_imgoffser){
            $('.flower_bg').addClass('flower_bg_after');
        }else{
            $('.flower_bg').removeClass('flower_bg_after');
        }
    })
})

