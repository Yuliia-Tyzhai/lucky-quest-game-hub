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
          slidesPerView: 1.1,
          spaceBetween: 16,
        },
        1200: {
          slidesPerView: 3.1,
          spaceBetween: 24,
        },
      },

      //   pagination: {
      //     el: '.reviews-swiper-pagination',
      //     type: 'custom',
      //     renderCustom: function (swiper, current, total) {
      //       let paginationHTML = '';
      //       for (let i = 0; i < total; i++) {
      //         paginationHTML += `
      //           <svg class="reviews-pagination-dot ${
      //             i === current - 1 ? 'active' : ''
      //           }" width="32" height="32">
      //             <use href="./img/reviews/sprite.svg#icon-reviews-pagination-dot"></use>
      //           </svg>
      //         `;
      //       }
      //       return paginationHTML;
      //     },
      //   },

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      noSwipingClass: 'no-swiping',
      touchMoveStopPropagation: true,
    });

    const style = document.createElement('style');
    style.innerHTML = `
      
    //   .reviews-swiper-pagination {
    //     display: flex;
    //     justify-content: center;
    //     gap: 4px;
    //     margin-top: 24px; /* Відстань 24px під слайдами */
    //   }

    //   .reviews-pagination-dot {
    //     cursor: pointer;
    //     opacity: 0.7;
    //     transition: opacity 0.3s ease;
    //   }

    //   .reviews-pagination-dot.active {
    //     opacity: 1;
    //   }

      
      .swiper-button-next,
      .swiper-button-prev {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
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

      .swiper-button-next svg,
      .swiper-button-prev svg {
        width: 24px;
        height: 24px;
        fill: black;
      }

      .reviews-swiper-container {
        position: relative;
      }

      
      .swiper-button-next,
      .swiper-button-prev {
        display: none !important;
      }

      
      @media (min-width: 1200px) {
    
        .reviews-button-next,
        .reviews-button-prev {
          display: flex !important;
          gap: 4px !important;
        }
      }

      
      @media (max-width: 1199px) {
        
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
