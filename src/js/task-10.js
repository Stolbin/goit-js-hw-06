const inputScoreBoxsRef = document.querySelector('#controls input');
const btnCreateRef = document.querySelector('[data-create]');
const btnDestroyRef = document.querySelector('[data-destroy]');
const boxRef = document.querySelector('#boxes');


console.log(inputScoreBoxsRef);
console.log(btnCreateRef);
console.log(btnDestroyRef);
console.log(boxRef);

function getAmount() {
  const amount = inputScoreBoxsRef.value;
  return amount;
};


function createBoxes(amount) {
  const size = 30;
  let allBoxes = [];
  for (let i = 0; i < amount; i += 1) {
    const defaultBox = document.createElement('div');
    defaultBox.style.width = `(${size} + 10)px`;
    defaultBox.style.height = `(${size} + 10)px`;
    defaultBox.style.background = getRandomHexColor();
    allBoxes.push(defaultBox);
    boxRef.append(...allBoxes);
    return boxRef;
  }
    // boxRef.insertAdjacentHTML('afterbegin', allBoxes);

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




  
  
  // const size = 30;

  //   const str = `<div style="width=${size}px; heigth=${size}px"`;
  //   const multiBoxes = [];

  //   for (const i = 0; i < amount; i += 1) {
  //     multiBoxes += str;
  //     str = `<div style="width=(${size} + 10)px; heigth=${size} + 10px"`
  //   }
  //   boxRef.insertAdjacentHTML('afterbegin', multiBoxes);