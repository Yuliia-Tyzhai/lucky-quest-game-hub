import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

document.addEventListener('DOMContentLoaded', function () {
  const swiperEl = document.querySelector('.reviews-swiper');

  if (swiperEl) {
    const swiper = new Swiper(swiperEl, {
      slidesPerView: 1, // За замовчуванням 1 слайд
      loop: true,
      spaceBetween: 20, // Міжслайдова відстань
      pagination: {
        el: '.reviews-swiper-pagination', // Вказуємо елемент пагінації
        type: 'custom', // Вказуємо користувацьку пагінацію
        renderCustom: function (swiper, current, total) {
          // Генеруємо власні крапки пагінації (SVG-іконки)
          let paginationHTML = '';
          for (let i = 0; i < total; i++) {
            paginationHTML += `
              <svg class="reviews-pagination-dot ${
                i === current - 1 ? 'active' : ''
              }" width="32" height="32">
                <use href="./img/reviews/sprite.svg#icon-reviews-pagination-dot"></use>
              </svg>
            `;
          }
          return paginationHTML;
        },
      },
      navigation: {
        nextEl: '.swiper-button-next', // Вказуємо елемент для стрілки вправо
        prevEl: '.swiper-button-prev', // Вказуємо елемент для стрілки вліво
      },
      breakpoints: {
        320: {
          slidesPerView: 1, // 1 слайд на маленьких екранах
        },
        1200: {
          slidesPerView: 3, // 3 слайди на великих екранах
        },
      },
    });

    // Додаємо стилі для пагінації та стрілок
    const style = document.createElement('style');
    style.innerHTML = `
      /* Стилі для пагінації */
      .reviews-swiper-pagination {
        display: flex;
        justify-content: center;
        gap: 8px;
        margin-top: 16px;
      }

      .reviews-pagination-dot {
        cursor: pointer;
        opacity: 0.7;
        transition: opacity 0.3s ease;
      }

      .reviews-pagination-dot.active {
        opacity: 1;
      }

      /* Стилі для стрілок */
      .swiper-button-next,
      .swiper-button-prev {
        display: flex;
        align-items: center;
        justify-content: center;
        background: transparent;
        border: none;
        cursor: pointer;
      }

      .swiper-button-next svg,
      .swiper-button-prev svg {
        width: 14x;
        height: 26px;
        fill: black;
      }
    `;
    document.head.appendChild(style);
  } else {
    console.error('Swiper element not found');
  }
});
