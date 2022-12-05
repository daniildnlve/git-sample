var x = window.matchMedia("(max-width: 767px)");
function myFunction(x) {
  if (x.matches) { 
    const b__swiper = new Swiper('.brands__swiper', {
    pagination: {
      el: '.swiper-pagination',
      },
      spaceBetween: 16,
      slidesPerView: "auto",
      slidesOffsetAfter: 16,
      slidesOffsetBefore: 16,
    }); 
  }
} 
myFunction(x);

var brands = document.querySelector('.brands__wrapper');
var openButton = document.querySelector('.open-button');

openButton.addEventListener('click', function() {
    brands.classList.toggle('brands__wrapper--hidden');
    openButton.textContent = 'Скрыть';
    openButton.classList.toggle('open-button--open');
    if (brands.classList.contains('brands__wrapper--hidden')) {
      openButton.textContent = 'Показать все';
    }
});
  


