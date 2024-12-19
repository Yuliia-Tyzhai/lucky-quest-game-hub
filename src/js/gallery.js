import Swiper from 'swiper/bundle';
import 'swiper/css';

new Swiper('.swiper-slide', {
  navigation: {
    nextEl: '.swiper-button-prev',
    prevEl: '.swiper-button-next',
  },
});
