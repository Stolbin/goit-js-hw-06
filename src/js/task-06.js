const input = document.querySelector('#validation-input');

input.addEventListener("blur", focusOnInput);

function focusOnInput(event) {
    input.classList.remove("invalid");
    if (event.currentTarget.value.length === Number(input.dataset.length)) {
        input.classList.add('valid')
    } else         
    input.classList.add('invalid')
    }   
