window.onload = function() {
    const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,                         
    slidesPerView: 1.35,
    autoplay: {                         
        delay: 3500,
        disableOnInteraction: false,
    },   
    centeredSlides : true,
    initialSlide: 2,
    loadPrevNext:true,
    watchSlidesVisibility: true,
    spaceBetween: 10,
    speed: 1200,
    keyboard: true,
    simulateTouch: true,
    touchAngle: 45,
    touchRatio: 1,
    preventClicksPropagation: true,
    grabCursor: true,
    preventClicks: true,
    touchReleaseOnEdges: false,
    passiveListeners: true,
    followFinger:true,
    mousewheel: {
    forceToAxis: true,
    },

    // If we need pagination
    pagination: {
        el: ".swiper-bullet-wrapper",
        bulletActiveClass: "is-active",
        bulletClass: "swiper-bullet",
        bulletElement: "button",
        clickable: true
    },
  
    // Navigation arrows
    navigation: {
        nextEl: ".swiper-next",
        prevEl: ".swiper-prev"
    },

    breakpoints: {
        640: {
          slidesPerView: 1.5,
          spaceBetween: 10,
        },
    }
    });
};