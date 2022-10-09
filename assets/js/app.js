const swiper = new Swiper('.swiper-hero', {
    slidesPerView: 1
})

const swiperSeries = new Swiper('.swiper-series', {
    slidesPerView: 1.7,
    spaceBetween: 20,
    grabCursor: true,
    // autoplay: {
    //     delay: 1000,
    // },
    breakpoints: {
        '@0.75': {
            slidesPerView: 2.5
        },
        '@1': {
            slidesPerView: 4.5
        }
    }
})

let hamburger = document.querySelector('.hamburger');
let navMobile = document.querySelector('.nav-mobile');
let header = document.querySelector('.header');

hamburger.addEventListener('click', () => {
    hamburger.querySelector('.hamburger-icon').classList.toggle('toggled');
    navMobile.classList.toggle('active')
});

document.addEventListener('scroll', () => {
    if (scrollY > header.clientHeight) {
        header.classList.add('active');
    }
    if (scrollY < header.clientHeight) {
        header.classList.remove('active')
    }
})