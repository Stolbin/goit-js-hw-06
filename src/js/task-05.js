const inputRef = document.querySelector("#name-input");
const outpRef = document.querySelector("#name-output");

// inputRef.oninput = function() {
//     document.getElementById('name-output').innerHTML = inputRef.value;
// };

inputRef.addEventListener("input", function onFormInput(event) {
        event.currentTarget.value;
            outpRef.textContent = event.currentTarget.value;
                if (event.currentTarget.value === "") {
                    return outpRef.textContent = "Anonymous";
                }
    }
)