$(window).scroll(function () {
    var sticky = $('.navbar-menu'),
        scroll = $(window).scrollTop();

    if (scroll >= 143) {
        sticky.addClass('fixed-class');
    }

    else {sticky.removeClass('fixed-class');}
});




$("#nav-feedback").click(function() {
    $('html, body').animate({
        scrollTop: $("#clients-says").offset().top
    }, 2000);
});

$("#nav-about").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 2000);
});



$("#nav-our").click(function() {
    $('html, body').animate({
        scrollTop: $("#our-cars").offset().top
    }, 2000);
});


$("#nav-sell").click(function() {
    $('html, body').animate({
        scrollTop: $("#select-car").offset().top
    }, 2000);
});


$("#nav-why").click(function() {
    $('html, body').animate({
        scrollTop: $("#why-choose").offset().top
    }, 2000);
});

$("#nav-special").click(function() {
    $('html, body').animate({
        scrollTop: $("#specials").offset().top
    }, 2000);
});

$('#myTab a').on('click', function (e) {
    e.preventDefault()
    $('#myTab a[href="#profile"]').tab('show')
})