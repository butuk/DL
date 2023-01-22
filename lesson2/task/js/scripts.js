window.addEventListener('load', function () {
  const form = document.querySelector('form');
  const fields = document.querySelectorAll('.check');
  const btn = document.querySelector('.button');

  form.addEventListener('click', (e) => {
    e.target.classList.remove('err');
  })

  btn.addEventListener('click', (e) => {
    fields.forEach(field => {
      if(!field.value) {
        e.preventDefault();
        field.classList.add('err');
      }
    });
  });
})