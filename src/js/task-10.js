const inputScoreBoxsRef = document.querySelector('#controls input');
inputScoreBoxsRef.id = 'input';
const btnCreateRef = document.querySelector('[data-create]');
const btnDestroyRef = document.querySelector('[data-destroy]');
const boxRef = document.querySelector('#boxes');

function getAmount() {
  const amount = inputScoreBoxsRef.value;
  return amount;
};

function createBoxes(amount) {
  const size = '30';
  let allBoxes = [];
    for (let i = 0; i < amount; i += i) { 
      allBoxes += defaultBox; 
      let defaultBox = document.createElement('div');
      defaultBox.style.width = `(${size})px`;
      defaultBox.style.height = `(${size})px`;
      defaultBox.style.backgroundColor = getRandomHexColor();
      defaultBox.style.width = `(${size} + 10)px`;
      defaultBox.style.height = `(${size} + 10)px`;
      defaultBox.push(defaultBox);
      allBoxes.append(...defaultBox);
      return;
    }
    boxRef.insertAdjacentHTML('afterbegin', allBoxes);
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

btnCreateRef.addEventListener('click', createBoxes);
btnDestroyRef.addEventListener('click', destroyBoxes);

function destroyBoxes() {
  boxRef.innerHTML = "";
  inputScoreBoxsRef.value = "";

};