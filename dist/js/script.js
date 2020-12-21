
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
