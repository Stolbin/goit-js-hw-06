const bodyBackground = document.querySelector('body');
const output = document.querySelector('.color');
const btnTextColor = document.querySelector('.change-color');

bodyBackground.addEventListener('click', changeColorOnClick);

function changeColorOnClick() {
  const colorResult = getRandomHexColor();
  output.textContent = colorResult;
  output.style.fontSize = '60px';
  bodyBackground.style.backgroundColor = colorResult;
  btnTextColor.style.color = colorResult;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}