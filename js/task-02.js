const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector('#ingredients');
let ingList = [];
ingredients.forEach((ingredients) => {
    const item = document.createElement('li');
    item.classList.add('item');
    item.textContent = ingredients;
    ingList = [...ingList, item];
})
list.append(...ingList);

const bntEl = document.querySelector('.btn');
bntEl.addEventListener('click', () => {
  console.log('клік')
})