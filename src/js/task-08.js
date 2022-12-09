const formRef = document.querySelector('.login-form');

formRef.addEventListener('submit', validForm);

function validForm(event) {

    event.preventDefault();
    const formElements = event.currentTarget.elements;
    const email = formElements.email.value;
    const password = formElements.password.value;
    if (email.length === 0 || password.length === 0) {
        alert('Будь ласка, заповніть всі поля');
        return;
    }
        const formData = {
            email,
            password,
        }
        formRef.reset();
} 

