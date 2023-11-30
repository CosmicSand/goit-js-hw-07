'use strict';

const input = document.querySelector('#name-input');
const span = document.querySelector('#name-output');

input.addEventListener('input', changeName);

function changeName(event) {
  const username = event.currentTarget.value.trim();

  if (username.length) {
    span.textContent = username;
  } else {
    span.textContent = 'Anonymous';
  }
}
