'use strict';

const modal = document.querySelector('.modal');
const btn = document.querySelector('.btn');
const exit = document.querySelector('.modal-exit');

btn.addEventListener('click', function () {
  modal.style.visibility = 'visible';
  exit.style.visibility = 'visible';
});

exit.addEventListener('click', function () {
  modal.style.visibility = 'hidden';
  exit.style.visibility = 'hidden';
});
