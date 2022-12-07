const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener("blur", focusOninputRef);

function focusOninputRef(event) {
    inputRef.classList.remove("invalid");
    if (event.currentTarget.value.length === Number(inputRef.dataset.length)) {
        inputRef.classList.add('valid')
    } else         
    inputRef.classList.add('invalid')
    }   
