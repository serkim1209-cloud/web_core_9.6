let swiper
function initSwiper() {
    swiper = new Swiper('.swiper-prices', {
        wrapperClass: 'swiper-wrapper-prices',
        slideClass: 'swiper-slide-prices',
        slidesPerView: 'auto',
        spaceBetween: 20,
        pagination: {
            el: '.swiper-pagination-prices',
            clickable: true,
        },
        loop: true,
    })
}
document.addEventListener('DOMContentLoaded', () => {
  initSwiper();
});

initSwiper();
window.addEventListener('resize', () => {
  if (window.innerWidth > 768 && swiper) {
    swiper.destroy(true, true); // Уничтожаем слайдер на десктопах
    swiper = null;
  } else if (window.innerWidth <= 768 && !swiper) {
    initSwiper(); // Инициализируем слайдер на мобильных
  } 
});