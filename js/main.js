$(function(){

   $('.photo__slider').slick({
        prevArrow: '<button type="button" class="slick-prew"><img src="images/arrow__left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/arrow__right.svg"></button>',
   });
   
   $('.burger__list').on('click' , function(){
        $('.menu__links').slideToggle();
   });

});