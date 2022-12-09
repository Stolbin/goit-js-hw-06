const inputScoreBoxsRef = document.querySelector('#controls input');
const btnCreateRef = document.querySelector('[data-create]');
const btnDestroyRef = document.querySelector('[data-destroy]');
const boxRef = document.querySelector('#boxes');

function getAmount() {
  const amount = inputScoreBoxsRef.value;
  return amount;
};

function createBoxes(amount) {
  const size = 30;
  const allBoxes = [];
  for (const i = 0; i < amount; i += 1) {
    const defaultBox = document.createElement('div');
    allBoxes.push(defaultBox);
    defaultBox.style.width = `(${size} + 10)px`;
    defaultBox.style.height = `(${size} + 10)px`;
    defaultBox.style.background = getRandomHexColor();
    return allBoxes;
  }
  boxRef.append(...allBoxes);
  };
  
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };

function handleOnClickBtnCreateBoxes() {
  getAmount();
  createBoxes();
}

inputScoreBoxsRef.addEventListener('change', getAmount);
btnCreateRef.addEventListener('click', handleOnClickBtnCreateBoxes);
btnDestroyRef.addEventListener('click', destroyBoxes);

function destroyBoxes() {
  boxRef.innerHTML = "";
  inputScoreBoxsRef.value = "";
}; 