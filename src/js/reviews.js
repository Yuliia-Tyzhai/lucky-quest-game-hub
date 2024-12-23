import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

document.addEventListener('DOMContentLoaded', function () {
  const swiperEl = document.querySelector('.reviews-swiper');

  if (swiperEl) {
    const swiper = new Swiper(swiperEl, {
      slidesPerView: 1,
      loop: true,
      spaceBetween: 16,
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 16,
        },
        1200: {
          slidesPerView: 3.1,
          spaceBetween: 24,
        },
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        bulletClass: 'swiper-pagination-bullet',
        bulletActiveClass: 'swiper-pagination-bullet-active',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });
    document
      .querySelector('.triangle-next-rew')
      .addEventListener('click', () => {
        swiper.slideNext();
      });
    document
      .querySelector('.triangle-prev-rew')
      .addEventListener('click', () => {
        swiper.slidePrev();
      });
  }
});
