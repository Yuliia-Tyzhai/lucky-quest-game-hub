/* empty css                      */import{S as l}from"./assets/vendor-7d212bb0.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();document.addEventListener("DOMContentLoaded",s=>{const n=document.querySelectorAll(".header-nav-link");n.forEach(r=>{r.addEventListener("click",function(c){c.preventDefault(),n.forEach(a=>a.classList.remove("active")),r.classList.add("active")})}),document.addEventListener("click",function(r){r.target.classList.contains("header-nav-link")||n.forEach(c=>c.classList.remove("active"))});const o=document.querySelector(".mobile-menu-open-btn"),i=document.querySelector(".mobile-menu-wraper"),e=document.querySelector(".mobile-menu-wraper-btn-close");o.addEventListener("click",()=>{i.classList.add("is-open")}),e.addEventListener("click",()=>{i.classList.remove("is-open")}),document.addEventListener("keydown",r=>{r.key==="Escape"&&i.classList.remove("is-open")}),document.querySelectorAll(".mobile-menu-item").forEach(function(r){r.addEventListener("click",function(){i.classList.remove("is-open")})})});document.addEventListener("DOMContentLoaded",function(){const s=document.querySelector(".reviews-swiper");if(s){new l(s,{slidesPerView:1,loop:!0,spaceBetween:20,pagination:{el:".reviews-swiper-pagination",type:"custom",renderCustom:function(o,i,e){let t="";for(let r=0;r<e;r++)t+=`
              <svg class="reviews-pagination-dot ${r===i-1?"active":""}" width="32" height="32">
                <use href="./img/reviews/sprite.svg#icon-reviews-pagination-dot"></use>
              </svg>
            `;return t}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{320:{slidesPerView:1},1200:{slidesPerView:3}}});const n=document.createElement("style");n.innerHTML=`
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
    `,document.head.appendChild(n)}else console.error("Swiper element not found")});document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".faq-question-text").forEach(n=>{n.addEventListener("click",()=>{const o=n.closest(".faq-item"),i=o.querySelector(".faq-answer"),e=n.getAttribute("aria-expanded")==="true";console.log(document.querySelectorAll(".faq-answer")),document.querySelectorAll(".faq-item").forEach(t=>{t!==o&&(t.querySelector(".faq-answer").style.maxHeight=null,t.classList.remove("open"),t.querySelector(".faq-question-text").setAttribute("aria-expanded","false"))}),e?(i.style.maxHeight=null,n.setAttribute("aria-expanded","false"),o.classList.remove("open")):(i.style.maxHeight=i.scrollHeight+"px",n.setAttribute("aria-expanded","true"),o.classList.add("open"))})})});
//# sourceMappingURL=commonHelpers.js.map
