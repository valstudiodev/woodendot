"use strict"

export function initUtils() {
   slidersInit()
   sliderReview()
   setupAccordions()
   showList()
}


// ===========================================================================================
// -----------------------------
// SLIDER
// -----------------------------
function slidersInit() {
   if (document.querySelector('.slider-gallery')) {
      const swiper = new Swiper('.slider-gallery', {
         loop: true,
         // slidesPerView: 1,
         // spaceBetween: 0,
         // centteredSlides: false,

         breakpoints: {
            320: {
               slidesPerView: 1.2,
               spaceBetween: 5,
            },
            420: {
               slidesPerView: 1.8,
               spaceBetween: 10,
               centteredSlides: true,
            },
            768: {
               slidesPerView: 2.3,
               spaceBetween: 15,
               centteredSlides: false,
            },
            768: {
               slidesPerView: 3,
               spaceBetween: 20,
            },
         },
      });
   }
}

function sliderReview() {
   if (document.querySelector('.slider-reviews')) {
      const swiper = new Swiper('.slider-reviews', {
         loop: true,
         slidesPerView: 1,
         spaceBetween: 0,
         centteredSlides: false,

         pagination: {
            el: ".swiper-pagination",
         },

         // breakpoints: {
         //    320: {
         //       slidesPerView: 1.2,
         //       spaceBetween: 5,
         //    },
         //    420: {
         //       slidesPerView: 1.8,
         //       spaceBetween: 10,
         //       centteredSlides: true,
         //    },
         //    768: {
         //       slidesPerView: 2.3,
         //       spaceBetween: 15,
         //       centteredSlides: false,
         //    },
         //    768: {
         //       slidesPerView: 3,
         //       spaceBetween: 20,
         //    },
         // },
      });
   }
}

// ===========================================================================================
// -----------------------------
// accordions
// -----------------------------
const accordions = document.querySelectorAll('[data-accordion]');
const mq = window.matchMedia('(max-width: 490px)');

function setupAccordions() {
   accordions.forEach(item => {
      const btn = item.querySelector('[data-accordion-btn]');
      const body = item.querySelector('[data-accordion-body]');
      if (!btn || !body) return;

      if (!mq.matches) {
         item.classList.remove('active-btn');
         body.style.height = '';
         return;
      }

      body.style.height = item.classList.contains('active-btn')
         ? body.scrollHeight + 'px'
         : '0px';

      btn.onclick = () => {
         const isOpen = item.classList.contains('active-btn');

         if (isOpen) {
            body.style.height = body.scrollHeight + 'px';
            requestAnimationFrame(() => body.style.height = '0px');
            item.classList.remove('active-btn');
         } else {
            item.classList.add('active-btn');
            body.style.height = body.scrollHeight + 'px';

            body.addEventListener('transitionend', () => {
               body.style.height = 'auto';
            }, { once: true });
         }
      };
   });
}

mq.addEventListener('change', setupAccordions);


// ===========================================================================================
// -----------------------------
// showList
// -----------------------------
function showList() {
   const items = document.querySelectorAll('.column-menu');

   items.forEach(item => {
      const icon = item.querySelector('.column-menu__icon');
      // const wrap = item.querySelector('.column-menu__list');

      icon.addEventListener('click', () => {
         icon.classList.toggle('icon-active');
         // wrap.classList.toggle('open');
      });
   });
}
