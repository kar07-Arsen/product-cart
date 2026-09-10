export class Modal {
  constructor(modalId, buttonId, shouldCloseOnOverlay) {
    this.modal = document.getElementById(modalId);
    this.overlay = document.getElementById('overlay');
    this.#initOpen(buttonId);
    this.shouldCloseOnOverlay = shouldCloseOnOverlay;
    this.closeOverlay = this.close.bind(this);
    this.closeButton = this.close.bind(this);
    this.modalClose = this.modal.querySelector('#modal-close-button');
  }
  
  open() {
    this.modal.classList.add('modal-showed');
    this.overlay.classList.add('overlay-showed');
    this.#initClose(this.shouldCloseOnOverlay);
  }

  close() {
    this.modal.classList.remove('modal-showed');
    this.overlay.classList.remove('overlay-showed');
    this.overlay.removeEventListener('click', this.closeOverlay);
    this.modalClose.removeEventListener('click', this.closeButton);
  }

  isOpen() {
    return this.modal.classList.contains('modal-showed');
  }

  #initOpen(buttonId) {
    const button = document.getElementById(buttonId);
    button.addEventListener('click', () => {
      this.open();
    })
  }

  #initClose(shouldCloseOnOverlay) {
    const closeButton = this.modalClose

    closeButton.addEventListener('click', this.closeButton);

    if (shouldCloseOnOverlay) {
      this.overlay.addEventListener('click', this.closeOverlay)
    }
  }
}