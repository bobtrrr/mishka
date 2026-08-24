const modal = document.querySelector('.modal');
const overlay = modal.querySelector('.modal__overlay');

let focusedElementBeforeModal;

const openModal = () => {
  focusedElementBeforeModal = document.activeElement;
  modal.classList.add('modal--opened');

  setTimeout(() => {
    modal.focus();
  }, 0);
};

const closeModal = () => {
  modal.classList.remove('modal--opened');

  if (focusedElementBeforeModal) {
    focusedElementBeforeModal.focus();
  }
};

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
