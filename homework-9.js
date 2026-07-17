
// Уровень 1 #4

const formEmail = document.querySelector('#footer-form');
formEmail.addEventListener('submit', (event) => {
    event.preventDefault();
    const formFooter = event.target;
    const formInput = new FormData(formFooter);
    const data = Object.fromEntries(formInput.entries());
    console.log(data);
})

// Уровень 2 #5, 7

const btnModal = document.querySelector('.btnModal');
const btnForm = document.querySelector('#buttonForm');
const modalWindow = document.querySelector('.modal');
const overlay = document.querySelector('#overlay')
const regForm = document.querySelector('#regUserForm');
const closeModal = document.querySelector('#closeModal');

const userPassword = document.querySelector('#userPassword');
const confirmPassword = document.querySelector('#userConfirmPassword');

btnModal.addEventListener('click', () => {
    overlay.classList.add('overlay');
    modalWindow.classList.add('modal-showed');
    document.body.style.overflow = 'hidden';

})



regForm.addEventListener('submit', (e) => {
    e.preventDefault();

    confirmPassword.setCustomValidity('');

    if (userPassword.value !== confirmPassword.value) {
        confirmPassword.setCustomValidity('Пароли не совпадают!');
        confirmPassword.reportValidity();

        setTimeout(() => {
            alert(' Пароли не совпадают!');
            location.reload();
        }, 800);
        return; 
    }
    const formData = new FormData(regForm);
    formData.append('createdOn', new Date());
    formData.forEach((value, key) => {
        console.log(`${key} : ${value}`);
    });
    overlay.classList.remove('overlay');
    modalWindow.classList.remove('modal-showed');
    document.body.style.overflow = 'visible';
    const user = Object.fromEntries(formData); 
});

        
