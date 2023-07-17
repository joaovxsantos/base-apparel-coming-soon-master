const submit = document.querySelector('.bg');
const email = document.querySelector('#inpt');
const msgError = document.querySelector('#msg-error');
const iconError = document.querySelector('#error');

submit.addEventListener('click', () => {
    let validationCaracteres = /\S+@\S+\.\S+/;

    if (validationCaracteres.test(email.value) == false) {
        msgError.classList.add('active');
        iconError.classList.add('active');
    } else {
        msgError.classList.remove('active');
        iconError.classList.remove('active');
    }
})