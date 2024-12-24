import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 2,
    centeredSlidesBounds: true,
    spaceBetween: 24,
    320: {
      slidesPerView: 1.3,
      spaceBetween: 16,
    },
    1200: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    centeredSlides: true,
    mousewheel: true,
    keyboard: {
      enabled: true,
    },
    navigation: {
      nextEl: '.triangle-next',
      prevEl: '.triangle-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      bulletClass: 'swiper-pagination-bullet',
      bulletActiveClass: 'swiper-pagination-bullet-active',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
  document.querySelector('.triangle-next').addEventListener('click', () => {
    swiper.slideNext();
  });
  document.querySelector('.triangle-prev').addEventListener('click', () => {
    swiper.slidePrev();
  });
});
