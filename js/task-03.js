'use strict';

const inp = document.querySelector('#name-input');
const spn = document.querySelector('#name-output');

const changeName = event => {
  const username = event.currentTarget.value.trim().split('');

  if (username.length !== 0) {
    spn.textContent = username.join('');
  }
};

inp.addEventListener('input', changeName);
