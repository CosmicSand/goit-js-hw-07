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

createBtn.addEventListener('click', createBoxes);

function createBoxes() {
  const amount = Number.parseInt(inputValue.value);

  if (amount >= 1 && amount <= 100) {
    const divArray = [];
    for (let i = 0; i < amount; i++) {
      divArray.push(
        `<div style=width:${30 + 10 * i}px;height:${
          30 + 10 * i
        }px;background-color:${getRandomHexColor()}></div>`
      );
    }
    const boxes = divArray.join('');
    boxContainer.insertAdjacentHTML('afterbegin', boxes);
  }
}

destroyBtn.addEventListener('click', destroyBoxes);

function destroyBoxes() {
  boxContainer.textContent = null;
  inputValue.value = null;
}
