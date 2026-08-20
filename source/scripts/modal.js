const modal = document.querySelector('.modal');
const overlay = modal.querySelector('.modal__overlay');

let focusedElementBeforeModal;

const openModal = () => {
  focusedElementBeforeModal = document.activeElement;
  modal.classList.add('modal--opened');
  modal.focus();
};

const closeModal = () => {
  modal.classList.remove('modal--opened');

  if (focusedElementBeforeModal) {
    focusedElementBeforeModal.focus();
  }
};

// openButton.addEventListener('click', openModal);
// openButton.addEventListener('click', openModal);

window.addEventListener('click', (evt) => {
  const target = evt.target;

  if (target.closest('.js-open-modal')) {
    openModal();
  }
});

overlay.addEventListener('click', (evt) => {
  if (evt.target === evt.currentTarget) {
    closeModal();
  }
});

modal.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    closeModal();
  }
});
