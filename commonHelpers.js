/* empty css                      */import{S as c}from"./assets/vendor-7d212bb0.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function o(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(t){if(t.ep)return;t.ep=!0;const n=o(t);fetch(t.href,n)}})();document.addEventListener("DOMContentLoaded",s=>{const e=document.querySelectorAll(".header-nav-link");e.forEach(i=>{i.addEventListener("click",function(a){e.forEach(l=>l.classList.remove("active")),i.classList.add("active")})}),document.addEventListener("click",function(i){i.target.classList.contains("header-nav-link")||e.forEach(a=>a.classList.remove("active"))});const o=document.querySelector(".mobile-menu-open-btn"),r=document.querySelector(".mobile-menu-wraper"),t=document.querySelector(".mobile-menu-wraper-btn-close");o.addEventListener("click",()=>{r.classList.add("is-open")}),t.addEventListener("click",()=>{r.classList.remove("is-open")}),document.addEventListener("keydown",i=>{i.key==="Escape"&&r.classList.remove("is-open")}),document.querySelectorAll(".mobile-menu-item").forEach(function(i){i.addEventListener("click",function(){r.classList.remove("is-open")})})});document.querySelectorAll(".header-nav-link").forEach(s=>{s.addEventListener("click",function(e){e.preventDefault();const o=this.getAttribute("href").substring(1),r=document.getElementById(o);window.scrollTo({top:r.offsetTop-80,behavior:"smooth"})})});document.addEventListener("DOMContentLoaded",()=>{const s=new c(".swiper-container",{direction:"horizontal",loop:!0,slidesPerView:1.3,breakpoints:{320:{spaceBetween:16},1220:{spaceBetween:24}},centeredSlides:!0,mousewheel:!0,keyboard:{enabled:!0},navigation:{nextEl:".triangle-next",prevEl:".triangle-prev"},pagination:{el:".swiper-pagination",clickable:!0,renderBullet:function(e,o){return'<span class="'+o+'"></span>'},bulletClass:"swiper-pagination-bullet",bulletActiveClass:"swiper-pagination-bullet-active"},scrollbar:{el:".swiper-scrollbar"}});document.querySelector(".triangle-next").addEventListener("click",()=>{s.slideNext()}),document.querySelector(".triangle-prev").addEventListener("click",()=>{s.slidePrev()})});document.addEventListener("DOMContentLoaded",function(){const s=document.querySelector(".reviews-swiper");if(s){new c(s,{slidesPerView:1,loop:!0,spaceBetween:16,breakpoints:{320:{slidesPerView:1.075,spaceBetween:16},1200:{slidesPerView:3.1,spaceBetween:24}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},noSwipingClass:"no-swiping",touchMoveStopPropagation:!0});const e=document.createElement("style");e.innerHTML=`
      
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

    `,document.head.appendChild(e)}else console.error("Swiper element not found")});document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".faq-question-text").forEach(e=>{e.addEventListener("click",()=>{const o=e.closest(".faq-item"),r=o.querySelector(".faq-answer"),t=e.getAttribute("aria-expanded")==="true";console.log(document.querySelectorAll(".faq-answer")),document.querySelectorAll(".faq-item").forEach(n=>{n!==o&&(n.querySelector(".faq-answer").style.maxHeight=null,n.classList.remove("open"),n.querySelector(".faq-question-text").setAttribute("aria-expanded","false"))}),t?(r.style.maxHeight=null,e.setAttribute("aria-expanded","false"),o.classList.remove("open")):(r.style.maxHeight=r.scrollHeight+"px",e.setAttribute("aria-expanded","true"),o.classList.add("open"))})})});
//# sourceMappingURL=commonHelpers.js.map
