/* empty css                      */import{S as l}from"./assets/vendor-7d212bb0.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function i(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(e){if(e.ep)return;e.ep=!0;const n=i(e);fetch(e.href,n)}})();document.addEventListener("DOMContentLoaded",s=>{const t=document.querySelectorAll(".header-nav-link");t.forEach(r=>{r.addEventListener("click",function(c){t.forEach(a=>a.classList.remove("active")),r.classList.add("active")})}),document.addEventListener("click",function(r){r.target.classList.contains("header-nav-link")||t.forEach(c=>c.classList.remove("active"))});const i=document.querySelector(".mobile-menu-open-btn"),o=document.querySelector(".mobile-menu-wraper"),e=document.querySelector(".mobile-menu-wraper-btn-close");i.addEventListener("click",()=>{o.classList.add("is-open")}),e.addEventListener("click",()=>{o.classList.remove("is-open")}),document.addEventListener("keydown",r=>{r.key==="Escape"&&o.classList.remove("is-open")}),document.querySelectorAll(".mobile-menu-item").forEach(function(r){r.addEventListener("click",function(){o.classList.remove("is-open")})})});document.querySelectorAll(".header-nav-link").forEach(s=>{s.addEventListener("click",function(t){t.preventDefault();const i=this.getAttribute("href").substring(1),o=document.getElementById(i);window.scrollTo({top:o.offsetTop-80,behavior:"smooth"})})});document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".header-nav-link, .mobile-menu-item").forEach(t=>{t.addEventListener("click",function(i){i.preventDefault();const o=this.getAttribute("href").substring(1),e=document.getElementById(o);if(e){const n=document.querySelector(".header").offsetHeight;window.scrollTo({top:e.offsetTop-n,behavior:"smooth"});const r=document.querySelector(".mobile-menu-wraper");r&&r.classList.contains("is-open")&&r.classList.remove("is-open")}})})});document.addEventListener("DOMContentLoaded",()=>{const s=new l(".swiper-container",{direction:"horizontal",loop:!0,slidesPerView:2,centeredSlidesBounds:!0,spaceBetween:24,320:{slidesPerView:1.3,spaceBetween:16},1200:{slidesPerView:2,spaceBetween:24},centeredSlides:!0,mousewheel:!0,keyboard:{enabled:!0},navigation:{nextEl:".triangle-next",prevEl:".triangle-prev"},pagination:{el:".swiper-pagination",clickable:!0,bulletClass:"swiper-pagination-bullet",bulletActiveClass:"swiper-pagination-bullet-active"},scrollbar:{el:".swiper-scrollbar"}});document.querySelector(".triangle-next").addEventListener("click",()=>{s.slideNext()}),document.querySelector(".triangle-prev").addEventListener("click",()=>{s.slidePrev()})});document.addEventListener("DOMContentLoaded",function(){const s=document.querySelector(".reviews-swiper");if(s){const t=new l(s,{slidesPerView:1,loop:!0,spaceBetween:16,breakpoints:{320:{slidesPerView:1.09,spaceBetween:12},1200:{slidesPerView:3.1,spaceBetween:24}},mousewheel:!0,keyboard:{enabled:!0},pagination:{el:".swiper-pagination",clickable:!0,bulletClass:"swiper-pagination-bullet",bulletActiveClass:"swiper-pagination-bullet-active"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},scrollbar:{el:".swiper-scrollbar"}});document.querySelector(".triangle-next-rew").addEventListener("click",()=>{t.slideNext()}),document.querySelector(".triangle-prev-rew").addEventListener("click",()=>{t.slidePrev()})}});document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".faq-question-text").forEach(t=>{t.addEventListener("click",()=>{const i=t.closest(".faq-item"),o=i.querySelector(".faq-answer"),e=t.getAttribute("aria-expanded")==="true";console.log(document.querySelectorAll(".faq-answer")),document.querySelectorAll(".faq-item").forEach(n=>{n!==i&&(n.querySelector(".faq-answer").style.maxHeight=null,n.classList.remove("open"),n.querySelector(".faq-question-text").setAttribute("aria-expanded","false"))}),e?(o.style.maxHeight=null,t.setAttribute("aria-expanded","false"),i.classList.remove("open")):(o.style.maxHeight=o.scrollHeight+"px",t.setAttribute("aria-expanded","true"),i.classList.add("open"))})})});
//# sourceMappingURL=commonHelpers.js.map
