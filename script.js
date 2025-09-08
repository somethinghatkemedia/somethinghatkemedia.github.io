const swiper = new Swiper(".mySwiper", {
      loop: true,
      autoplay: {
        delay: 1000,
        disableOnInteraction: false,
      },
      navigation: {

        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 5,
        },
      },
    })

    const swiperTwo = new Swiper(".mySwiper-2", {
      loop: true,
      autoplay: {
        delay: 1000,
        disableOnInteraction: false,
      },
      navigation: {

        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
      },
    })