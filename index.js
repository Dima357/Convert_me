// смена контента details
function ChangeContent(event) {

    // Очищаем активные классы с табов
    const detailsAllTab = document.querySelectorAll('.details__tab-item');
    detailsAllTab.forEach((detailsTab) => {
        detailsTab.classList.remove('details__tab-item_active');
    })

    // очищаем активные классы с контента
    const detailsAllText = document.querySelectorAll('.details__list');
    detailsAllText.forEach((detailsText) => {
        detailsText.classList.remove('details__list_active');
    });

    // добавляем активные классы нужным элементам
    const path = event.target.dataset.path;
    document.querySelector(`[data-path="${path}"]`).classList.add('details__tab-item_active');
    document.querySelector(`[data-target="${path}"]`).classList.add('details__list_active');
};


window.addEventListener("DOMContentLoaded", () => {

    // обработчик для бургер-меню
    const headerBurger = document.querySelector('.header__burger');
    const headerMenu = document.querySelector('.menu');
    // Открытие меню
    headerBurger.addEventListener('click', () => {
        headerMenu.classList.add('menu_burger');
    });
    // Закрытие меню
    const headerMenuIcon = document.querySelector('.menu__list-icon-close');
    headerMenuIcon.addEventListener('click', () => {
        headerMenu.classList.remove('menu_burger');
    });

    // Обработчики для формы
    const openFormBtn = document.querySelector('.menu__list-link_form');
    const headerFormContainer = document.querySelector('.header__form-wrapper');
    openFormBtn.addEventListener('click', () => {
        headerFormContainer.classList.add('header__form_open');
    });

    const headerFormClose = document.querySelector('.header__form-icon-close');
    headerFormClose.addEventListener('click', () => {
        headerFormContainer.classList.add('header__form_close');
        setTimeout(() => {
            headerFormContainer.classList.remove('header__form_open', 'header__form_close');
        }, 1000);
    });

    // Маска номера телефона для input
    var input = document.querySelector('.header__form-input-tel');
    var maskOptions = {
        mask: '+{7}(000) 000-00-00'
    };
    var mask = IMask(input, maskOptions);
    
    // обработчик на табы в details
    const detailsAllTab = document.querySelectorAll('.details__tab-item');
    detailsAllTab.forEach((detailsTab) => {
        detailsTab.addEventListener('click', ChangeContent);
    })

    // слайдер в testimonials
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        loop: true,
        longSwipesRatio: 0.05,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        }

    });
});
