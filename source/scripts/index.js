const menuButton = document.querySelector('.main-nav__button');
const menuContainer = document.querySelector('.main-nav');

menuButton.addEventListener('click', () => {
  menuContainer.classList.toggle('main-nav--opened');
  menuButton.classList.toggle('toggle-button--opened');
});
