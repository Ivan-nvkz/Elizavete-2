'use strict';

//===  main.js  start =========================================================






document.addEventListener('DOMContentLoaded', () => {



   // Меню бургер 
   const burgerBtn = document.querySelector('.burger__btn');
   const menuList = document.querySelector('.menu__list');

   burgerBtn.addEventListener('click', function (e) {
      e.preventDefault();
      this.classList.toggle('burger__btn-line--active');
      menuList.classList.toggle('menu__list--active');
   });

   // Плавный скролл Start ---------------------------------

   let menu = document.querySelector('.menu__list');
   let links = document.querySelectorAll('.menu__link');

   if (window.location.hash != '') {
      scrollToId(window.location.hash);
   }

   menu.addEventListener('click', function (e) {
      if (e.target.classList.contains('menu__link')) {
         e.preventDefault();

         let link = e.target;
         scrollToId(link.hash);
      }
   });

   let btnUp = document.querySelector('.btnUp');

   btnUp.addEventListener('click', function (e) {
      scrollToY(0);
   });

   let scrolls = 0;
   let scrollTimeout;
   let delay = 100;

   // bad
   window.addEventListener('scroll', function (e) {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(function () {
         onScroll(e);
      }, delay);
   });

   function onScroll(e) {
      // console.log(++scrolls);
      let pos = window.pageYOffset;

      if (pos > window.innerHeight) {
         btnUp.classList.add('btnUp-open');
      }
      else {
         btnUp.classList.remove('btnUp-open');
      }

      for (let i = links.length - 1; i >= 0; i--) {
         let link = links[i];
         let header = document.querySelector(link.hash);

         if (pos > (elemOffsetTop(header) - window.innerHeight / 2)) {
            menu.querySelector('.menu__link-active').classList.remove('menu__link-active');
            link.classList.add('menu__link-active');
            break;
         }
      }
   }

   function scrollToId(id) {
      let target = document.querySelector(id);
      let styles = window.getComputedStyle(target);

      if (target !== null) {
         let pos = elemOffsetTop(target) - menu.clientHeight - parseFloat(styles.marginTop);
         scrollToY(pos);
      }
   }


});
//===  main.js  finish =========================================================
// Плавный скролл  ---------------------------------

function scrollToY(pos) {
   window.scrollTo({
      top: pos - 100,
      behavior: "smooth"
   });
}

function elemOffsetTop(node) {
   let coords = node.getBoundingClientRect();
   return coords.top + window.pageYOffset;
}
// Плавный скролл  End---------------------------------








//=====  JQuery  start  =============================================================
$(function () {

   $('.top__slider').slick({
      // dots: true,
      // arrows: false,
      // fade: true,
      // autoplay: true
   });

});



//=====  JQuery  finish  =============================================================