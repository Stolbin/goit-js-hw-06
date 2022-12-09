const inputScoreBoxsRef = document.querySelector('.controls input');
const btnCreateRef = document.querySelector('[data-create]');
const btnDestroyRef = document.querySelector('[data-destroy]');
const boxRef = document.querySelector('#boxes');

btnCreateRef.addEventListener('click', createBoxes);


function getAmount() {
  const amount = inputScoreBoxsRef.value;
  return amount;
};


function createBoxes(amount) {
  const defaultSizeBox = '30';
  const defaultBox = `<div style="width:${defaultSizeBox}px; height:${defaultSizeBox}px"></div>`;
  for (let i = 0; i < amount; i+=i) {
    boxes += defaultBox;
    defaultBox = `<div style="width:${defaultSizeBox += 10}px; height:${defaultSizeBox += 10}px"></div>`;
    defaultBox.style.backgroundColor = getRandomHexColor();
  }
  boxRef.insertAdjacentHTML('afterbegin', boxes)
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

btnDestroyRef.addEventListener('click', destroyBoxes);

function destroyBoxes() {
  btnCreateRef.reset();
}