'use strict';

const registerForm = document.querySelector('.login-form');

registerForm.addEventListener('submit', register);

function register(event) {
  event.preventDefault();
  const form = event.target;
  const login = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();

  if (login.length === 0 || password.length === 0) {
    alert('All form fields must be filled in');
  } else {
    const first = form.elements.email.getAttributes('type');
    const second = form.elements.password.getAttributes('type');
    const result = { first: login, second: password };
  }

  event.target.reset();
}
