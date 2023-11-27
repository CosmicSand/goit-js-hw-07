'use stict';

const categoriesAr = document.querySelector('#categories').children;

const catPureAr = [...categoriesAr];

console.log(`Number of categories: ${catPureAr.length}`);

const message = () => {
  catPureAr.forEach(category => {
    console.log(`Category: ${category.querySelector('h2').textContent}`);
    console.log(`Elements: ${category.querySelector('ul').children.length}`);
  });
};
message();
