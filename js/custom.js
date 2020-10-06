$(function () {

    
    
// =========banner-slide======
    
    $('.banner-slide').slick({
        arrows: true,
        prevArrow: ".left-arrow",
        nextArrow: ".right-arrow",
        dots: false,
        autoplay: false,
        autoplaySpeed: 2000
    });

    
    
//    =======team_slider======
    
    
    $('.team_slider').slick({
        arrows:false,
        dots:true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });
    

//    ========single_slide======
    
    $('.single_slide').slick({
        arrows: false,
        dots: true,
        autoplay: false,
        autoplaySpeed: 1000,
    });

    
//    =======clients_slide=======
    
    
    $('.clients_slide').slick({
        arrows: true,
        prevArrow: ".left_arrow",
        nextArrow: ".right_arrow",
        dots: true,
        autoplay: false,
        autoplaySpeed: 2000
    });
    

//    =======mixitup======
    
    
       var mixer = mixitup('.works_area');
    
//    ========counterUp======
    
    $('.count').counterUp({
        delay: 10,
        time: 2000,
    });
    
    
    
 
});
