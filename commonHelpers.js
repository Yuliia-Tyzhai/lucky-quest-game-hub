/* empty css                      */(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();document.addEventListener("DOMContentLoaded",i=>{const o=document.querySelectorAll(".header-nav-link");o.forEach(n=>{n.addEventListener("click",function(s){s.preventDefault(),o.forEach(l=>l.classList.remove("active")),n.classList.add("active")})}),document.addEventListener("click",function(n){n.target.classList.contains("header-nav-link")||o.forEach(s=>s.classList.remove("active"))});const c=document.querySelector(".mobile-menu-open-btn"),r=document.querySelector(".mobile-menu-wraper"),e=document.querySelector(".mobile-menu-wraper-btn-close");c.addEventListener("click",()=>{r.classList.add("is-open")}),e.addEventListener("click",()=>{r.classList.remove("is-open")}),document.addEventListener("keydown",n=>{n.key==="Escape"&&r.classList.remove("is-open")}),document.querySelectorAll(".mobile-menu-item").forEach(function(n){n.addEventListener("click",function(){r.classList.remove("is-open")})})});
//# sourceMappingURL=commonHelpers.js.map