import {readAirports, createAirportList} from "../module/readAirports.js";
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.header__hamburger');
    const mobileMenu = document.querySelector('.header__mobile-menu');

    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', function () {
            // Переключаем класс active для гамбургера и мобильного меню
            hamburger.classList.toggle('active');
            mobileMenu.classList.toggle('active');
        });
    }
});