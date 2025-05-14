const initializeModal = () => {
  const modal = document.querySelector<HTMLElement>('.calendly-inline-widget-wrapper');
  const openModalButtons = document.querySelectorAll<HTMLButtonElement>('.btn-open-modal');

  console.log(modal, openModalButtons);

  if (modal) {
    openModalButtons.forEach((button) => {
      button.addEventListener('click', () => {
        modal.classList.add('calendly-inline-widget-wrapper--opened');
        document.body.classList.add('body-lock');
      });
    });

    modal.addEventListener('click', (event) => {
      if (modal.classList.contains('calendly-inline-widget-wrapper--opened')) {
        const target = event.target as HTMLElement;

        if (target === modal) {
          modal.classList.remove('calendly-inline-widget-wrapper--opened');
          document.body.classList.remove('body-lock');
        }
      }
    });
  }
};