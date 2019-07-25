$(document).ready(function(){

// Header scroll

    mainHeader();

    $(window).on('scroll', function() {
        mainHeader();
    });
    function mainHeader(){
        console.log($(window).scrollTop());
        if($(window).scrollTop() > 242){
            $(".header__elements").fadeIn();
        } else{
            $(".header__elements").fadeOut();
        }
    }

// Button modals

    $(".header__button--search").on('click', function() {
        $(".search").fadeIn();
    });

// Slider

    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.slider__nav',
    });

    $('.slider__nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider',
        arrows: false,
        dots: false,
        centerMode: false,
        focusOnSelect: true,
    });

});