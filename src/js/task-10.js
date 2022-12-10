const inputScoreBoxesRef = document.querySelector('input');
const btnCreateRef = document.querySelector('[data-create]');
const btnDestroyRef = document.querySelector('[data-destroy]');
const boxRef = document.querySelector('#boxes');

function getAmount(event) {
  createBoxes(Number(inputScoreBoxesRef.value));
};

function createBoxes(amount) {
  if (inputScoreBoxesRef.value > 100) {
    alert('Будь ласка, введіть число від 1 до 100');
    destroyBoxes();
    return;
  }
  const size = 30;
  let allBoxes = document.createDocumentFragment();
  for (let i = 0; i < amount; i += 1) {
      let box = document.createElement("div");
      box.style.width = size + i * 10 + 'px';
      box.style.height = size + i * 10 + 'px';
      box.style.backgroundColor = getRandomHexColor();
      allBoxes.appendChild(box);
    }
    boxRef.appendChild(allBoxes);
 };
  
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };
  
  function handleOnClickBtnCreateBoxes(event) {
  getAmount();
  createBoxes();
}

btnCreateRef.addEventListener('click', handleOnClickBtnCreateBoxes);
btnDestroyRef.addEventListener('click', destroyBoxes);

function destroyBoxes() {
  boxRef.innerHTML = "";
  inputScoreBoxesRef.value = "";
}; 


