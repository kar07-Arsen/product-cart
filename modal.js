const modalWindowId = document.querySelector('#modalwindow');
const modalCross = document.querySelector('#closeModal');


class Modal {
    constructor(idModal) {
        this.idModal = idModal
        this.isOpenly = true;
        this.crossModal = modalCross;
    }

    openModal() {
        overlay.classList.add('overlay');
        this.idModal.classList.add('modal-showed');
        document.body.style.overflow = 'hidden';  
    }
    
    closeModal() {
        overlay.classList.remove('overlay');
        this.idModal.classList.remove('modal-showed');
        document.body.style.overflow = 'visible';
        this.isOpenly = false;
    }

    modalOpenly() {
        if(this.isOpenly === true) {
            console.log('Модальное окно открыто!');
        } else  {
            console.log('Модальное окно закрыто!')
        }
    }

    closeModalClick() {
        this.crossModal.addEventListener('click', () => {
            overlay.classList.remove('overlay');
            modalWindowId.classList.remove('modal-showed');
            document.body.style.overflow = 'visible';
        })
    }

}

const ModalWindow = new Modal(modalWindowId);
ModalWindow.openModal()

ModalWindow.modalOpenly();

setTimeout(() => {
  ModalWindow.closeModal();
  ModalWindow.modalOpenly()
}, 9000);

ModalWindow.closeModalClick()


