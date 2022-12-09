const inputScoreBoxsRef = document.querySelector('.controls input');
const btnCreateRef = document.querySelector('[data-create]');
const btnDestroyRef = document.querySelector('[data-destroy]');
const boxRef = document.querySelector('#boxes');

function getAmount() {
  const amount = inputScoreBoxsRef.value;
  return amount;
};

function createBoxes(amount) {    
  const defaultBox = document.createElement('div');
  defaultBox.style.width = '30px';
  defaultBox.style.height = '30px';
  defaultBox.style.backgroundColor = getRandomHexColor();
  const allBoxes = [];
    for (let i = 0; i < amount; i+=i) {
      allBoxes += defaultBox;
      defaultBox.style.width = 'defaultBox.style.width + 10px';
      defaultBox.style.height = 'defaultBox.style.height + 10px';
      allBoxes.push(allBoxes);
      boxRef.append(...allBoxes);
    }

    // boxRef.insertAdjacentHTML('afterbegin', allBoxes);
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

btnCreateRef.addEventListener('click', createBoxes);
btnDestroyRef.addEventListener('click', destroyBoxes);

function destroyBoxes() {
  inputScoreBoxsRef.reset();
};