import {disableScrolling, enableScrolling} from '../utils/scroll-lock';
const menu = document.querySelector('.main-nav__wrapper');
const menuToggle = document.querySelector('.main-nav__toggle');

const initMenu = () => {
  const openMobileMenu = () => {
    if (menu.classList.contains('menu-opened')) {
      menu.classList.remove('menu-opened');
      enableScrolling();
    } else {
      menu.classList.add('menu-opened');
      disableScrolling();
    }
  };

  menuToggle.addEventListener('click', openMobileMenu);
};

export {initMenu};
