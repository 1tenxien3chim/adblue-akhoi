$(function () {
    $(".box-banner-top").owlCarousel({
        items: 1,
        responsive: { 
            991: { items: 1},
            768: { items: 1 },
            480: { items: 1},
            0: { items: 1}
        },
        rewind: false,
        autoplay: false,
        autoplayHoverPause: true,
        autoplayTimeout: 5000,
        smartSpeed: 1000, //slide speed smooth
        dots: false,
        dotsEach: false,
        loop: true,
        nav: true,
        margin:0,
        navText: ['<i class="fa fa-angle-left arrow-slider"></i>', '<i class="fa fa-angle-right arrow-slider"></i>'],
        
        //animateOut: ['fadeOutUp', 'zoomOut', 'fadeOutLeft'], // default: false
        //animateIn: ['fadeInDown', 'zoomIn', 'fadeInLeft'], // default: false
        center: false,
    });  
});
