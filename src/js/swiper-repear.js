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

const showMoreButton = document.getElementById('media-button-repear');
const slides = document.querySelectorAll('.swiper-slide-repear');

let isOpen = false;

showMoreButton.addEventListener('click', function() {
const hiddenCount = getHiddenCount(); // сколько скрывать на этом экране

  if (!isOpen) {
    // Показать все
    slides.forEach(slide => {
      slide.style.display = 'flex';
    });
  } else {
    // Скрыть обратно нужное количество
    slides.forEach((slide, index) => {
      if (index >= slides.length - hiddenCount) {
        slide.style.display = 'none';
      }
    });
  }

  isOpen = !isOpen;
});
;
function getHiddenCount() {
  const width = window.innerWidth;
  if (width >= 1120) { return 4; // планшеты
  } 
  
  if (width >= 768) { return 5; // компютеры
 }

}
const btn = document.getElementById('media-button-repear');
btn.addEventListener('click', () => {
    // Находим изображение внутри кнопки при каждом клике,
    
    const img = btn.querySelector('#media-img-repear');

    if (img) {
        // Переключаем класс flip
        img.classList.toggle('flip');

        // Меняем только текстовый узел (если он есть, или через innerText)
        if (img.classList.contains('flip')) {
            btn.lastChild.textContent = 'Скрыть';
        } else {
            btn.lastChild.textContent = 'Показать все';
        }
    }
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


// Вызываем функцию при зaгрузке страницы
document.addEventListener('DOMContentLoaded', checkSwiper);

// Вызываем функцию при изменении размера окна (для адаптивности)
window.addEventListener('resize', checkSwiper);