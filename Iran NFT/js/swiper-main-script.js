let swiper1 = new Swiper(".swiper_slider_1", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
},
    breakpoints: {
    // when window width is >= 320px
    320: {
            slidesPerView: 2,
            spaceBetween: 20
        },
            // when window width is >= 480px
    480: {
            slidesPerView: 2,
            spaceBetween: 30
        },
            // when window width is >= 640px
    768: {
            slidesPerView: 3,
            spaceBetween: 30
        }
    }
});