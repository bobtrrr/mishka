const sliderContainer = document.querySelector('.reviews');
const slides = sliderContainer.querySelectorAll('.reviews__item');
const prevButton = sliderContainer.querySelector('.reviews__button-prev');
const nextButton = sliderContainer.querySelector('.reviews__button-next');

let sliderCount = 0;

const MAX_SLIDES = 2;
const MIN_SLIDES = 0;

const shoudDisableButton = (count) => {
  if (count >= MAX_SLIDES) {
    nextButton.setAttribute('disabled', 'disabled');
  } else {
    nextButton.removeAttribute('disabled', 'disabled');
  }

  if (count <= MIN_SLIDES) {
    prevButton.setAttribute('disabled', 'disabled');
  } else {
    prevButton.removeAttribute('disabled', 'disabled');
  }
};

const nextButtonClickHandler = () => {
  slides[sliderCount].classList.remove('reviews__item--active');
  sliderCount++;

  shoudDisableButton(sliderCount);

  slides[sliderCount].classList.add('reviews__item--active');
};

const prevButtonClickHandler = () => {
  slides[sliderCount].classList.remove('reviews__item--active');
  sliderCount--;

  shoudDisableButton(sliderCount);

  slides[sliderCount].classList.add('reviews__item--active');
};

nextButton.addEventListener('click', nextButtonClickHandler);
prevButton.addEventListener('click', prevButtonClickHandler);
