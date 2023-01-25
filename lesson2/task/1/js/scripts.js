'use strict';

window.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');
  const fields = form.querySelectorAll('.check');
  let isError = false;

  form.addEventListener('submit', (e) => {
    fields.forEach(field => {
      if(field.value.trim().length === 0) {
        isError = true;
        field.classList.add('err');
        field.value = '';
      }
    })
    if(isError){
      e.preventDefault();
    }
  });

  form.addEventListener('focusin', (e) => {
    if([...fields].includes(e.target)){
      e.target.classList.remove('err');
    }
  })
})