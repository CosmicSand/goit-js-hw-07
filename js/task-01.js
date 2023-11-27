'use stict';

const categories = document.querySelector('#categories');

const category = document.querySelector('.item > h2');
let numOfCat = 0;
const message = () => {
  console.log(categories.map(cat => category));
};
console.log(category.textContent);
console.log(categories);
message();
