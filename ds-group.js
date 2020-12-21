$(document).ready(function(){

    /* Carousel Front Page - News - Start */
    $('#block2287').children('section').children('.container').children('.landing-block-inner').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    /* Carousel Front Page - News - End */

    $('#block2462').children('section').children('.container').children('.landing-block-inner').slick();

});
/* Carousel News - end */



