$(function () {
    "use strict";
    //    sticky navbar
    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();
        var sticky = $(".sticky-top");
        if (scrolling >= 110) {
            sticky.addClass("navbg");
        } else {
            sticky.removeClass("navbg");
        }
    });
    //    filter-plugin
    $('.portfolios').filterData({
        aspectRatio: '8:5',
        nOfRow: 3,
        itemDistance: 0
    });
    $('.portfolio-controllers button').on('click', function () {
        $('.portfolio-controllers button').removeClass('active-work');
        $(this).addClass('active-work');
    });

    var _gaq = _gaq || [];
    _gaq.push(['_setAccount', 'UA-36251023-1']);
    _gaq.push(['_setDomainName', 'jqueryscript.net']);
    _gaq.push(['_trackPageview']);

    (function () {
        var ga = document.createElement('script');
        ga.type = 'text/javascript';
        ga.async = true;
        ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(ga, s);
    })();
    //    counter part
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    //    animation scroll js
    var html_body = $('html, body');
    $('.nav-item a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 75
                }, 1500);
                return false;
            }
        }
    });
    //    wow js activation code
    new WOW().init();
    //    veno box activation code
    $('.venobox').venobox();

    // back to top    
    $(".back-top").click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 3000);
    });
    // back to top fadein/fadeout    
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $(".back-top").fadeIn();
        } else {
            $(".back-top").fadeOut();
        }
    });
    //    brand slider
    $('.all-brand').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        responsive: [
            {
                breakpoint: 430,
                settings: {
                    slidesToShow: 1,
                }
    },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                }
    },
            {
                breakpoint: 766,
                settings: {
                    slidesToShow: 3,
                }
    },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 4,
                }
    },
  ]
    });

    // Closes responsive menu when a scroll link is clicked
    $('.nav-link').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    })
    //    bolg slider
    $('.blog-slide').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        arrows: true,
        prevArrow: '.left',
        nextArrow: '.right',
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 1

                }
    },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2
                }
    },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1
                }
    },
  ]
    });
    //    team slider
    $('.team-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    autoplay: true,

                }
    },
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 2,
                    autoplay: true,
                }
    },
            {
                breakpoint: 950,
                settings: {
                    slidesToShow: 3,
                    autoplay: true,
                }
    },

  ]
    });
});
