import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    centeredSlides: true,
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
  });
  document.querySelector('.triangle-next').addEventListener('click', () => {
    swiper.slideNext();
  });
  document.querySelector('.triangle-prev').addEventListener('click', () => {
    swiper.slidePrev();
  });
});
