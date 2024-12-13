const menuOpenBtn = document.querySelector("#menu-open-btn");
const menuCloseBtn = document.querySelector("#menu-close-btn");

menuOpenBtn.addEventListener("click", () => {
    // toggle button meny visibility
    document.body.classList.toggle("show-mobile-menu");
});

menuCloseBtn.addEventListener("click", () => {
    menuOpenBtn.click()
});

const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 25,
  
    // If we need pagination
    pagination: {
      clickable: true,
      dynamicBullets: true,  
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // responsive breakpoints
    breakpoints: {
      0:{
        slidesPerView: 1
      },
      768:{
        slidesPerView: 2
      },
      1024:{
        slidesPerView: 3
      }
    }
  
  });