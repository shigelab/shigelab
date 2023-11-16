const responsive_menu_btn = document.querySelector('.responsive-btn');
responsive_menu_btn.addEventListener('click', menuToggle);

function menuToggle() {
    const header_menu_detail = document.querySelector('.header-bg');
    header_menu_detail.classList.toggle('menu-active');
    for(var i = 1; i <= 3; i++) {
        const line = document.querySelector(`.menu-line${i}`);
        line.classList.toggle(`close${i}`);
    }
}