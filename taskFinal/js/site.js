$(window).scroll(function () {
    var sticky = $('.navbar-menu'),
        scroll = $(window).scrollTop();

    if (scroll >= 100) {
        sticky.addClass('fixed-class');
    }

    else {sticky.removeClass('fixed-class');}
});


