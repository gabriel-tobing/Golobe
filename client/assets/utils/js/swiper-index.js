const swiper = new Swiper(".reviews-swiper", {
    slidesPerView: 3,
    spaceBetween: 50,
    loop: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 100,
        },
        600: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
    },
});