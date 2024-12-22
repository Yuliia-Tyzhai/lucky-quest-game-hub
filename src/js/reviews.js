import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

document.addEventListener('DOMContentLoaded', function () {
  const swiperEl = document.querySelector('.reviews-swiper');

  if (swiperEl) {
    const swiper = new Swiper(swiperEl, {
      slidesPerView: 1,
      loop: true,
      spaceBetween: 16, // Default space between for mobile

      breakpoints: {
        320: {
          slidesPerView: 1, // Один слайд на мобільних
          spaceBetween: 16, // Відстань між слайдами на мобільних
        },
        1200: {
          slidesPerView: 3, // Три слайди на десктопі
          spaceBetween: 24, // Відстань між слайдами на десктопі
        },
      },

      pagination: {
        el: '.reviews-swiper-pagination',
        type: 'custom',
        renderCustom: function (swiper, current, total) {
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
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      // Додаткові налаштування
      noSwipingClass: 'no-swiping', // Для виключення свайпу
      touchMoveStopPropagation: true,
    });

    // Додавання стилів
    const style = document.createElement('style');
    style.innerHTML = `
      /* Стилі для пагінації */
      .reviews-swiper-pagination {
        display: flex;
        justify-content: center;
        gap: 8px;
        margin-top: 24px; /* Відстань 24px під слайдами */
      }

      .reviews-pagination-dot {
        cursor: pointer;
        opacity: 0.7;
        transition: opacity 0.3s ease;
      }

      .reviews-pagination-dot.active {
        opacity: 1;
      }

      /* Стилі для кнопок навігації */
      .swiper-button-next,
      .swiper-button-prev {
        position: absolute;
        top: 50%;
        transform: translateY(-50%); /* Центрування по вертикалі */
        background: transparent;
        border: none;
        cursor: pointer;
      }

      .swiper-button-next {
        right: 10px;
      }

      .swiper-button-prev {
        left: 10px;
      }

      /* Розміри стрілок навігації */
      .swiper-button-next svg,
      .swiper-button-prev svg {
        width: 24px; /* Виправлено розмір */
        height: 24px;
        fill: black;
      }

      /* Загальні стилі для контейнера слайдера */
      .reviews-swiper-container {
        position: relative;
        padding-bottom: 50px; /* Місце для пагінації і кнопок */
      }

      /* Приховуємо дефолтні пагінацію і стрілки на всіх пристроях */
      .swiper-button-next,
      .swiper-button-prev,
      .swiper-pagination {
        display: none !important;
      }

      /* Показуємо кастомні пагінацію і стрілки на десктопах (після 1200px) */
      @media (min-width: 1200px) {
        .reviews-swiper-pagination,
        .swiper-button-next,
        .swiper-button-prev {
          display: block !important;
        }
      }

      /* Приховуємо кастомні пагінацію і стрілки на мобільних пристроях */
      @media (max-width: 1199px) {
        .reviews-swiper-pagination,
        .swiper-button-next,
        .swiper-button-prev {
          display: none !important;
        }
      }

    `;
    document.head.appendChild(style);
  } else {
    console.error('Swiper element not found');
  }
});
