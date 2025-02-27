export function initializeSwiper() {
  const swiper = new Swiper(".swiper", {
    direction: "horizontal",
    loop: true,

    pagination: {
      el: ".swiper-pagination",
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1440: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
    navigation: false,

    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });

  // Add event listeners to external buttons
  document.getElementById("nextSlideBtn")?.addEventListener("click", () => {
    swiper.slideNext();
  });

  document.getElementById("prevSlideBtn")?.addEventListener("click", () => {
    swiper.slidePrev();
  });

  return swiper;
}
