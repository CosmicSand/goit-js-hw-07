'use stict';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputValue = document.querySelector('#controls input');

const createBtn = document.querySelector('#controls button[data-create]');

const boxContainer = document.querySelector('#boxes');

createBtn.addEventListener('click', check);

function check(event) {
  const quantity = Number.parseInt(inputValue.value);

  function createCollection() {
    const array = [];
    for (let i = 0; i < quantity; i++) {
      array.push(`<div></div>`);
    }

    console.log(array);

    const div = document.querySelector('div');

    console.log(div);

    const boxes = array.forEach((boxSt, i) => {
      // const div = document.querySelector('div');
      div.style.backgroundColor = getRandomHexColor();
      div.style.width = `${30 + 10 * i}px`;
      div.style.height = `${30 + 10 * i}px`;
    });
    console.log(array);
    //   .join('');
    // return boxes;
  }
  console.log(createCollection());

  if (quantity >= 1 && quantity <= 100) {
    boxContainer.insertAdjacentHTML('afterbegin', createCollection);
  }
}

// console.log(inputValue.target.value);

// function createCollection() {
//   const array = [];
//   const boxes = array
//     .map(box => `<div></div>`)
//     .forEach((boxSt, i) => {
//       const div = document.querySelector('boxSt');
//       div.style.backgroundColor = getRandomHexColor();
//       div.style.width = `${30 + 10 * i}px`;
//       div.style.height = `${30 + 10 * i}px`;
//     })
//     .join('');
// }
