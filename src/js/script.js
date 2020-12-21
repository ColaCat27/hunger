document.addEventListener('DOMContentLoaded', () => {
//menu 
const burger = document.querySelector('.header__burger'),
      menu = document.querySelector('.header__nav');

burger.addEventListener('click', () => {
    burger.classList.toggle('header__burger_active');
    menu.classList.toggle('header__nav_active');
});



//gallery
lightGallery(document.getElementById('lightgallery'));

//tabs and slider
const mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    hashNavigation: {
        watchState: true
    }
});

});