const inputScoreBoxsRef = document.querySelector('.controls input');
const controlsBoxsRef = document.querySelector('.controls');
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
    for (let i = 0; i < amount; i+=i) {
      boxRef += defaultBox;
      defaultBox.style.width = 'defaultBox.style.width + 10px';
      defaultBox.style.height = 'defaultBox.style.height + 10px';
      defaultBox.push(defaultBox);
      return boxRef.append(...defaultBox); 
    }
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

btnCreateRef.addEventListener('click', createBoxes);
btnDestroyRef.addEventListener('click', destroyBoxes);

function destroyBoxes() {
  controlsBoxsRef.reset();
};