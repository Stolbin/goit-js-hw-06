const counter = {
    value: 0,
    decrement() {
        this.value -=1;
    },
    increment() {
        this.value +=1;
    },
};

const buttonDecrement = document.querySelector('#counter [data-action="decrement"]');
const buttonIncrement = document.querySelector('#counter [data-action="increment"]');
const countValue = document.querySelector('#value');

buttonDecrement.addEventListener('click', handelButtonDecrementClick);
buttonIncrement.addEventListener('click', handelButtonIncrementClick);

function handelButtonDecrementClick() {
    counter.decrement();
    countValue.textContent = counter.value;
};

function handelButtonIncrementClick() {
    counter.increment();
    countValue.textContent = counter.value;
};