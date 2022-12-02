const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients')
const ingredientsList = option => {
  return ingredients.map(option => {
    const liElement = document.createElement('li')
    liElement.classList.add('elements')
    liElement.style.listStyle = 'none'
    liElement.textContent = option
    return liElement
  })
};


const elementsList = ingredientsList(ingredients);
list.append(...elementsList);
console.log(ingredients);

