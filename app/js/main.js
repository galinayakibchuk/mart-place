$(function(){

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
          
    
    var mixer = mixitup('.newest__items');


    
});