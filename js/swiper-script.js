var swiperMedia = window.matchMedia("(max-width: 767px)");

function swiperInit(swiperMedia) {
  if (swiperMedia.matches) { 
    const brandsSwiper = new Swiper('.brands__swiper', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      },
      spaceBetween: 16,
      slidesPerView: 'auto',
      slidesOffsetAfter: 16,
      slidesOffsetBefore: 16,
    }); 
  } 
}
 
swiperInit(swiperMedia);

var brands = document.querySelector('.swiper-wrapper');
var openButton = document.querySelector('.brands__button');

openButton.addEventListener('click', function() {
    brands.classList.toggle('brands__wrapper--hidden');
    openButton.textContent = 'Скрыть';
    openButton.classList.toggle('brands__button--open');
    if (brands.classList.contains('brands__wrapper--hidden')) {
      openButton.textContent = 'Показать все';
    }
});
  


