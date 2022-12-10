const inputScoreBoxesRef = document.querySelector('input');
const btnCreateRef = document.querySelector('[data-create]');
const btnDestroyRef = document.querySelector('[data-destroy]');
const boxRef = document.querySelector('#boxes');

function getAmount(event) {
  createBoxes(Number(inputScoreBoxesRef.value));
};

function createBoxes(amount) {
  const size = 30;
  let allBoxes = document.createDocumentFragment();
  for (let i = 0; i < amount; i += 1) {
      let box = document.createElement("div");
      box.style.width = size + i * 10 + 'px';
      box.style.height = size + i * 10 + 'px';
      box.style.backgroundColor = getRandomHexColor();
      allBoxes.append(box);
    }
    boxRef.append(allBoxes);
 };
  
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };
  
  function handleOnClickBtnCreateBoxes(event) {
  getAmount();
  createBoxes();
  alertOnInput();
}

inputScoreBoxesRef.addEventListener('change', getAmount);
btnCreateRef.addEventListener('click', handleOnClickBtnCreateBoxes);
btnDestroyRef.addEventListener('click', destroyBoxes);

function destroyBoxes() {
  boxRef.innerHTML = "";
  inputScoreBoxesRef.value = "";
}; 

function alertOnInput (event) {
  if (inputScoreBoxesRef.value > 100) {
    alert('Будь ласка, введіть число меньше 100');
    destroyBoxes();
    createBoxes();
    return;
  }
};
