const menuButton = document.querySelector('.main-nav__button');
const menuContainer = document.querySelector('.main-nav');

if (menuContainer.classList.contains('main-nav--nojs')) {
  menuContainer.classList.remove('main-nav--nojs');
  menuButton.setAttribute('aria-expanded', false);
}

menuButton.addEventListener('click', () => {
  menuContainer.classList.toggle('main-nav--opened');
  menuButton.classList.toggle('toggle-button--opened');

  const isExpand = menuButton.getAttribute('aria-expanded') === 'true';

  menuButton.setAttribute('aria-expanded', !isExpand);
});
