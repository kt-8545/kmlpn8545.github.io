$(document).ready(function() {

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 100) {
            $(".main-header").addClass("header-sticky");
        } else {
            $(".main-header").removeClass("header-sticky");
        }
    });



    $('.toggle-bar').click(function() {
        $(this).toggleClass('active');
        $('.header-nav').toggleClass('active');

    });



    // owl-clouser js



    $('#slider').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dots: false,
        smartSpeed: 300,
        autoplay: true,
        responsive: {
            0: {

                items: 1
            },
            600: {
                nav: true,
                items: 1
            },
            767: {

                items: 2
            },
            1000: {
                items: 3
            },
            1400: {
                items: 4
            }

        }

    })



    // owl-clouser js
    //  slider-2

    $('#slider-2').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        dots: true,
        smartSpeed: 300,
        autoplay: true,
        responsive: {
            0: {

                items: 1
            },
            600: {
                dots: false,
                smartSpeed: 0,
                autoplay: false,
                items: 1
            },
            1000: {
                items: 1
            }

        }

    })






    $(".tabs-list li a").click(function(e) {
        e.preventDefault();
    });

    $(".tabs-list li").click(function() {
        var tabid = $(this).find("a").attr("href");
        $(".tabs-list li,.tabs div.tab").removeClass("active"); // removing active class from tab

        $(".tab").hide(); // hiding open tab
        $(tabid).show(); // show tab
        $(this).addClass("active"); //  adding active class to clicked tab

    });

});