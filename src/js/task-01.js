const categories = document.querySelectorAll('li.item');
console.log('Number of categorie: ', categories.length);

//! Animals
const categorieOne = categories[0].firstElementChild;
const categorieOneElemets = categorieOne.nextElementSibling;
const elementListOne = categorieOneElemets.children.length;

console.log('Categoty: ', categorieOne.textContent)
console.log('Elements: ', elementListOne)

//! Prodcts
const categorieTwo = categories[1].firstElementChild;
const categorieTwoElemets = categorieTwo.nextElementSibling;
const elementListTwo = categorieTwoElemets.children.length;

console.log('Categoty: ', categorieTwo.textContent);
console.log('Elements: ', elementListTwo)

//! Technologies
const categorieThree = categories[2].firstElementChild;
const categorieThreeElemets = categorieThree.nextElementSibling;
const elementListThree = categorieThreeElemets.children.length;

console.log('Categoty: ', categorieThree.textContent);
console.log('Elements: ', elementListThree)