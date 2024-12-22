/* empty css                      */import{S as c}from"./assets/vendor-7d212bb0.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();document.addEventListener("DOMContentLoaded",s=>{const n=document.querySelectorAll(".header-nav-link");n.forEach(i=>{i.addEventListener("click",function(a){n.forEach(l=>l.classList.remove("active")),i.classList.add("active")})}),document.addEventListener("click",function(i){i.target.classList.contains("header-nav-link")||n.forEach(a=>a.classList.remove("active"))});const o=document.querySelector(".mobile-menu-open-btn"),r=document.querySelector(".mobile-menu-wraper"),e=document.querySelector(".mobile-menu-wraper-btn-close");o.addEventListener("click",()=>{r.classList.add("is-open")}),e.addEventListener("click",()=>{r.classList.remove("is-open")}),document.addEventListener("keydown",i=>{i.key==="Escape"&&r.classList.remove("is-open")}),document.querySelectorAll(".mobile-menu-item").forEach(function(i){i.addEventListener("click",function(){r.classList.remove("is-open")})})});document.querySelectorAll(".header-nav-link").forEach(s=>{s.addEventListener("click",function(n){n.preventDefault();const o=this.getAttribute("href").substring(1),r=document.getElementById(o);window.scrollTo({top:r.offsetTop-80,behavior:"smooth"})})});document.addEventListener("DOMContentLoaded",()=>{const s=new c(".swiper-container",{direction:"horizontal",loop:!0,slidesPerView:1.3,breakpoints:{320:{spaceBetween:16},1220:{spaceBetween:24}},centeredSlides:!0,mousewheel:!0,keyboard:{enabled:!0},navigation:{nextEl:".triangle-next",prevEl:".triangle-prev"},pagination:{el:".swiper-pagination",clickable:!0,renderBullet:function(n,o){return'<span class="'+o+'"></span>'},bulletClass:"swiper-pagination-bullet",bulletActiveClass:"swiper-pagination-bullet-active"},scrollbar:{el:".swiper-scrollbar"}});document.querySelector(".triangle-next").addEventListener("click",()=>{s.slideNext()}),document.querySelector(".triangle-prev").addEventListener("click",()=>{s.slidePrev()})});document.addEventListener("DOMContentLoaded",function(){const s=document.querySelector(".reviews-swiper");if(s){new c(s,{slidesPerView:1,loop:!0,spaceBetween:16,breakpoints:{320:{slidesPerView:1.1,spaceBetween:16},1200:{slidesPerView:3.1,spaceBetween:24}},pagination:{el:".reviews-swiper-pagination",type:"custom",renderCustom:function(o,r,e){let t="";for(let i=0;i<e;i++)t+=` 
              <svg class="reviews-pagination-dot ${i===r-1?"active":""}" width="32" height="32">
                <use href="./img/reviews/sprite.svg#icon-reviews-pagination-dot"></use>
              </svg>
            `;return t}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},noSwipingClass:"no-swiping",touchMoveStopPropagation:!0});const n=document.createElement("style");n.innerHTML=`
      
      .reviews-swiper-pagination {
        display: flex;
        justify-content: center;
        gap: 4px;
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
      .swiper-button-prev,
      .swiper-pagination {
        display: none !important;
      }

      
      @media (min-width: 1200px) {
        .reviews-swiper-pagination,
        .reviews-button-next,
        .reviews-button-prev {
          display: flex !important;
          gap: 4px !important;
        }
      }

      
      @media (max-width: 1199px) {
        .reviews-swiper-pagination,
        .swiper-button-next,
        .swiper-button-prev {
          display: none !important;
        }
      }

    `,document.head.appendChild(n)}else console.error("Swiper element not found")});document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".faq-question-text").forEach(n=>{n.addEventListener("click",()=>{const o=n.closest(".faq-item"),r=o.querySelector(".faq-answer"),e=n.getAttribute("aria-expanded")==="true";console.log(document.querySelectorAll(".faq-answer")),document.querySelectorAll(".faq-item").forEach(t=>{t!==o&&(t.querySelector(".faq-answer").style.maxHeight=null,t.classList.remove("open"),t.querySelector(".faq-question-text").setAttribute("aria-expanded","false"))}),e?(r.style.maxHeight=null,n.setAttribute("aria-expanded","false"),o.classList.remove("open")):(r.style.maxHeight=r.scrollHeight+"px",n.setAttribute("aria-expanded","true"),o.classList.add("open"))})})});
//# sourceMappingURL=commonHelpers.js.map
