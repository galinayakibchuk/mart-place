$(function(){

    $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 0,
        max: 400,
        from: 30,
        to: 300,
        grid: true,
        prefix: "$"
    });
        

    $('input[type="file"], select').styler();



    $('.sorting__icons-list').on('click', function(){
        $('.product__category-item').addClass('list');
        $('.sorting__icons-list').addClass('active');
        $('.sorting__icons-grid').removeClass('active')
    });
    $('.sorting__icons-grid').on('click', function(){
        $('.product__category-item').removeClass('list');
        $('.sorting__icons-grid').addClass('active');
        $('.sorting__icons-list').removeClass('active')
    });

    $('.sorting__category-new').on('click', function(){
        $('.sorting__category-new').addClass('active');
        $('.sorting__category-popular').removeClass('active');
    });
    $('.sorting__category-popular').on('click', function(){
        $('.sorting__category-popular').addClass('active');
        $('.sorting__category-new').removeClass('active');
    });

    
    $('.rate-star').rateYo({
        rating: 5,
        starWidth: "12px",
        readOnly: true
    });


    $('.slider__inner').slick({
        prevArrows: '<button class="slick-prev slick-arrow lnr lnr-chevron-right></button>',
        nextArrows: '<button class="slick-next slick-arrow lnr lnr-chevron-left"></button>',
        infinite: true
        
    });



    $('.followers__items').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: false
      });
          
    
    try{
        var mixer = mixitup('.newest__items');
    }
    catch{

    } 

    try{
        var mixer2 = mixitup('.product__category-items');
    }
    catch{
        
    }
    
});