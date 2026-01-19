let swiper;

function initSwiper() {
  swiper = new Swiper('.swiper-repear', {
    // Указываем ваши кастомные классы
    wrapperClass: 'swiper-wrapper-repear',
    slideClass: 'swiper-slide-repear',
    
    // Настройки слайдера
    slidesPerView: 'auto',
    spaceBetween: 20,
    pagination: {
      el: '.swiper-pagination-repear',
      clickable: true,
    },
    loop: true,
    // Включаем только на мобильных (до 768px), если нужно
    breakpoints: {
      768: {
        enabled: false, // Отключает swiper на десктопах
      }
    }
  });
}

initSwiper();
window.addEventListener('resize', () => {
  if (window.innerWidth > 768 && swiper) {
    swiper.destroy(true, true); // Уничтожаем слайдер на десктопах
    swiper = null;
  } else if (window.innerWidth <= 768 && !swiper) {
    initSwiper(); // Инициализируем слайдер на мобильных
  } 
});