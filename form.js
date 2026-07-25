// Создать файл Form.js и реализовать класс для формы под названием Form. 
// Он будет принимать 1 параметр - айди формы. 
// Внутри класса будут методы Для получения всех значений формы.
// II. Для проверки валидности формы (метод возвращает true/false в зависимости от того, валидна ли форма).
// III. Для сброса значений формы.

const modalWindow = document.querySelector('.modal');
const idForm = document.querySelector('#regUserForm');

class Form {
    constructor(idForm) {
        this.formId = idForm;
    }
    
    getAllValue() {
        
        idForm.addEventListener('submit', (events) => {
            events.preventDefault();
        
            this.formValue = new FormData(this.formId);
            this.formValue.append('createdOn', new Date());
            this.formValue.forEach((value, key) => {
            console.log(`${key} : ${value}`);
        }); 
        
        overlay.classList.remove('overlay');
        modalWindow.classList.remove('modal-showed');
        document.body.style.overflow = 'visible';
        this.user = Object.fromEntries(this.formValue);
        return this.user;
    })
};

    checkValidation() {

        this.formId.addEventListener('submit', () => {
            if (!this.formId.checkValidity()) {
            return false;
        } 
        return true;
        })
    };

    resetValues() {
            this.formId.reset();
    }
}

const objectForm = new Form(idForm);

objectForm.getAllValue();
objectForm.checkValidation();

setTimeout(() => {
  objectForm.resetValues();
}, 5000);
