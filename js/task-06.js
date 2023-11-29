'use stict';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputValue = document.querySelector('#controls input');

const createBtn = document.querySelector('#controls button[data-create]');

const destroyBtn = document.querySelector('#controls button[data-destroy]');

const boxContainer = document.querySelector('#boxes');

createBtn.addEventListener('click', check);

function check(event) {
  const amount = Number.parseInt(inputValue.value);

  if (amount >= 1 && amount <= 100) {
    boxContainer.insertAdjacentHTML('afterbegin', createBoxes(amount));
  }

  function createBoxes(amount) {
    const divArray = [];
    for (let i = 0; i < amount; i++) {
      divArray.push(
        `<div style=width:${30 + 10 * i}px;height:${
          30 + 10 * i
        }px;background-color:${getRandomHexColor()}></div>`
      );
    }
    return divArray.join('');
  }
}

destroyBtn.addEventListener('click', destroyBoxes);

function destroyBoxes() {
  boxContainer.textContent = '';
  inputValue.value = null;
}

// function createCollection() {
//   const divArray = [];
//   for (let i = 0; i < quantity; i++) {
//     divArray.push(
//       `<div style=width:${30 + 10 * i}px;height:${
//         30 + 10 * i
//       }px;background-color:${getRandomHexColor()}></div>`
//     );
//   }
//   return divArray.join('');
// }
