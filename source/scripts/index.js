const menuButton = document.querySelector('.main-nav__button');
const menuContainer = document.querySelector('.main-nav');

if (menuContainer.classList.contains('main-nav--nojs')) {
  menuContainer.classList.remove('main-nav--nojs');
}

menuButton.addEventListener('click', () => {
  menuContainer.classList.toggle('main-nav--opened');
  menuButton.classList.toggle('toggle-button--opened');
});
