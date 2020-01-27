// jQuery Basics

$(document).ready(function() {

    // 1. Make a sticky navigation
    $('#section-features').waypoint(function(direction) {
        if (direction == 'down') {
            $('nav').addClass('sticky-nav');
        } else {
            $('nav').removeClass('sticky-nav');
        }
    }, {
        offset: '60px'      // 60px before we hit the element
    });

    // 2. Scroll on button clicked
    // $('#scroll-to-plans').click(function() {
    //     $('html, body').animate({
    //         scrollTop: $('#section-plans').offset().top
    //     }, 1000);       // scroll to the top of section-plans with the speed of 1s
    // });
    
    // $('#scroll-to-features').click(function() {
    //     $('html, body').animate({
    //         scrollTop: $('#section-features').offset().top
    //     }, 500);       // scroll to the top of section-plans with the speed of 1s
    // })

        // => you can comment this block and use the href attribute

    // 3. Add some animation on scroll
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });

    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });

    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });

    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated pulse');
    }, {
        offset: '50%'
    });

    // 4. Mobile navigation button
    $('#btn-mobile-nav').click(function() {
        var nav = $('#main-nav');
        var icon = $('#btn-mobile-nav i');

        nav.slideToggle(200);

        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }
    });

});