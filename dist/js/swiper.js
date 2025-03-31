// slider-gallery-1
if ((".slider-gallery-1").length > 0) {
    var swiper = new Swiper(".slider-gallery-1", {
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            400: {
                slidesPerView: 2,
            },
            767: {
                slidesPerView: 3.2,
            },
            1280: {
                slidesPerView: 5,
            },
        },
    });
}
if ((".slider-gallery-2").length > 0) {
    var swiper = new Swiper(".slider-gallery-2", {
        spaceBetween: 50,
        centeredSlides: true,
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            500: {
                slidesPerView: 2,
            },
            750: {
                slidesPerView: 2,
            },
            1280: {
                slidesPerView: 3,
            },
            1500: {
                slidesPerView: 3.5,
            },
            1800: {
                slidesPerView: 4.4,
            },

        },
    });
}


// slider-food-offer
if ((".slider-food-offer").length > 0) {
    var swiper = new Swiper(".slider-food-offer", {
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            550: {
                slidesPerView: 1.5,
            },
            654: {
                slidesPerView: 1.7,
            },
            767: {
                slidesPerView: 2,
            },
            870: {
                slidesPerView: 2.5,
            },
            1100: {
                slidesPerView: 3,

            },
            1300: {
                slidesPerView: 3.5,

            },
            1500: {
                slidesPerView: 4,
            },
            1800: {
                slidesPerView: 4.5,
            },
        },
    });
}
// slider-s-our-menu
if ($(".slider-partner").length > 0) {
    var swiper = new Swiper(".slider-partner", {
        slidesPerView: 6,
        freeMode: true,

        observer: true,
        observeParents: true,
        loop: true,
        autoplay: {
            pauseOnMouseEnter: true,
            delay: 0,
            disableOnInteraction: false,
        },
        speed: 2000,
        breakpoints: {
            0: {
                slidesPerView: 3,
                spaceBetween: 10,

            },
            450: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
            868: {
                slidesPerView: 5,
                spaceBetween: 30,
            },
            1400: {
                slidesPerView: 6,
                spaceBetween: 90,
            },
        },
    })
}

if ((".slider-page-title-home-1").length > 0) {
    var swiper = new Swiper(".slider-page-title-home-1", {
        // spaceBetween: 0,
        slidesPerView: 1,
        loop: true,
        // navigation: {
        //     nextEl: ".btn-slider-home.btn-next",
        //     prevEl: ".btn-slider-home.btn-prev",
        // },
    });
}

if ((".slider-page-title-home-2").length > 0) {
    var swiper = new Swiper(".slider-page-title-home-2", {
        slidesPerView: 1,
        loop: true,
        pagination: {
            el: '.pagination-page-title-home-2',
            clickable: true,
        },
    });
}
if ((".slider-testimonial1").length > 0) {
    var thumbSwiper = new Swiper(".slider-testimonial1", {
        slidesPerView: 1,
        spaceBetween: 0,
        // freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
    });
}
// slider-testimonial
if ((".slider-testimonial").length > 0) {
    var swiper = new Swiper(".slider-testimonial", {
        spaceBetween: 0,
        slidesPerView: 1,
        pagination: {
            el: ".pagination-testimonial",
            clickable: true,
        },
        thumbs: {
            swiper: thumbSwiper,
        },
    });
}

// slider-s-our-blog
if ($('.slider-s-our-blog').length > 0) {
    var swiper = new Swiper(".slider-s-our-blog", {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        navigation: {
            nextEl: ".navigation-s-our-blog.btn-next",
            prevEl: ".navigation-s-our-blog.btn-pre",
        },
        breakpoints: {
            0: {
                slidesPerView: 1,

            },
            550: {
                slidesPerView: 2,

            },
            991: {
                slidesPerView: 3,
            },
        },

    })
}
//slider-testimonial-home-2
if ((".slider-testimonial-home-2").length > 0) {
    var swiper = new Swiper(".slider-testimonial-home-2", {
        // spaceBetween: 0,
        slidesPerView: 1,
        loop: true,
        // pagination: {
        //     el: ".pagination-testimonial",
        //     clickable: true,
        // },
        navigation: {
            nextEl: ".btn-next.btn-testimonial-home-2",
            prevEl: ".btn-pre.btn-testimonial-home-2",
        },
    });
}
// slide-food-offer-2
if ($('.slide-food-offer-2').length > 0) {
    var swiper = new Swiper(".slide-food-offer-2", {
        slidesPerView: 3,
        spaceBetween: 40,
        centeredSlides: true,
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 20,

            },
            600: {
                slidesPerView: 1.4,
                spaceBetween: 20,

            },
            767: {
                slidesPerView: 1.7,
                spaceBetween: 20,

            },
            827: {
                slidesPerView: 2,
                spaceBetween: 20,

            },
            991: {
                slidesPerView: 2,
                spaceBetween: 20,

            },
            1340: {
                slidesPerView: 2.5,
            },
            1700: {
                slidesPerView: 3,
            },
        },

    })
}
// box-why-text-slide
if ((".box-why-text-slide").length > 0) {
    var swiper = new Swiper(".box-why-text-slide", {
        // spaceBetween: 0,
        slidesPerView: 1,
        loop: true,
        // pagination: {
        //     el: ".pagination-testimonial",
        //     clickable: true,
        // },
        navigation: {
            nextEl: ".btn-next.btn-box-why-slide",
            // prevEl: ".btn-pre.btn-testimonial-home-2",
        },
    });
}

if ($(".recommended-swiper-2").length > 0) {
    var thumbSwiper = new Swiper('.recommended-swiper-2', {
        slidesPerView: 1,
        spaceBetween: 0,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,

    });
}

if ($(".recommended-swiper-1").length > 0) {
    var swiper = new Swiper('.recommended-swiper-1', {
        slidesPerView: 1,
        spaceBetween: 0,
        thumbs: {
            swiper: thumbSwiper,
        },
        // navigation: {
        //     nextEl: ".slider-recommended-next",
        //     prevEl: ".slider-recommended-prev",
        // },

    });
}