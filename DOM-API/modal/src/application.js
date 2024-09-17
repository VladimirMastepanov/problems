const openHandler = (modal) => {
  modal.classList.add('show');
  modal.style.display = 'block'; // eslint-disable-line
};

const closeHandler = (modal) => {
  modal.classList.remove('show');
  modal.style.display = 'none'; // eslint-disable-line
};

export default () => {
  const buttons = document.querySelectorAll('[data-toggle="modal"]');
  buttons.forEach((element) => {
    const id = element.dataset.target;
    const modal = document.querySelector(id);
    element.addEventListener('click', () => openHandler(modal));
    const closeButton = modal.querySelector('[data-dismiss="modal"]');
    closeButton.addEventListener('click', () => closeHandler(modal));
  });
};
