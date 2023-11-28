'use strict';

const inp = document.querySelector('#name-input');
const spn = document.querySelector('#name-output');

// const handle = () => {
//   spn.insertAdjacentHTML('afterbegin', inp.textContent);
// };

// inp.addEventListener('keydown', event => {
//   if (event.code !== 'Space') {
//     console.log(inp.textContent);
//     spn.textContent = inp.textContent.trim();
//   }
//   {
//   }
// });

inp.addEventListener('input', event => {
  if (event.code !== 'Space') {
    spn.textContent = event.currentTarget.value;
  }
});
