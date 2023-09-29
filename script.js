var swiper = new Swiper(".portofolio-swipper", {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },
  breakpoints: {
    // when window width is >= 320px
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    1200: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
  },
});
